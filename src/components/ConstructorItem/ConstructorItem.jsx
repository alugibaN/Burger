import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import sty from './ConstructorItems.module.css'
import { useCallback, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import PropTypes from "prop-types";

export function ConstructorItem({item, index, moveCard}) {
  const ref = useRef(null)
  const dispatch = useDispatch()


  const [{ handlerId }, drop] = useDrop({
        accept: ['bun', 'sauce', 'main'],
        collect(monitor) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },
        hover(item, monitor) {
                if (!ref.current) {
                  return
                }
                const dragIndex = item.index
                const hoverIndex = index
                // Don't replace items with themselves
                if (dragIndex === hoverIndex) {
                  return
                }
                // Determine rectangle on screen
                const hoverBoundingRect = ref.current?.getBoundingClientRect()
                // Get vertical middle
                const hoverMiddleY =
                  (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
                // Determine mouse position
                const clientOffset = monitor.getClientOffset()
                // Get pixels to the top
                const hoverClientY = clientOffset.y - hoverBoundingRect.top
                // Only perform the move when the mouse has crossed half of the items height
                // When dragging downwards, only move when the cursor is below 50%
                // When dragging upwards, only move when the cursor is above 50%
                // Dragging downwards
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                  return
                }
                // Dragging upwards
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                  return
                }
                // Time to actually perform the action
                moveCard(dragIndex, hoverIndex)
                // Note: we're mutating the monitor item here!
                // Generally it's better to avoid mutations,
                // but it's good here for the sake of performance
                // to avoid expensive index searches.
                item.index = hoverIndex
              },
      })

      const removeIngredientFromCart = useCallback((ingr) => {
        dispatch({
          type:'REMOVE_INGREDIENT',
          ingr
        });
    }, [dispatch]);

      const [{ isDragging }, drag] = useDrag({
            type:'drag',
            item: () => {
              return { item, index }
            },
            collect: (monitor) => ({
              isDragging: monitor.isDragging(),
            }),
          })
          const opacity = isDragging ? 0 : 1
          drag(drop(ref))

  return (
    <li style={{ opacity }} key={item._id} ref={ref}>
      <button type="button" className={sty.ingredients__info}>
        <DragIcon type="primary" />
      </button>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_large}
        moveCard={moveCard}
        handleClose={()=>{
          removeIngredientFromCart(item)
        }}
         />
        
    </li>
  )
}

ConstructorItem.propTypes = {
  item: PropTypes.object.isRequired,
	moveCard: PropTypes.func.isRequired,
  index:PropTypes.number
}
