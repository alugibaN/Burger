import React from "react";
import sty from '../BurgerConstructor/curgerConstructor.module.css'
import {ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


function BurgerConstructor(){
    return(
        <section className={`${sty.burgerConstructor} mt-15 ml-5 `}>
        <div className={`${sty.wrap} custom-scroll mb-5`} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
       <ConstructorElement
         type="top"
         isLocked={true}
         text="Краторная булка N-200i (верх)"
         price={200}
         thumbnail={'https://code.s3.yandex.net/react/code/bun-02-large.png'}
       />
       <ConstructorElement
         text="Краторная булка N-200i (верх)"
         price={50}
         thumbnail={'https://code.s3.yandex.net/react/code/bun-02-large.png'}
       />
       <ConstructorElement
         text="Краторная булка N-200i (верх)"
         price={50}
         thumbnail={'https://code.s3.yandex.net/react/code/bun-02-large.png'}
       />
       <ConstructorElement
         text="Краторная булка N-200i (верх)"
         price={50}
         thumbnail={'https://code.s3.yandex.net/react/code/bun-02-large.png'}
       />
       <ConstructorElement
         text="Краторная булка N-200i (верх)"
         price={50}
         thumbnail={'https://code.s3.yandex.net/react/code/bun-02-large.png'}
       /><ConstructorElement
       text="Краторная булка N-200i (верх)"
       price={50}
       thumbnail={'https://code.s3.yandex.net/react/code/bun-02-large.png'}
     />
     <ConstructorElement
     text="Краторная булка N-200i (верх)"
     price={50}
     thumbnail={'https://code.s3.yandex.net/react/code/bun-02-large.png'}
   />
       <ConstructorElement
         type="bottom"
         isLocked={true}
         text="Краторная булка N-200i (низ)"
         price={200}
         thumbnail={'https://code.s3.yandex.net/react/code/bun-02-large.png'}
       />       
     </div>
 <div className={`${sty.footer} pt-5`} >
   <div className={`${sty.price} mr-10`}>
   <p className={`${sty.counter} text text_type_main-large mr-2`}>0</p>
   <CurrencyIcon type="primary"/>
   </div>
   <Button htmlType="button" type="primary" size="large">
   Нажми на меня
 </Button>
 </div>
        </section>
    )
}

export default BurgerConstructor