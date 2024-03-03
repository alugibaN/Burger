import React, { useCallback, useEffect } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import sty from "./MenuItem.module.css";
import { useSelector, useDispatch } from "../../utils/hooks";
import { useDrag } from "react-dnd";
import { BURGER_ID, SUM_PRICES } from "../../services/AddIngredient/action";
// import { OPEN_MODAL_INGREDIENT } from "../../services/Modal/action";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IItem } from "../../utils/utils";

interface ImoveProps {
  type: string;
  item: IItem;
}

const MenuItem: React.FC<ImoveProps> = ({ type, item }) => {
  const { burgerIngredients, bun, ingredients } = useSelector(
    (state) => state.ingr
  );
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: type,
    item: item,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = useCallback(() => {
    navigate(`/ingredient/${item._id}`, { state: { modal: true } });
  }, []);

  const count = ingredients.filter((el: string) => el === item._id);
  const counLength = count.length;

  useEffect((): void => {
    dispatch({ type: SUM_PRICES });
    dispatch({ type: BURGER_ID });
  }, [bun, burgerIngredients]);

  return (
    <>
      {item.type === type ? (
        <Link
          to={`/ingredient/${item._id}`}
          state={{ background: location }}
          className={`${sty.link} text text_type_digits-default`}
        >
          <li className={`${sty.card} pl-4 pr-4`} ref={dragRef}>
            {count.length > 0 ? (
              <Counter count={counLength} size="default" extraClass={`m-1`} />
            ) : null}
            <img className={`mb-1`} alt={item.name} src={item.image} />
            <div className={`${sty.wrap} mb-1`}>
              <p className={`${sty.itle} text text_type_digits-default mr-1`}>
                {item.price}
              </p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${sty.name} text text_type_main-default`}>
              {item.name}
            </p>
          </li>
        </Link>
      ) : null}
    </>
  );
};

export default MenuItem;
