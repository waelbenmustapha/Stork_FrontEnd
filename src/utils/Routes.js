import BecomeSeller from "../viewss/BecomeSeller";
import Compte from "../viewss/Compte";
import HomePage from "../viewss/HomePage";
import ItemPreview from "../viewss/ItemPreview";
import Panier from "../viewss/Panier";
import SearchItem from "../viewss/SearchItem";
import SignIn from "../viewss/SignIn";
import SignUp from "../viewss/SignUp";
import StoreHomePageCreate from "../viewss/storee/StoreHomePageCreate";
import StoreHomePagePreview from "../viewss/storee/StoreHomePagePreview";

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
        path: "/compte",
        name: "Signin",
        component: Compte,
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
        path: "/itemPreview",
        name: "Signin",
        component: ItemPreview,
      },
    

  ];