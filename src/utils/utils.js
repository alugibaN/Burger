import { getCookie } from "./cookie";

const BASE_URL = 'https://norma.nomoreparties.space/api/'

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
}
return Promise.reject(`Ошибка ${res.status}`);
}

export function request(url, options) {
  
  return fetch(`${BASE_URL}${url}`, options).then(checkResponse)
}


export const postHead = (el) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: el }),
  };
};

export const postHeadLogin = (form) =>{
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

export const  authHead = (form, metod) =>{
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
