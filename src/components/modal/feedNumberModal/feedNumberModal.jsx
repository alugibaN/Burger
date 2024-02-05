import React, { useEffect, useState } from 'react'
import sty from './feedNumberModal.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../services/API/action';


function FeedNumberModal () {

  const { data } = useSelector((state) => state.card);
  const {messages} = useSelector(state => state.ws)
  const {order} = useSelector(state => state.registration)
  const {number} = useParams()
  const dispatch = useDispatch()
  
  const [flag, setFlag] = useState(false);
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(1)
  const [ingr, setIngr] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(()=>{
    if(ingr.length <= 0 && item.length <= 0 ){
      dispatch(getOrder(number))
    }
  }, [item, ingr])

  useEffect(() => {
    if(order.orders){
        const idItem = order.orders.find((ingr) => ingr._id === number);
        const matches = data.filter((ingredient) =>
            item.ingredients && item.ingredients.includes(ingredient._id)
        );
        if(idItem){
            setItem(idItem);
            setIngr(matches);
        }

        if(ingr.length > 0 || item.length > 0 || messages ) setFlag(true)
    }
}, [order.orders, ]);

  useEffect(() => {
    if(messages.orders){
        const idItem = messages.orders.find((ingr) => ingr._id === number);
        const matches = data.filter((ingredient) =>
            item.ingredients && item.ingredients.includes(ingredient._id)
        );
        if(idItem){
            setItem(idItem);
            setIngr(matches);
        }

        if(ingr.length > 0 || item.length > 0 || messages ) setFlag(true)
    }
}, [messages, item]);

  useEffect(() => {
    setPrice(ingr.reduce((ac, el) => {
    if(el.type === 'bun' ) {
      return ac + (el.price * 2)
    }
    return ac + el.price
    }, 0));
  }, [ingr]);

  return (
    <>
    {flag 
      ?(
    <section className={`${sty.section}`}>
      
      
    <h1 className={`${sty.title} text text_type_digits-default mb-5`}>{`#${item.number}`}</h1>
    <h2 className={`${sty.subtitle} text text_type_main-medium mb-3`}>{item.name}</h2>
    <span className={`${sty.span} text text_type_main-small`}>{item.status === 'done'?'Выполнен': 'Готовится'}</span>
    <h3 className={`${sty.comprosition} text text_type_main-medium mt-10`}>Состав:</h3>
    <ul  className={`${sty.feel} custom-scroll`}>
      {ingr.map(el =>{
      return <li key={el._id} className={`${sty.feel__item} mb-4`}>
       <div className={`${sty.feel__wrapp}`}>
        <img className={`${sty.feel__img}`} src={el.image_mobile} alt={el.name} />
        <div className={sty.feel__circle}/>
        </div>
        <h3 className={`${sty.feel__subtitle} text text_type_main-default mr-4`}>{el.name}</h3>
        <p className={`${sty.feel__price}text text_type_digits-default`}>{`${count} x ${el.price}`} <CurrencyIcon type="primary" /></p>
      </li> 
       })}         
    </ul>
    <div className={`${sty.container } mt-4`}>
      <span className={`${sty.span__data} text text_type_main-default text_color_inactive`}>{item.status ==='done'?item.updatedAt:item.createdAt} </span> 
      <span className={`${sty.price} text text_type_main-medium`}>{price} <CurrencyIcon type="primary"/></span>
   </div>
    </section>
       )
       :
       null
       }
       </>

  )
}

export default FeedNumberModal

