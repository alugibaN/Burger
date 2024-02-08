import React, { useMemo } from 'react'
import sty from "./profile.module.css";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import AppHeader from "../../components/AppHeader/AppHeader";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie, getCookie } from "../../utils/cookie";
import {
  patchProfile,
  getProfile,
} from "../../services/API/action";
import { authHead } from '../../utils/utils';


function ProfileForm ()  {
  
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
    dispatch(patchProfile(form));
    setIsInputActive(false);
  });

  useMemo(() => {
    dispatch(getProfile({token:refreshToken}));
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
      <EmailInput
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
          >
            Сохранить
          </Button>
        </div>
      ) : null}
    </fieldset>
  </form>
  )
}

export default ProfileForm
