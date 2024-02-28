import React, { useEffect } from "react";
import FeedOrder from "../../components/feedOrders/feedOrder";
import sty from "./profilrOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START_AUTH,
} from "../../services/webSocket/action";
import { useLocation } from "react-router-dom";

function ProfileOrders() {
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
          {messages.success
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
