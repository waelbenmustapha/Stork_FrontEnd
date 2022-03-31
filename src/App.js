import "./App.css";

import jwt_decode from "jwt-decode";

import {
  Routes,
  useLocation,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { routes, privateRoutes } from "./utils/Routes";
import NavBar from "./components/home/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Compte from "./views/account/Compte";
import Settings from "./views/account/Settings";
import Orders from "./views/account/Orders";
import ShippingAdress from "./views/account/ShippingAdress";
import Overview from "./views/account/Overview";
function App() {
  const location = useLocation();
  const token = localStorage.getItem("jwt");
  let navigate = useNavigate();
  function checkexpiration() {
    if (token !== null) {
      if (jwt_decode(token).exp < Date.now() / 1000) {
        navigate("/logout");
      } else {
        console.log(jwt_decode(token).exp - Date.now() / 1000);
      }
    }
  }

  useEffect(() => {
    checkexpiration();
  }, [location]);

  function getRoutes() {
    return routes.map((route) => {
      return <Route path={route.path} element={<route.component />} />;
    });
  }

  function getPrivateRoutes() {
    return privateRoutes.map((route) => {
      return (
        <Route
          path={route.path}
          element={
            localStorage.getItem("jwt") ? (
              <route.component />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      );
    });
  }

  return (
    <div>
      <NavBar />

      {
        <Routes>
          {getRoutes()}
         
          <Route
            path="account"
            element={
              localStorage.getItem("jwt") ? (
                <Compte />
              ) : (
                <Navigate to="/signin" />
              )
            }
          >
            <Route path="settings" element={<Settings/>} />
            <Route path="" element={<Overview/>} />
            <Route path="orders" element={<Orders/>} />
            <Route path="shippingaddress" element={<ShippingAdress/>} />
          </Route>

          {getPrivateRoutes()}
        </Routes>
      }
      <Footer />
    </div>
  );
}

export default App;
