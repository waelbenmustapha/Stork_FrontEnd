import './App.css';
import HomePage from './Views/HomePage';

import StoreHomePageCreate from './Views/store/StoreHomePageCreate'
import {
  BrowserRouter,
  Routes,
  Route,Link
} from "react-router-dom";
import {routes} from './utils/Routes';
import StoreHomePagePreview from './Views/store/StoreHomePagePreview';
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
