import React from "react";
import sty from "./login.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { postLogin } from "../../services/API/action";
import { getCookie } from "../../utils/cookie.jsx";
import { useDispatch } from "../../utils/hooks/useDispatch";

const Login:React.FC = () => {
  const [form, setValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const token = getCookie("token");
const dispatch = useDispatch()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postLogin(form));
    navigate("/", { replace: true });
  };  

  if (token) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <>
      <div className={`${sty.popup}`}>
        <div className={`${sty.wrap}`}>
          <form className={`${sty.form}`} onSubmit={handleSubmit}>
            <h2 className={`${sty.title} mt-5 mb-5 text text_type_main-medium`}>
              Вход
            </h2>
            <fieldset
              className={`${sty.fieldset} mt-5 mb-5 text text_type_main-large`}
            >
              <EmailInput
                isIcon={false}
                name={"email"}
                extraClass={"mt-6"}
                onChange={onChange}
                value={form.email}
              />
              <PasswordInput
                icon={"ShowIcon"}
                name={"password"}
                onChange={onChange}
                value={form.password}
                extraClass="pt-6"
              />
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                extraClass={`mt-20 ${sty.submit}`}
              >
                Войти
              </Button>
            </fieldset>
          </form>
          <h3
            className={`${sty.subtitli}text text_type_main-default text_color_inactive mt-10`}
          >
            Вы - новый пользователь?{" "}
            <Link className={`${sty.link}`} to="/register">
              Зарегестрироваться
            </Link>
          </h3>
          <h3 className="text text_type_main-default text_color_inactive">
            Забыли пароль?{" "}
            <Link to="/forgot-password" className={`${sty.link}`}>
              Восстановить пароль
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Login;
