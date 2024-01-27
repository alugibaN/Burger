import sty from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAN, postRegistration } from "../services/API/action";

function Register() {
  const { success } = useSelector((state) => state.registration);
  const [form, setValue] = useState({ email: "", password: "", name: "" });
  const {} = useSelector((store) => store.registration);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = useRef(null);

  function goToNewPage() {
    navigate("/login", { replace: true });
  }

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const yy = useEffect(() => {
    console.log(form);
    if (success) {
      setValue("");
      dispatch({
        type: CLEAN,
      });
    }
  });

  return (
    <div>
      <AppHeader />
      <div className={`${sty.popup}`}>
        <div className={`${sty.wrap}`}>
          <form className={`${sty.form}`}>
            <h2 className={`${sty.title} mt-5 mb-5 text text_type_main-medium`}>
              Вход
            </h2>
            <fieldset
              className={`${sty.fieldset} mt-5 mb-5 text text_type_main-large`}
            >
              <Input
                type={"text"}
                placeholder={"Имя"}
                name={"name"}
                error={false}
                // ref={inputRef}
                // onIconClick={onIconClick}
                errorText={"Ошибка"}
                size={"default"}
                onChange={onChange}
                // extraClass="pt-6"
                value={success ? "" : form.name}
                // value=''
              />
              <EmailInput
                isIcon={false}
                placeholder={"E-mail"}
                name={"email"}
                extraClass={"mt-6"}
                onChange={onChange}
                // value={success ? '' : form.email}
                // value=''
              />
              <PasswordInput
                placeholder={"Пароль"}
                icon={"ShowIcon"}
                // value={success ? null : form.password}
                // value={''}
                name={"password"}
                onChange={onChange}
                extraClass="pt-6"
              />
              <Button
                htmlType="button"
                type="primary"
                onClick={() => {
                  dispatch(postRegistration(form));

                  // onIconClick()
                  if (success) {
                    setValue("");
                    goToNewPage();
                  }
                }}
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
    </div>
  );
}

export default Register;

// const onIconClick = () => {
//   // setTimeout(() => inputRef.current.focus(), 0)
//   // alert('Icon Click Callback')
// }

// const inputRef = useRef(null)
// const onIconClick = () => {
//   setTimeout(() => inputRef.current.focus(), 0)
//   alert('Icon Click Callback')
// }
