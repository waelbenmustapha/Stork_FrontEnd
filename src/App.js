import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HProducts from "./Components/Home/Home";
import ProdByCat from "./Components/Home/ProdByCat";

function App() {
  return (
    <Router>
      <div className="Components">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HProducts />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/catpage">
              <ProdByCat />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
