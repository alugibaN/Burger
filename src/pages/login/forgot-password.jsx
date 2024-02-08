import sty from "./login.module.css";
import { Link, Navigate } from "react-router-dom";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postForgotPassword } from "../../services/API/action";

function ForgotPassword() {
  const { successEmail } = useSelector((state) => state.registration);
  const [form, setValue] = useState({ email: "" });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue({ [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(postForgotPassword(form));
  });

  if (successEmail) {
    return <Navigate to={"/reset-password"} />;
  }
  return (
    <div>
      <div className={`${sty.popup}`}>
        <div className={`${sty.wrap}`}>
          <form className={`${sty.form}`} onSubmit={handleSubmit}>
            <h2 className={`${sty.title} mt-5 mb-5 text text_type_main-medium`}>
              Восстановление пароля
            </h2>
            <fieldset
              className={`${sty.fieldset} mt-5 mb-5 text text_type_main-large`}
            >
              <EmailInput
                isIcon={false}
                placeholder={"Укажите e-mail"}
                onChange={onChange}
                name={"email"}
                value={form.email}
              />
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                extraClass={`mt-20 ${sty.submit}`}
              >
                Восстановить
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
    </div>
  );
}

export default ForgotPassword;
