import sty from "./reset-password.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect, useRef, useState } from "react";
import { CLEAN, postResetPassword } from "../services/API/action";
import { useDispatch, useSelector } from "react-redux";

function ResetPassword() {
  const [form, setValue] = useState({ password: "", token: "" });
  const {user} = useSelector((store) => store.registration)
  const {} = useSelector((store)=>store.registration)

  const dispatch =useDispatch()
  const navigate = useNavigate()

  const onChange = (e) => {
    setValue({...form, [e.target.name]: e.target.value });
  };

  if(user.success){
    return(
      <Navigate to={'/login'} replace />
    )
  }

  return (
    <div>
      <AppHeader />
      <div className={`${sty.popup}`}>
        <div className={`${sty.wrap}`}>
          <form className={`${sty.form}`}>
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
                error={false}
                errorText={"Ошибка"}
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
                htmlType="button"
                type="primary"
                size="medium"
                extraClass={`mt-20 ${sty.submit}`}
                onClick={()=>{
                 dispatch( postResetPassword(form))
                }}
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
    </div>
  );
}

export default ResetPassword;



