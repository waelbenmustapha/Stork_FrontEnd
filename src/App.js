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
import NavBar from './components/home/NavBar';
import Footer from './components/Footer';
function App() {

  function getRoutes () {
    return routes.map((route) => {
      return <Route path={route.path} element={<route.component />}/>;

    });
  };
  return (
    <div>
    <BrowserRouter>
    <NavBar/>

  {
    <Routes>
      {getRoutes()}
    </Routes>
}
<Footer/>
  </BrowserRouter>
</div>
  );
}

export default App;
