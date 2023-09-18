import React from "react";
import { data } from '../../utils/data'
import sty from '../BurgerConstructor/curgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


function BurgerConstructor() {
  return (
    <section className={`${sty.burgerConstructor} mt-15 ml-5 `}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-large.png"
      />
      <div className={`${sty.wrap} custom-scroll`}>
        {data.map((item) => {
          if(item.type !== 'bun')
          return <ConstructorElement
            key={item._id}
            text={item.name}
            price={item.price}
            thumbnail={item.image_large}
          />
        })}
      </div>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-large.png"
      />
      <div className={`${sty.footer} pt-5`} >
        <div className={`${sty.price} mr-10`}>
          <p className={`${sty.counter} text text_type_main-large mr-2`}>0</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Нажми на меня
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor