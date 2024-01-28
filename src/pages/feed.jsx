import AppHeader from "../components/AppHeader/AppHeader"
import sty from './feed.module.css'
import FeedOrder from "../components/feedOrders/feedOrder"



function FeedPage (){
  
 return(
  <>     
    <main className={`${sty.main}`}>
    <h1 className={sty.title}>
        Лента заказов 
      </h1>
    <FeedOrder/>
      <section className={`${sty.container} ml-15`}>
        <ul className={`${sty.feed}`}>
          <li className={`${sty.feed__orders} mb-15`}>
            <div className={`${sty.feed__container}`}>
              <h3 className={`${sty.feed__redy}  text text_type_digits-default pb-4`}>Готовы:</h3>
              <div className={`${sty.feed__container_orders}`}>
                <span className={`${sty.feed__number} text text_type_digits-small`}>034544</span>
                <span className={`${sty.feed__number} text text_type_digits-small`}>034544</span>
                <span className={`${sty.feed__number} text text_type_digits-small`}>034544</span>
                <span className={`${sty.feed__number} text text_type_digits-small`}>034544</span>
              </div>
            </div>
            <div className={`${sty.feed__container}`}>
              <h3 className={`${sty.feed__preparing}  text text_type_digits-default pb-4`}>В работе:</h3>
              <div className={`${sty.feed__container_orders}`}>
                <span className={`${sty.feed__preparing_number} text text_type_digits-small`}>444444</span>
                <span className={`${sty.feed__preparing_number} text text_type_digits-small`}>444444</span>
                <span className={`${sty.feed__preparing_number} text text_type_digits-small`}>444444</span>
                <span className={`${sty.feed__preparing_number} text text_type_digits-small`}>444444</span>
              </div >
            </div>
          </li>
          <li className={`${sty.feed__done}`}>
            <h3 className={`${sty.feed__title} text text_type_digits-default`}>Выполнено за все время:</h3>
              <span className={`${sty.feed__done_number} text text_type_digits-large`}>28 752</span>
          </li >
          <li className={`${sty.feed__done} mt-15`}>
            <h3 className={`${sty.feed__title} text text_type_digits-default`}>Выполнено за сегодня:</h3>
           <span className={`${sty.feed__done_number} text text_type_digits-large`}>138</span>
          </li>
        </ul>
      </section>
    </main>
  </>
 )
}
export default FeedPage