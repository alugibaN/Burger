import React from 'react'
import sty from "./feedOrder.module.css";
import { useSelector } from 'react-redux';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';






function FeedOrder () {
  // const {data} = useSelector((state) => state.card)
  const { data } = useSelector((state) => state.card);

  
  
  
  
  
  return (
    <section className={sty.orders}>
      <ul className={sty.menu}>
        <li className={`${sty.order} pr-6 pb-6 pt-6 pl-6`}>
          <div className={`${sty.order__info} mb-6`}>
            <p className={`${sty.order__number} text text_type_digits-default`}>#034535</p>
          <div className={sty.order_time}>
              <span className={`${sty.order__span} text text_type_main-small text_color_inactive`}>сегодня, </span>
              <span className={`${sty.order__span} text text_type_main-small text_color_inactive`}>16:20 </span>
              <span className={`${sty.order__span} text text_type_main-small text_color_inactive`}>i-GMT+3</span>
            </div>
          </div>
          <p className={`${sty.order__title} text text_type_main-medium mb-6`}>death star starship main бургер</p>
          <div className={sty.order__container}>
            <div className={sty.order__container_img}>
              <img className={sty.order__imgi} src={'https://code.s3.yandex.net/react/code/meat-02-mobile.png'} ></img>
              <img  className={`${sty.order__img}`} src ='https://code.s3.yandex.net/react/code/meat-02-mobile.png'></img>
              <img  className={sty.order__img} src='https://code.s3.yandex.net/react/code/meat-02-mobile.png' />
            </div>
            <p className={`${sty.order__price} text text_type_digits-default`}>480 <CurrencyIcon type="primary" /></p>
          </div>
          </li>
          </ul>
    </section>      
  )
}

export default FeedOrder



//rafce