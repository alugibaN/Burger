// import { Route, Routes, Switch } from "react-router-dom";
import { Route, Switch, Routes, Outlet } from 'react-router-dom';
import HomePages from "../../pages/home";
import Login from "../../pages/login";
import Register from "../../pages/register";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import Profile from "../../pages/profile";
import { ProtectedRouteElement } from "../protectedRouteElement/ProtectedRouteElement";
import IngredientPages from "../../pages/ingredient";
import ModalIngredient from "../../pages/ingredient";
import IngredientPage from '../../pages/ingredientPage';

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="ingredient/:id" element={<ModalIngredient />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="/reset-password" element={<ResetPassword />}/>
      <Route path="/profile" element={<ProtectedRouteElement element={<Profile />}/>} />
      {/* <Route path="/profile" element={<Profile />}/> */}
    </Routes>
  )
}

export default App;
