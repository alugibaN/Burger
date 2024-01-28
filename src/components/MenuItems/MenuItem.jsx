import React, { useCallback, useEffect } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import sty from "./MenuItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import {
  BURGER_ID,
  SUM_PRICES,
} from "../../services/AddIngredient/action";
import { OPEN_MODAL_INGREDIENT } from "../../services/modal/action";
import { Link, useLocation, useNavigate } from "react-router-dom";

function MenuItem({ type, item }) {
  const { burgerIngredients, bun, ingredients } = useSelector(
    (state) => state.ingr
  );
  const { data } = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: type,
    item: item,
  });
  const navigate = useNavigate()
  const location = useLocation()


  const openModal = useCallback(()=>{
    navigate(`/ingredient/${item._id}`, {state:{modal:true}})
  })

  const addPrice = () => {
    return {
      type: SUM_PRICES,
      arr: [...bun, ...burgerIngredients],
    };
  };

  const addIdIngredients = () => {
    return {
      type: BURGER_ID,
      idIngr: [...bun, ...burgerIngredients],
    };
  };

  const count = ingredients.filter((el) => el === item._id);

  useEffect(() => {
    dispatch(addPrice());
    dispatch(addIdIngredients());
  }, [bun, burgerIngredients]);

  return (
    <>
      {item.type === type ? (
        <Link to={`/ingredient/${item._id}`} state={{background: location}} className={`${sty.link} text text_type_digits-default`}>
        <li
          className={`${sty.card} pl-4 pr-4`}
          ref={dragRef}
          >
          {count.length > 0 ? (
            <Counter
              count={`${count.length}`}
              size="default"
              extraClass={`m-1`}
            />
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
}

export default MenuItem;

MenuItem.propTypes = {
  type: PropTypes.string,
  
};




///state={{from:'/'}} 



































// {types.map(type => {
// 	const itemsOfType = data.filter(item => item.type === type);
// 	if (itemsOfType.length > 0) {
// 		 return (
// 				<>
// 					 <h3 className={` text text_type_main-medium mb-3`}>
// 							{type === 'bun' ? 'Булки' : type === 'sauce' ? 'Соусы' : 'Начинка'}
// 					 </h3>
// 					 {itemsOfType.map(item => (
// 			 <ul className={`${sty.menu} pl-4 pr-4`}>

// 						 <MenuItem item={item}/>
// 						</ul>
// 					 ))}
// 				</>
// 		 );
// 	}
// })}
