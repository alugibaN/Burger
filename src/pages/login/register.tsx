import React from "react";
import sty from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "../../utils/hooks";
import { CLEAN, postRegistration } from "../../services/API/action";

const Register:React.FC = () => {
  const { success } = useSelector((state) => state.registration);
  const [form, setValue] = useState({ email: "", password: "", name: "" });
  const {} = useSelector((store) => store.registration);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (success) {
      navigate("/login", { replace: true });
      setValue({ email: "", password: "", name: "" });
      dispatch({
        type: CLEAN,
      });
    }
  }, [success]);

  const handleSubmit = useCallback((e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postRegistration(form));
  },[]);

  return (
    <>
      <div className={`${sty.popup}`}>
        <div className={`${sty.wrap}`}>
          <form className={`${sty.form}`} onSubmit={handleSubmit}>
            <h2 className={`${sty.title} mt-5 mb-5 text text_type_main-medium`}>
              Зарегестрироваться
            </h2>
            <fieldset
              className={`${sty.fieldset} mt-5 mb-5 text text_type_main-large`}
            >
              <Input
                type={"text"}
                placeholder={"Имя"}
                name={"name"}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
                onChange={onChange}
                value={form.name}
              />
              <EmailInput
                isIcon={false}
                placeholder={"E-mail"}
                name={"email"}
                extraClass={"mt-6"}
                onChange={onChange}
                value={form.email}
              />
              <PasswordInput
                placeholder={"Пароль"}
                icon={"ShowIcon"}
                value={form.password}
                name={"password"}
                onChange={onChange}
                extraClass="pt-6"
              />
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                extraClass={`mt-20 ${sty.submit}`}
              >
                Зарегистрироваться
              </Button>
            </fieldset>
          </form>
          <h3
            className={`${sty.subtitli}text text_type_main-default text_color_inactive mt-10`}
          >
            Уже зарегистрированы?
            <Link className={`${sty.link}`} to="/login">
              Войти
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Register;
