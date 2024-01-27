import sty from "./login.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAN, postForgotPassword } from "../services/API/action";

function ForgotPassword() {
  // const inputRef = useRef(null);
  const {successEmail} = useSelector((state) => state.registration)
  // const {success} = useSelector((state)=> state.registration)
  const [form, setValue] = useState({email: ''})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const goToNewPage = () => {
  // }

const onChange = (e) => {
  setValue({[e.target.name]: e.target.value})
}

  //  useEffect(()=>{
  //   if(successEmail){
  //     navigate('/reset-password', {replace:true})
  //     // dispatch({
  //     //   type:CLEAN
  //     // })
  //     // goToNewPage()
  //   }
  //        }, [successEmail] )
  // const onIconClick = () => {
  //   setTimeout(() => inputRef.current.focus(), 0);
  //   alert("Icon Click Callback");
  // };

  if(successEmail){
    return(
      <Navigate to={'/reset-password'}/>
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
              <EmailInput 
              isIcon={false} 
              placeholder={"Укажите e-mail"} 
              onChange={onChange}
              name={'email'}
              value={form.email}
              />
              
              <Button
                htmlType="button"
                type="primary"
                size="medium"
                extraClass={`mt-20 ${sty.submit}`}
                onClick={()=>{
                  dispatch(postForgotPassword(form))
                }}
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
