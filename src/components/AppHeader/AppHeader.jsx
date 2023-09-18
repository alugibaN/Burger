import sty from './appHeader.module.css'
import {Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'



function AppHeader (){
return(
    <header  className={ `${sty.header} mb-5`}>
      <div className={sty.wr}>
        <a href='/' className={sty.link}>
          < Logo/>
       </a>
      </div>
      <nav className={sty.nav}>
        <ul className={sty.spisok}>
          <div className={sty.wrap}>
            <li className={sty.li}>
              <a href="/" className={sty.link}>
                <BurgerIcon type="primary" />
              <h3 className={ `${sty.subtitle} ml-2 mr-5 text text_type_main-default`}>Конструктор</h3>
              </a>
            </li>
            <li className={sty.li}>
              <a href="/" className={sty.link}>
                <ListIcon type="secondary" />
              <h3 className='ml-2 mr-5 text text_type_main-default text_color_inactive'>Лента заказов</h3>
             </a>
            </li> 
          </div>
          <li className={sty.li}>
            <a href="/" className={sty.link}>
              <ProfileIcon type="secondary" />
            <h3 className='ml-2 mr-5 text text_type_main-default text_color_inactive'>Личный кабинет</h3>
            </a>
          </li>
      </ul>
    </nav> 
    </header>
)
}

export default AppHeader;
