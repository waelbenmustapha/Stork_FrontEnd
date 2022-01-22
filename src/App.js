import './App.css';
import { Product } from './components/Product'
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
import { ProductDetails } from './components/ProductDetails'
import HomePage from './views/HomePage';

import StoreHomePageCreate from './views/store/StoreHomePageCreate'
import {
  BrowserRouter,
  Routes,
  Route,Link
} from "react-router-dom";
import {routes} from './utils/Routes';
import StoreHomePagePreview from './views/store/StoreHomePagePreview';
function App() {

  function getRoutes () {
    return routes.map((route) => {
      return <Route path={route.path} element={<route.component />}/>;

    });
  };
  return (
   
    <BrowserRouter>
  {
    <Routes>
      {getRoutes()}
    </Routes>
}
  </BrowserRouter>

  );
}

export default App;
