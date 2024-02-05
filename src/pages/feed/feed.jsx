import AppHeader from "../../components/AppHeader/AppHeader";
import sty from "./feed.module.css";
import FeedOrder from "../../components/feedOrders/feedOrder";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/API/action";
import { useCallback, useEffect, useMemo, useState } from "react";
import { WS_CONNECTION_START, WS_GET_MESSAGE } from "../../services/webSocket/action";

function FeedPage() {

  const {messages} = useSelector(state => state.ws)
  // const [ready]

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({
      type: WS_CONNECTION_START
    })
    }, [])
    
useEffect(()=>{
  dispatch(getData())
},[])

const lastReadyOrders = useMemo(() => {
  if(messages.success){
  return messages.orders.filter(order => order.status === 'done').map(order => order.number).slice(-10);
  }
}, [messages]);


const lastProgressOrders = useMemo(() => {
  if(messages.success){
  return messages.orders.filter(order => order.status === 'inprogress').map(order => order.number).slice(-10);
  }
}, [messages]);

  return (
    <>
      <main className={`${sty.main}`}>
        <h1 className={sty.title}>Лента заказов</h1>
        <section className={sty.orders}>
        <ul className={`${sty.menu} custom-scroll`}>
  {messages.success
    ? messages.orders.map(item => <FeedOrder key={item._id} url={'/feed'} item={item}/>)
    : null
  }
</ul>

        </section>
        <section className={`${sty.container} ml-15`}>
          <ul className={`${sty.feed}`}>
            <li className={`${sty.feed__orders} mb-8`}>
              <div className={`${sty.feed__container}`}>
                <h3
                  className={`${sty.feed__redy}  text text_type_digits-default pb-4`}
                >
                  Готовы:
                </h3>
                <div className={`${sty.feed__container_orders}`}>
                  {messages.success
                  ? lastReadyOrders.map((order) =><span key={order} className={`${sty.feed__number} text text_type_digits-small`}>{order}</span>)
                  :null     }
                </div>
              </div>
              <div className={`${sty.feed__container}`}>
                <h3
                  className={`${sty.feed__preparing}  text text_type_digits-default pb-4`}
                >
                  В работе:
                </h3>
                <div className={`${sty.feed__container_orders}`}>
                  {messages.success
                  ? lastProgressOrders.map((order) => <span key={order} className={`${sty.feed__preparing_number} text text_type_digits-small`}>{order}</span>)
                  : null}
                </div>
              </div>
            </li>
            <li className={`${sty.feed__done}`}>
              <h3
                className={`${sty.feed__title} text text_type_digits-default`}
              >
                Выполнено за все время:
              </h3>
              <span
                className={`${sty.feed__done_number} text text_type_digits-large`}
              >
                {messages.total}
              </span>
            </li>
            <li className={`${sty.feed__done} mt-10`}>
              <h3
                className={`${sty.feed__title} text text_type_digits-default`}
              >
                Выполнено за сегодня:
              </h3>
              <span
                className={`${sty.feed__done_number} text text_type_digits-large`}
              >
                {messages.totalToday}
              </span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
export default FeedPage;
