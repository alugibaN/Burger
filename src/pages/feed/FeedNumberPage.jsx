import React, { useCallback, useEffect } from 'react'
// import sty from './feedNumber.module.css'
import Modal from '../../components/modal/ModalOverlay/Modal'
import FeedNumberModal from '../../components/modal/feedNumberModal/feedNumberModal'
import HomePages from '../home/home'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../services/API/action'
import { WS_CONNECTION_START } from '../../services/webSocket/action'

const FeedNumberPage = () => {
  const { number } = useParams();
  const {messages} = useSelector(state => state.ws)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
  }, []);


  return (
    <>
      <FeedNumberModal/>
    </>
  )
}

export default FeedNumberPage







































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