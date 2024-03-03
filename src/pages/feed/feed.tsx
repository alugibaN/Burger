import sty from "./feed.module.css";
import FeedOrder from "../../components/feedOrders/feedOrder";
import React from "react";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "../../utils/hooks";
import { useEffect, useMemo } from "react";
import { WS_CONNECTION_START } from "../../services/webSocket/action";

const FeedPage: React.FC = () => {
  const { messages } = useSelector((state) => state.ws);

  type TItem = {
    ingredients: string;
    _id: string;
    number: number;
    createdAt: number;
    name: string;
  };
  type TOrder = {
    status?: string;
    number?: number;
  };

  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch({
      type: WS_CONNECTION_START,
    });
  }, [dispatch]);

  const lastReadyOrders = useMemo(() => {
    if (messages.success && messages.orders) {
      return messages.orders
        .filter((order: TOrder) => order.status === "done")
        .map((order: TOrder) => order.number)
        .slice(-10);
    }
  }, [messages]);

  const lastProgressOrders = useMemo(() => {
    if (messages.success && messages.orders) {
      return messages.orders
        .filter((order: TOrder) => order.status === "pending")
        .map((order: TOrder) => order.number)
        .slice(-10);
    }
  }, [messages]);

  return (
    <>
      <main className={`${sty.main}`}>
        <h1 className={sty.title}>Лента заказов</h1>
        <section className={sty.orders}>
          <ul className={`${sty.menu} custom-scroll`}>
            {messages.success && messages.orders !== undefined
              ? messages.orders.map((item) => (
                  <FeedOrder key={item._id} url={"/feed"} item={item} />
                ))
              : null}
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
                  {messages.success && lastReadyOrders !== undefined
                    ? lastReadyOrders.map((order) => (
                        <span
                          key={order}
                          className={`${sty.feed__number} text text_type_digits-small`}
                        >
                          {order}
                        </span>
                      ))
                    : null}
                </div>
              </div>
              <div className={`${sty.feed__container}`}>
                <h3
                  className={`${sty.feed__preparing}  text text_type_digits-default pb-4`}
                >
                  В работе:
                </h3>
                <div className={`${sty.feed__container_orders}`}>
                  {messages.success && lastProgressOrders !== undefined
                    ? lastProgressOrders.map((order) => (
                        <span
                          key={order}
                          className={`${sty.feed__preparing_number} text text_type_digits-small`}
                        >
                          {order}
                        </span>
                      ))
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
};
export default FeedPage;
