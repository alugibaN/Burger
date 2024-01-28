import sty from "./profile.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie, getCookie } from "../utils/cookie";
import {
  getProfile,
  postLogOut,
  patchProfile,
  postToken,
} from "../services/API/action";
import { useCookies } from "react-cookie";

function Profile() {
  const { email, name, user, success } = useSelector(
    (state) => state.registration
  );
  const [form, setValue] = useState({ email: "", password: "", name: "" });
  const [isInputActive, setIsInputActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = getCookie("token");
  const refreshToken = getCookie("refreshToken");

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onIconClick = useCallback((e) => {
    setIsInputActive(!isInputActive);
    setValue({ ...form, email: email, name: name });
  });

  const patchSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(patchProfile(form, "PATCH"));
    setIsInputActive(false);
  });

  useEffect(() => {
    dispatch(postToken({ token: refreshToken }, "POST"));
  }, []);

  const logout = useCallback(() => {
    dispatch(postLogOut({ token: refreshToken }));
    deleteCookie("token");
    deleteCookie("ref");
  });

  useEffect(() => {
    dispatch(getProfile());
  }, [success]);

  useEffect(() => {
    if (user) {
      setValue({ ...form, email: email, name: name });
    }
  }, [isInputActive]);

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <section className={sty.section}>
      <div className={sty.wrap}>
        <menu className={`mr-15`}>
          <li className={`${sty.li} text text_type_main-medium`}>Профиль</li>
          <li
            className={`${sty.li} text text_type_main-medium text_color_inactive`}
          >
            История заказов
          </li>
          <li className={`${sty.li}`}>
            <button
              type="submit"
              className={`${sty.link} text text_type_main-medium text_color_inactive`}
              onClick={logout}
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
        <form onSubmit={patchSubmit}>
          <fieldset className={`${sty.fieldset}`}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              icon={isInputActive ? "CloseIcon" : "EditIcon"}
              name={"name"}
              // error={false}
              errorText={"Ошибка"}
              size={"default"}
              extraClass="mt-4 mb-4"
              value={isInputActive ? form.name : name}
              // value={form.name}
              onChange={onChange}
              disabled={!isInputActive}
              onIconClick={onIconClick}
            />
            <EmailInput
              // isIcon={false}
              name={"email"}
              extraClass="mt-4 mb-4"
              icon={isInputActive ? "CloseIcon" : "EditIcon"}
              onChange={onChange}
              value={isInputActive ? form.email : email}
              onIconClick={onIconClick}
              disabled={!isInputActive}
            />
            <PasswordInput
              icon={isInputActive ? undefined : "EditIcon"}
              // icon={"" }
              value={form.password}
              name={"password"}
              onChange={onChange}
              extraClass="mt-4 mb-4"
              onIconClick={onIconClick}
              disabled={!isInputActive}
            />
            {isInputActive ? (
              <div>
                <Button
                  htmlType="button"
                  type="secondary"
                  size="small"
                  onClick={onIconClick}
                >
                  Отменить
                </Button>
                <Button
                  htmlType="submit"
                  type="primary"
                  size="small"
                  // onClick={() => {
                  //   patchSubmit()
                  // }}
                >
                  Сохранить
                </Button>
              </div>
            ) : null}
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Profile;

