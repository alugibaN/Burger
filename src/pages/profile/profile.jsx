import sty from "./profile.module.css";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie, getCookie } from "../../utils/cookie";
import { postLogOut, postToken } from "../../services/API/action";
import {
  WS_CONNECTION_START_AUTH,
} from "../../services/webSocket/action";

function Profile() {
  const dispatch = useDispatch();

  const token = getCookie("token");
  const refreshToken = getCookie("refreshToken");

  const out = useCallback(() => {
    dispatch(postLogOut({ token: refreshToken }));
    deleteCookie("token");
    deleteCookie("refreshToken");
  });
  const setActive = ({ isActive }) =>
    isActive
      ? `text text_type_main-medium ${sty.li__activ}`
      : `text text_type_main-medium text_color_inactive `;

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START_AUTH,
    });
  }, []);

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <section className={sty.section}>
      <div className={sty.wrap}>
        <menu className={`${sty.menu} mr-8`}>
          <li className={sty.li}>
            <NavLink end to="/profile" className={setActive}>
              Профиль
            </NavLink>
          </li>
          <li className={sty.li}>
            <NavLink to="/profile/orders" className={setActive}>

              История заказов
            </NavLink>
          </li>
          <li className={sty.li}>
            <button
              type="submit"
              className={`${sty.link} text text_type_main-medium text_color_inactive`}
              onClick={out}
            >
              Выход
            </button>
          </li>
          <h3
            className={`${sty.subtitli} text text_type_main-small text_color_inactive mt-20`}
          >
            В этом разделе вы можете изменить свои персональные данные
          </h3>
        </menu>
        <Outlet />
      </div>
    </section>
  );
}

export default Profile;

