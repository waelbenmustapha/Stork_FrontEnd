import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {routes} from './utils/Routes';
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
