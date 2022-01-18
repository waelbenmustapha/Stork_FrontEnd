import './App.css';
import Sidebar from './Components/Store/Sidebar';

import StoreHomePageCreate from './Views/Store/StoreHomePageCreate'
import {
  BrowserRouter,
  Routes,
  Route,Link
} from "react-router-dom";
import StoreHomePageShow from './Views/Store/StoreHomePageShow';
import StoreHomePagePreview from './Views/Store/StoreHomePagePreview';
function App() {
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
    
  }

  function Home() {
    return (
      <div>
        
        <h2>home</h2>
        <nav>
        <Link to="/storecreate">Store Home Page Create</Link> |{" "}
          <Link
        to={"storepreview"}
        state={{ from: "the-page-id",date:"someting too" }}
    >Store Home Page idk</Link>
      </nav>
      </div>
    );
    
  }

  function Help() {
    return (
      <div>
        <h2>help</h2>
      </div>
    );
    
  }

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/storecreate" element={<StoreHomePageCreate />}/>
      <Route path="/storepreview" element={<StoreHomePagePreview />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
