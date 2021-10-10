import React from "react";
import {BrowserRouter as Router,Route,Switch }from 'react-router-dom';

import HProducts from "./Components/Home/Products"

function  App() {
  return (
    <Router>
      <div className="Components">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HProducts />
            </Route>
          </Switch>
        </div>
        </div>
        </Router>
  );
}
      

export default App;