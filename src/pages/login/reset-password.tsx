import React from "react";
import sty from "./reset-password.module.css";
import { Link, Navigate } from "react-router-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import { postResetPassword } from "../../services/API/action";
import { useSelector, useDispatch } from "../../utils/hooks/useDispatch";

const ResetPassword:React.FC = () => {
  const [form, setValue] = useState({ password: "", token: "" });
  const { user, success } = useSelector((store) => store.registration);
  const {} = useSelector((store) => store.registration);

  const dispatch = useDispatch();

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback((e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postResetPassword(form));
  },[]);

  if (success) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <>
      <div className={`${sty.popup}`}>
        <div className={`${sty.wrap}`}>
          <form className={`${sty.form}`} onSubmit={handleSubmit}>
            <h2 className={`${sty.title} mt-5 mb-5 text text_type_main-medium`}>
              Восстановление пароля
            </h2>
            <fieldset
              className={`${sty.fieldset} mt-5 mb-5 text text_type_main-large`}
            >
              <PasswordInput
                placeholder={"Введите новый пароль"}
                icon={"ShowIcon"}
                value={form.password}
                name={"password"}
                size={"default"}
                extraClass="pt-6"
                onChange={onChange}
              />
              <Input
                type={"text"}
                placeholder={"Введите код из письма"}
                value={form.token}
                name={"token"}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
                extraClass="pt-6"
                onChange={onChange}
              />
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                extraClass={`mt-20 ${sty.submit}`}
              >
                Сохранить
              </Button>
            </fieldset>
          </form>
          <h3
            className={`${sty.subtitli}text text_type_main-default text_color_inactive mt-10`}
          >
            Вспомнили пароль?{" "}
            <Link className={`${sty.link}`} to="/login">
              Войти
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
