import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import sty from "./appHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  WS_CONNECTION_CLOSED,
} from "../../services/webSocket/action";
import { useDispatch } from "../../utils/hooks";

const AppHeader: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${sty.activ} text text_type_main-default pl-2 ${sty.link}`
      : `text text_type_main-default text_color_inactive pl-2 ${sty.link}`;

  const clouseWs = (): void => {
    dispatch({
      type: WS_CONNECTION_CLOSED,
    });
  };

  return (
    <>
      <header className={`${sty.header} mb-5`}>
        <div className={sty.wr}>
          <a href="/" className={sty.link}>
            <Logo />
          </a>
        </div>
        <nav className={sty.nav}>
          <ul className={sty.spisok}>
            <div className={`${sty.wrap} ml-4`}>
              <li className={sty.li} onClick={clouseWs}>
                <NavLink end to="/" className={setActive}>
                  <BurgerIcon
                    type={location.pathname === "/" ? "primary" : "secondary"}
                  />
                  <p className={`${sty.subtitle} ml-2`}>Конструктор</p>
                </NavLink>
              </li>
              <li className={sty.li}>
                <NavLink to="/feed" className={setActive}>
                  <ListIcon
                    type={
                      location.pathname === "/feed" ? "primary" : "secondary"
                    }
                  />
                  <p className={`${sty.subtitle} ml-2`}>Лента заказов</p>
                </NavLink>
              </li>
            </div>
            <li className={sty.li} onClick={clouseWs}>
              <NavLink to="/login" className={setActive}>
                <ProfileIcon
                  type={
                    location.pathname === "/login" ? "primary" : "secondary"
                  }
                />
                <p className={`${sty.subtitle} ml-2`}>Личный кабинет</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default AppHeader;
