import React, { ReactElement } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { getCookie } from '../../utils/cookie.jsx';

interface ProtectedRouteProps {
  component: ReactElement;
  anonymous?: boolean;
  onlyAuth?: boolean; 

}

  export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component, anonymous = false }) => {

  // const {succes} = useSelector((store) => store.registration);
const token = getCookie('token')

  const location = useLocation();
  const from = location.state?.from || '/';
  // Если разрешен неавторизованный доступ, а пользователь авторизован...
  if (anonymous && token) {
    // ...то отправляем его на предыдущую страницу
    return <Navigate to={ from } />;
  }

  // Если требуется авторизация, а пользователь не авторизован...
  if (!anonymous && !token) {
    // ...то отправляем его на страницу логин
    return <Navigate to="/login" state={{ from: location}}/>;
  }

  // Если все ок, то рендерим внутреннее содержимое
  return component;
}

export const OnlyAuth = ({ component }:{ component: ReactElement }) => ( <ProtectedRoute component={component} onlyAuth={true} />)
















// export function ProtectedRouteElement({ element }) {

// const token = getCookie('token')

//     if (!token) {
//     return (
//       <Navigate to={'/login'} replace></Navigate>
//     );
//   }

//     return token ? element : <Navigate to="/profile" replace/>;
// }