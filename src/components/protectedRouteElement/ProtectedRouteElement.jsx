// import { useAuth } from '../services/auth';
import { Navigate, Route } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

export function ProtectedRouteElement({ element }) {

const token = getCookie('token')

    if (!token) {
    return (
      <Navigate to={'/login'} replace></Navigate>
    );
  }

    return token ? element : <Navigate to="/profile" replace/>;
}

