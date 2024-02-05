import React, { useCallback } from 'react'
// import sty from './feedNumber.module.css'
import Modal from '../../components/modal/ModalOverlay/Modal'
import FeedNumberModal from '../../components/modal/feedNumberModal/feedNumberModal'
import HomePages from '../home/home'
import FeedPage from './feed'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const FeedModal = () => {
  // const {data} = useSelector(store => store.card)
  const navigate = useNavigate()
  const location = useLocation()
  const {number} = useParams()

  const closeModal = useCallback(() => {
    navigate("/feed");
  });

  return (
    <>
    <FeedPage/>
    <Modal closeModal={closeModal}>
      <FeedNumberModal/>
    </Modal>
    </>
  )
}

export default FeedModal







































  {/* <section className={`${sty.section}`}>
       <h1 className={`${sty.title} text text_type_digits-default mb-5`}>#00223</h1>
       <h2 className={`${sty.subtitle} text text_type_main-medium mb-3`}>Black Hole Singular бургер</h2>
       <span className={`${sty.span} text text_type_main-small`}>Выполнен</span>
       <h3 className={`${sty.comprosition} text text_type_main-medium mt-10`}>Состав:</h3>
       <ul  className={`${sty.feel}`}>
         <li className={`${sty.feel__item} mb-4`}>
          <div className={`${sty.feel__wrapp}`}>
           <img className={`${sty.feel__img}`} src="https://code.s3.yandex.net/react/code/meat-02-mobile.png" alt="" />
           <div className={sty.feel__circle}></div>
           </div>
           <h3 className={`${sty.feel__subtitle} text text_type_main-default mr-4`}> Булка</h3>
           <p className={`${sty.feel__price}text text_type_digits-default`}>2 x 20 <CurrencyIcon type="primary" /></p>
         </li>         
       </ul>
       <div className={`${sty.container } text text_type_main-default text_color_inactive mt-10`}>
         <span className={`${sty.span__data}`}>Вчера, </span> 
         <span className={`${sty.span__data}`}>13:50</span>
         <span className={`${sty.span__data}`}> i-GMT+3</span>
      </div>
       </section> */}