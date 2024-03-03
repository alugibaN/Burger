import React, { useMemo } from 'react'
import sty from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "../../utils/hooks";
import { getCookie } from "../../utils/cookie";
import { getProfi, patchProf } from '../../services/API/action';
// import { getProfile, patchProfile } from '../../services/API/action';
// import {
//   patchProfile,
//   getProfile,
// } from "../../services/API/action";
// import { authHead, request } from '../../utils/utils';


const ProfileForm:React.FC = () =>  {
  
  const { email, name, user } = useSelector(
    (state) => state.registration
  );
  const [form, setValue] = useState({ email: "", password: "", name: "" });
  const [isInputActive, setIsInputActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = getCookie("token");
  const refreshToken = getCookie("refreshToken");


  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onIconClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setIsInputActive(!isInputActive);
    setValue({ ...form, email: email, name: name });
}, [isInputActive]);
console.log(form)

  const patchSubmit = useCallback((e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(patchProf(form, 'PATCH')); 
    setIsInputActive(false);
  },[]);

  useMemo(() => {
    dispatch(getProfi());
  }, [token] );

  useEffect(() => {
    if (user) {
      setValue({ ...form, email: email, name: name });
    }
  }, [email, name]);
  
  return (
    <form onSubmit={patchSubmit}>
    <fieldset className={`${sty.fieldset}`}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        icon={isInputActive ? "CloseIcon" : "EditIcon"}
        name={"name"}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-4 mb-4"
        value={isInputActive ? form.name : name}
        onChange={onChange}
        disabled={!isInputActive}
        onIconClick={onIconClick}
      />
      <Input
        name={"email"}
        placeholder={'E-mail'}
        extraClass="mt-4 mb-4"
        icon={isInputActive ? "CloseIcon" : "EditIcon"}
        onChange={onChange}
        value={isInputActive ? form.email : email}
        onIconClick={onIconClick}
        disabled={!isInputActive}
      />
      <PasswordInput
        icon={isInputActive ? undefined : "EditIcon"}
        value={form.password}
        name={"password"}
        onChange={onChange}
        extraClass="mt-4 mb-4"
        disabled={!isInputActive}
      />
      {/* {isInputActive ? ( */}
        <div>
          <Button
            htmlType="button"
            type="secondary"
            size="small"
          >
            Отменить
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            size="small"
          >
            Сохранить
          </Button>
        </div>
      {/* ) : null} */}
    </fieldset>
  </form>
  )
}

export default ProfileForm
