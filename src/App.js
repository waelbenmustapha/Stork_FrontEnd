import "./App.css";
import { Product } from "./components/Product";
import { AddProduct } from "./components/AddProduct";
import { EditProduct } from "./components/EditProduct";
import { ProductDetails } from "./components/ProductDetails";
import HomePage from "./views/HomePage";
import jwt_decode from "jwt-decode";

import StoreHomePageCreate from "./views/store/StoreHomePageCreate";
import {
  BrowserRouter,
  Routes,
  useLocation,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { routes, privateRoutes } from "./utils/Routes";
import StoreHomePagePreview from "./views/store/StoreHomePagePreview";
import NavBar from "./components/home/NavBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
function App() {
  const location = useLocation();
  const token = localStorage.getItem("jwt");
  
  function checkexpiration() {
    if (token !== null) {
      if (jwt_decode(token).exp < Date.now() / 1000) {
        console.log("expired");
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
          element={false ? <route.component /> : <Navigate to="/signin" />}
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
