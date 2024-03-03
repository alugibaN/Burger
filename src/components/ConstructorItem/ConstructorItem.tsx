import React, { LegacyRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import sty from "./ConstructorItems.module.css";
import { useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from '../../utils/hooks';
import { REMOVE_INGREDIENT } from "../../services/AddIngredient/action";

interface IMovieProps {
  item: {
  name?: string;
  price?: number;
  image_large?: string;
  uniqueId?:string
  };
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  }


export const ConstructorItem: React.FC <IMovieProps> = ({ item, index, moveCard }) => {
 
  const ref = useRef<HTMLElement | null>(null); 
  const dispatch = useDispatch();

  const [{ handlerId }, drop] = useDrop({
    accept: "drag",
    collect: (monitor) => {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover: (item: { index: number }, monitor: any) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      console.log(dragIndex);
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect!.bottom - hoverBoundingRect!.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect!.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
  
      item.index = hoverIndex;
    },
  });

  const removeIngredientFromCart = useCallback(
    (ingr:object) => {
      dispatch({
        type: REMOVE_INGREDIENT,
        ingr,
      });
    },
    [dispatch]
  );

  const [{ isDragging }, drag] = useDrag({
    type: "drag",
    item: { item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li style={{ opacity }} ref={ref as LegacyRef<HTMLLIElement>} data-handler-id={handlerId}>
      <button type="button" className={sty.ingredients__info}>
        <DragIcon type="primary" />
      </button>
      {item.name && item.price && item.image_large 
      ?(<ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_large}
        // moveCard={moveCard}
        handleClose={() => {
          removeIngredientFromCart(item);
        }}
      />): null
}
    </li>
  );
}


