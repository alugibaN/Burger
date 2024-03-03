import { store } from "..";
import { TApiActions, TIngrActions } from "../services/API/action";
import { TInitialActivMenu } from "../services/ActivMenu/reducer";
import { TAddIngrActions } from "../services/AddIngredient/action";
import { TModalActions } from "../services/Modal/action";
import { TWSActions } from "../services/webSocket/action";
import { getCookie } from "./cookie";


const BASE_URL = 'https://norma.nomoreparties.space/api/'

interface ApiResponse {
  ok: boolean;
  json: () => Promise<object>;
}

export function checkResponse(res:ApiResponse):Promise<unknown> {
  if (res.ok) {
    return res.json();
}
console.log(res)
return res.json().then(error => {
  throw error;
  // throw new Error(error.message);
});}

export const request = (url:string, options?:object):Promise<unknown> =>{
  
  return fetch(`${BASE_URL}${url}`, options).then(checkResponse)
}
type TFun = ReturnType<typeof request>


export const postHead = (form:object) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: form }),
  };
};

export const postHeadLogin = (form:object) =>{
  return {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(form)
  }
}

export const  authHead = (form?:object, metod:string ='GET') =>{
  return { 
    method: metod,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
                // Отправляем токен и схему авторизации в заголовке при запросе данных
          Authorization: 'Bearer ' + getCookie('token')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(form)
        }
  
}

export const  authHeadToken = (form:object, token:string, metod:string='GET') =>{
  return { 
    method: metod,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
                // Отправляем токен и схему авторизации в заголовке при запросе данных
          Authorization: 'Bearer ' + `${token}`
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(form)
        }
  
}

export interface IItem {
 readonly _id?: string;
 readonly name?: string;
 readonly type?: string;
 readonly proteins?: number;
 readonly fat?: number;
 readonly carbohydrates?: number;
 readonly calories?: number;
 readonly  price?: number;
 readonly  image?: string;
 readonly  image_mobile?: string;
 readonly  image_large?: string;
 readonly __v?: number;
 readonly uniqueId?:string;


}