import React, { useEffect } from "react";
import FeedOrder from "../../components/feedOrders/feedOrder";
import sty from "./profilrOrder.module.css";
import { useSelector, useDispatch } from "../../utils/hooks";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START_AUTH,
} from "../../services/webSocket/action";

const ProfileOrders:React.FC = () => {

  const { messages } = useSelector((state) => state.ws);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START_AUTH,
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSED,
      });
    };
  }, [dispatch]);

  return (
    <>
      <section className={`${sty.section}`}>
        <menu className={`${sty.menu} custom-scroll`}>
          {messages.success && messages.orders
            ? messages.orders.map((item) => (
                <FeedOrder key={item._id} item={item} url={"/profile/orders"} />
              ))
            : null}
        </menu>
      </section>
    </>
  );
}

export default ProfileOrders;
