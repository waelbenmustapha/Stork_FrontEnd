import './App.css';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { Product } from './components/Product'
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
import { ProductDetails } from './components/ProductDetails'

function App() {

  return (
    <div className="App">
      <Router>
        <nav className="navbar bg-light navbar-expand-lg navbar-light">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Product</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Add Product</Link>
            </li>
            <li className="navbar-item">
              <Link to="/product_details" className="nav-link">Product Details</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Product} />
          <Route path="/create" component={AddProduct} />
          <Route path="/edit/:id" component={EditProduct}/>
          <Route path="/product_details" component={ProductDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
