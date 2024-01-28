// import { Route, Routes, Switch } from "react-router-dom";
import { Route, Switch, Routes, Outlet, useLocation } from 'react-router-dom';
import HomePages from "../../pages/home";
import Login from "../../pages/login";
import Register from "../../pages/register";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import Profile from "../../pages/profile";
import { ProtectedRouteElement } from "../protectedRouteElement/ProtectedRouteElement";
import ModalIngredient from "../../pages/ingredient";
import FeedPage from '../../pages/feed';
import AppHeader from '../AppHeader/AppHeader';
import IngredientPage from '../../pages/ingredientPage';

function App() {

  const location = useLocation();
    const background = location.state && location.state.background;
  return(
    <>
    <Routes location={background || location}>
      <Route path='' element={<AppHeader/>}>
        <Route path="/" element={<HomePages />} />
        <Route path="ingredient/:id" element={<IngredientPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/profile" element={<ProtectedRouteElement element={<Profile />}/>} />
      </Route>
    </Routes>
    {background && (
      <Routes>
      <Route
      path='/ingredient/:id'
      element={<ModalIngredient/>}/>
      </Routes>
    )}
    </>
  )
}

export default App;
