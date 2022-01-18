import BecomeSeller from "../Views/BecomeSeller";
import Compte from "../Views/Compte";
import HomePage from "../Views/HomePage";
import ItemPreview from "../Views/ItemPreview";
import Panier from "../Views/Panier";
import SearchItem from "../Views/SearchItem";
import SignIn from "../Views/SignIn";
import SignUp from "../Views/SignUp";
import StoreHomePageCreate from "../Views/store/StoreHomePageCreate";
import StoreHomePagePreview from "../Views/store/StoreHomePagePreview";

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