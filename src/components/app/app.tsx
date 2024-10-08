// import { Route, Routes, Switch } from "react-router-dom";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import HomePages from "../../pages/home/home";
import Login from "../../pages/login/login";
import Register from "../../pages/login/register";
import ForgotPassword from "../../pages/login/forgot-password";
import ResetPassword from "../../pages/login/reset-password";
import Profile from "../../pages/profile/profile";
import { OnlyAuth } from "../protectedRoute/protectedRoute";
import ModalIngredient from "../../pages/home/ingredient";
import FeedPage from "../../pages/feed/feed";
import AppHeader from "../appHeader/appHeader";
import IngredientPage from "../../pages/home/ingredientPage";
import ProfileForm from "../../pages/profile/profileForm";
import ProfileOrders from "../../pages/profile/profileOrders";
import ProfileOrdersModal from "../../pages/profile/profileOrdersModal";
import FeedModal from "../../pages/feed/feedModal";
import FeedNumberPage from "../../pages/feed/feedNumberPage";
import ProfileOrdersPage from "../../pages/profile/profileOrdersPage";
import { useEffect } from "react";
import { getData } from "../../services/API/action";
import { useDispatch } from "../../utils/hooks/useDispatch";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/webSocket/action";
import { getCookie } from "../../utils/cookie";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const dispatch = useDispatch();
  const authToken = getCookie("token");
  const splitURL = location.pathname.split("/")[1]
// console.log(`${location.pathname}/orders`)

  useEffect((): void => {
  if(splitURL ==='feed' ){
    dispatch({
      type: WS_CONNECTION_START,
      payload:'/all'
    }); 
  } 
  else if (`${splitURL}/orders` ==='profile/orders' ){
    dispatch({
      type: WS_CONNECTION_START,
      payload:`?token=${authToken}`
    });
  }
 else {
    dispatch({
      type: WS_CONNECTION_CLOSED,
    })
  }

  }, [location]);


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
