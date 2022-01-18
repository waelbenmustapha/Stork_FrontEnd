import './App.css';
import HomePage from './views/HomePage';

import StoreHomePageCreate from './views/storee/StoreHomePageCreate'
import {
  BrowserRouter,
  Routes,
  Route,Link
} from "react-router-dom";
import {routes} from './utils/Routes';
import StoreHomePagePreview from './views/storee/StoreHomePagePreview';
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
