import React from "react";
import sty from "./profile.module.css";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "../../utils/hooks/useDispatch";
import { deleteCookie, getCookie } from "../../utils/cookie.jsx";
import { postLogOut } from "../../services/API/action";

const Profile:React.FC = () => {
  
  const dispatch = useDispatch();

  const token = getCookie("token");
  const refreshToken = getCookie("refreshToken");

  const out = () => {
    dispatch(postLogOut({ token: refreshToken }));
    deleteCookie("token");
    deleteCookie("refreshToken");
  };

  const setActive = ({ isActive }:{isActive:boolean}) =>
    isActive
      ? `text text_type_main-medium ${sty.li__activ}`
      : `text text_type_main-medium text_color_inactive `;

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <section className={sty.section}>
      <div className={sty.wrap}>
        <menu className={`${sty.menu} mr-8`}>
          <li className={sty.li}>
            <NavLink end to="/profile" className={setActive} >
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
