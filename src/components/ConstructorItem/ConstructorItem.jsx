import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import sty from "./ConstructorItems.module.css";
import { useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { REMOVE_INGREDIENT } from "../../services/AddIngredient/action";

export function ConstructorItem({ item, index, moveCard }) {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [{ handlerId }, drop] = useDrop({
    accept: "drag",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
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
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
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
(ingr) => {
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
    <li style={{ opacity }} ref={ref} data-handler-id={handlerId}>
      <button type="button" className={sty.ingredients__info}>
        <DragIcon type="primary" />
      </button>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_large}
        moveCard={moveCard}
        handleClose={() => {
        removeIngredientFromCart(item);
        }}
      />
    </li>
  );
}

ConstructorItem.propTypes = {
  item: PropTypes.object.isRequired,
  moveCard: PropTypes.func.isRequired,
  index: PropTypes.number,
};
