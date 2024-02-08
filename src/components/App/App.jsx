// import { Route, Routes, Switch } from "react-router-dom";
import { Route, Switch, Routes, Outlet, useLocation } from "react-router-dom";
import HomePages from "../../pages/home/home";
import Login from "../../pages/login/login";
import Register from "../../pages/login/register";
import ForgotPassword from "../../pages/login/forgot-password";
import ResetPassword from "../../pages/login/reset-password";
import Profile from "../../pages/profile/profile";
import { OnlyAuth } from "../protectedRoute/ProtectedRoute";
import ModalIngredient from "../../pages/home/ingredient";
import FeedPage from "../../pages/feed/feed";
import AppHeader from "../AppHeader/AppHeader";
import IngredientPage from "../../pages/home/ingredientPage";
import ProfileForm from "../../pages/profile/profileForm";
import ProfileOrders from "../../pages/profile/profileOrders";
import ProfileOrdersModal from "../../pages/profile/ProfileOrdersModal";
import FeedModal from "../../pages/feed/FeedModal";
import FeedNumberPage from "../../pages/feed/FeedNumberPage";
import ProfileOrdersPage from "../../pages/profile/ProfileOrdersPage";
import { useEffect } from "react";
import { getData } from "../../services/API/action";
import { useDispatch } from "react-redux";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  
  return (
    <>
      <Routes location={background || location}>
        <Route path="" element={<AppHeader />}>
          <Route path="/" element={<HomePages />} />
          <Route path="ingredient/:id" element={<IngredientPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/feed/:number" element={<FeedNumberPage />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="" element={<OnlyAuth component={<ProfileForm />} />} />
            <Route
              path="/profile/orders"
              element={<OnlyAuth component={<ProfileOrders />} />}
            />
          </Route>
          <Route
            path="profile/orders/:number"
            element={<OnlyAuth component={<ProfileOrdersPage />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/ingredient/:id" element={<ModalIngredient />} />
          <Route path="/feed/:number" element={<FeedModal />} />
          <Route
            path="profile/orders/:number"
            element={<OnlyAuth component={<ProfileOrdersModal />} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
