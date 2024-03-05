import React, { useEffect } from "react";
import FeedOrder from "../../components/feedOrders/feedOrder";
import sty from "./profilrOrder.module.css";
import { useDispatch, useSelector } from "../../utils/hooks/useDispatch";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../services/webSocket/action";
import { getCookie } from "../../utils/cookie";
import { useLocation } from "react-router-dom";

const ProfileOrders: React.FC = () => {
  const { messages } = useSelector((state) => state.ws);
  const dispatch = useDispatch();
  const authToken = getCookie("token");
  const location = useLocation()

  return (
    <>
      <section className={`${sty.section}`}>
        <menu className={`${sty.menu} custom-scroll`}>
          {messages.success && messages.orders
            ? messages.orders.map((item) => (
                <FeedOrder
                  key={item._id}
                  item={item}
                  url={"/profile/orders"}
                  params={"orders"}
                />
              ))
            : null}
        </menu>
      </section>
    </>
  );
};

export default ProfileOrders;
