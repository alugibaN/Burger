import React, { useCallback } from "react";
import sty from './burgerConstructor.module.css';
// import sty from './'
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from '../../utils/hooks/useDispatch';
import { useDrop } from "react-dnd";
import { ConstructorItem } from "../constructorItem/constructorItem";
import { addIngredient } from "../../services/addIngredient/action";
import {
  ADD_BUN,
  MOVE_INGREDIENT,
} from "../../services/addIngredient/action";
import { getCookie } from "../../utils/cookie.jsx";
import { useNavigate } from "react-router-dom";
import { IItem } from "../../utils/utils";
import { postOrder } from "../../services/API/action";
import { OPEN_MODAL_ORDER } from "../../services/modal/action";

const BurgerConstructor: React.FC = () => {
  type exponentCallback = (dragIndex:number, hoverIndex:number) => void;
  const { burgerIngredients, ingredients, bun, totalSum, flag } =
    useSelector((state) => state.ingr); 
  const token = getCookie('token')
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onOpen = ():void => { 
    dispatch({
      type: OPEN_MODAL_ORDER,
    });
  };



  const [, drop] = useDrop({
    accept: ["bun", "main", "sauce"],
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop: (item:IItem) => {
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

  const moveIngredient = useCallback<exponentCallback>((dragIndex, hoverIndex):void => {
    dispatch({
      type: MOVE_INGREDIENT,
      fromIndex: dragIndex,
      toIndex: hoverIndex,
    });
  }, []);

  const submitOrder =((e: React.FormEvent):void=>{
    e.preventDefault();
    if((bun && burgerIngredients.length !== 0 && token)){
    onOpen();
    dispatch(postOrder({ingredients:ingredients}));
    } else{
      navigate('/login')
    }
  })

  return (
    <section className={`${sty.burgerConstructor} mt-15 ml-5 `}>
      <div className={`${sty.constructor}`} ref={drop}>
      <div className={sty.topBulka}>
    {flag ? (
      bun.map((item) => {
        return item.price?(
          <ConstructorElement
            key={item._id}
            type="top"
            isLocked={true}
            text={`${item.name}(верх)`}
            price={item.price}
            thumbnail={`${item.image_large}`}
          />
        )
        : null;
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
            key={item.uniqueId}
            item={item as IItem}
            index={index}
            moveCard={moveIngredient}
          />
        );
      })
    )}
  </ul>
  <div className={sty.bottomBulka}>
    {!flag ? (
      <div className={`${sty.bottomBulka__wrap} ${sty.bottomBulka}`}>
        Булка
      </div>
    ) : (
      bun.map((item) => {
        return item.price?(
          <ConstructorElement
            key={item._id}
            type="bottom"
            isLocked={true}
            text={`${item.name}(низ)`}
            price={item.price}
            thumbnail={`${item.image_large}`}
          />
        )
        :null
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
    disabled={!bun || burgerIngredients.length < 1}
    onClick={submitOrder}
  >
    Оформить заказ
  </Button>
      </div>
    </section>
  );
}
export default BurgerConstructor;

