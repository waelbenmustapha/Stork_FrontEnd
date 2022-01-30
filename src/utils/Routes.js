import { AddProduct } from "../components/AddProduct";
import { EditProduct } from "../components/EditProduct";
import { Product } from "../components/Product";
import { ProductDetails } from "../components/ProductDetails";
import BecomeSeller from "../views/BecomeSeller";
import Compte from "../views/Compte";
import HomePage from "../views/HomePage";
import ItemPreview from "../views/ItemPreview";
import Logout from "../views/Logout";
import Panier from "../views/Panier";
import SearchItem from "../views/SearchItem";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import StoreHomePageCreate from "../views/store/StoreHomePageCreate";
import StoreHomePagePreview from "../views/store/StoreHomePagePreview";

export const privateRoutes=[
  {
    path: "/compte",
    name: "Signin",
    component: Compte,
  },
]

export const routes = [
    // {
    //   path: "/:page",
    //   name: "Main",
    //   component: <Main />,
    // },
    {
      path: "/signup",
      name: "Signup",
      component: SignUp,
    },
    {
        path: "/signin",
        name: "Signin",
        component: SignIn,
      },
      {
        path: "/",
        name: "Signin",
        component: HomePage,
      },
      {
        path: "/panier",
        name: "Signin",
        component: Panier,
      },
      {
        path: "/createStore",
        name: "Signin",
        component: StoreHomePageCreate,
      },
      {
        path: "/storePreview",
        name: "Signin",
        component: StoreHomePagePreview,
      },
    
      {
        path: "/search",
        name: "Signin",
        component: SearchItem,
      },
      {
        path: "/becomeSeller",
        name: "Signin",
        component: BecomeSeller,
      },
   
      {
        path: "/addproduct",
        name: "addproduct",
        component: AddProduct,
      },
      {
        path: "/editproduct/:id",
        name: "editproduct",
        component: EditProduct,
      },
      {
        path: "/productdetails/:id",
        name: "productdetails",
        component: ProductDetails,
      },
      {
        path: "/products",
        name: "products",
        component: Product,
      },
      {
        path: "/logout",
        name: "logout",
        component: Logout,
      },
    

  ];