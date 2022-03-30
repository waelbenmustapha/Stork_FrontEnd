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
import { useEffect  } from "react";
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

  useEffect(() => {checkexpiration()}, [location]);

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
          element={localStorage.getItem("jwt") ? <route.component /> : <Navigate to="/signin" />}
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
          {getPrivateRoutes()}
        </Routes>
      }
      <Footer />
    </div>
  );
}

export default App;
