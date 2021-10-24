import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HProducts from "./Components/Store/Store";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="Components">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Header />
            </Route>
            <Route exact path="/Store">
              <HProducts />
            </Route>
            <Route exact path="/Footer">
              <Footer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
