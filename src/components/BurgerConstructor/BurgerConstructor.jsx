import React, { useCallback } from "react";
import sty from "../BurgerConstructor/curgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
// import update from 'immutability-helper'
import { postOrder } from "../../services/API/action";
import { useDrop } from "react-dnd";
import { ConstructorItem } from "../ConstructorItem/ConstructorItem";
import { OPEN_MODAL_ORDER } from "../../services/Modal/action";
import { addIngredient } from "../../services/AddIngredient/action";
import {
  ADD_BUN,
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
} from "../../services/AddIngredient/action";

function BurgerConstructor() {
  const { burgerIngredients, ingredients, bun, totalSum, flag } =
    useSelector((state) => state.ingr);

  const dispatch = useDispatch();

  const onOpen = () => {
    dispatch({
      type: OPEN_MODAL_ORDER,
    });
  };

  const [, drop] = useDrop({
    accept: ["bun", "main", "sauce"],
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop: (item) => {
      if (item.type === "bun") {
        dispatch({
          type: ADD_BUN,
          bun: item,
        });
      } else if (flag) {
        dispatch(addIngredient(item));
      }
    },
  });

  const moveIngredient = useCallback((dragIndex, hoverIndex) => {
    dispatch({
      type: MOVE_INGREDIENT,
      fromIndex: dragIndex,
      toIndex: hoverIndex,
    });
  }, []);

  return (
    <section className={`${sty.burgerConstructor} mt-15 ml-5 `}>
      <div className={`${sty.constructor}`} ref={drop}>
        <div className={sty.topBulka}>
          {flag ? (
            bun.map((item) => {
              return (
                <ConstructorElement
                  key={item._id}
                  type="top"
                  isLocked={true}
                  text={`${item.name}(верх)`}
                  price={`${item.price}`}
                  thumbnail={`${item.image_large}`}
                />
              );
            })
          ) : (
            <div className={`${sty.topBulka__wrap}`}>Булка</div>
          )}
        </div>
        <ul className={`${sty.wrap} custom-scroll`}>
          {!flag ? (
            <li className={sty.filling}>Начинка</li>
          ) : (
            burgerIngredients.map((item, index) => {
              return (
                <ConstructorItem
                  key={item}
                  id={item._id}
                  item={item}
                  index={index}
                  moveCard={moveIngredient}
                />
              );
            })
          )}
        </ul>
        <div className={sty.bottomBulka}>
          {!flag ? (
            <div className={`${sty.bottomBulka__wrap}`}>Булка</div>
          ) : (
            bun.map((item) => {
              return (
                <ConstructorElement
                  key={item._id}
                  type="bottom"
                  isLocked={true}
                  text={`${item.name}(низ)`}
                  price={`${item.price}`}
                  thumbnail={`${item.image_large}`}
                />
              );
            })
          )}
        </div>
      </div>
      <div className={`${sty.footer} pt-5`}>
        <div className={`${sty.price} mr-10`}>
          <p className={`${sty.counter} text text_type_main-large mr-2`}>
            {!flag ? 0 : totalSum}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            onOpen();
            dispatch(postOrder(ingredients));
          }}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
export default BurgerConstructor;
