import React from "react";
import logo from "../../assets/logo.png";
import shopping from "../../assets/shopping-cart.png";
import wish from "../../assets/heart.png";
import usr from "../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  fas,
  faShoppingCart,
  faUserAlt,
  faUserAltSlash,
} from "@fortawesome/free-solid-svg-icons";
import "../../css/home.css";
import { faUserCircle, faUser } from "@fortawesome/free-regular-svg-icons";
function NavBar() {
  let navigate = useNavigate();

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        display:'flex',
        borderTop:'1px solid #ddd',
        borderBottom:'1px solid #ddd',
        backgroundColor: "white",
        height: "100%",
        height: "72px",
      }}
    >
      <div
        style={{
          width: "1200px",
          display: "flex",
          justifyContent: "space-around",
          margin: "0px auto",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "left" }}>
          <img className="hovercursor" onClick={()=>{navigate("/")}} style={{}} src={logo} height={60} width={90} />
        </div>
        <div style={{ flex: 2, display: "flex", flexDirection: "row" }}>
          <input
            className="input"
            placeholder="Cherchez un produit, une marque ou une catégorie "
          />
          <button
            onClick={() => {
              navigate("/search");
            }}
            className="recherchebtn"
          >
            RECHERCHER
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            gap:'10px',
                       justifySelf: "center",
            justifyContent: "left",
          }}
        >
          <div
            onClick={() => {
              navigate("/panier");
            }}
            className="hovercolor"
          >
<div style={{display:'inline-block',position:'relative'}}>
            <img  src={shopping} height={30} width={30} />
            <span className="cart-number nav-cart-num">4</span>
</div>
            <a style={{padding:'5px'}}>Panier</a>
          </div>
          <div className="hovercolor">
            
            <img src={wish} height={27} width={27} />
            <a style={{padding:'5px'}}
              onClick={() => {
                navigate("/compte");
              }}
             
            >
              WishList
            </a>
          </div>
          <div className="hovercolor">
          <img src={usr} height={27} width={27} />

            <a style={{padding:'5px'}}
              onClick={() => {
                navigate("/panier");
              }}
            >
              Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
