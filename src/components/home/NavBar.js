import React, { useEffect, useState } from "react";
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
  useEffect(() => {console.log("navbar rendering")}, [localStorage.getItem("user")]);
  const [showaccountsettings, setshowaccountsettings] = useState(false);
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        display: "flex",
        borderTop: "1px solid #ddd",
        borderBottom: "1px solid #ddd",
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
        <div style={{ display: "flex", justifyContent: "right", flex: 1 }}>
          <img
            className="hover"
            onClick={() => {
              navigate("/");
            }}
            style={{}}
            src={logo}
            height={60}
            width={90}
          />
        </div>
        <div style={{ flex: 8, display: "flex", flexDirection: "row" }}>
          <input
            className="input"
            placeholder="Cherchez un produit, une marque ou une catégorie "
          />
          <button
          style={{fontSize:'14px',fontWeight:'400'}}
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
            gap: "10px",
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
            <div style={{ display: "block", position: "relative" }}>
              <img
                className="centerimg"
                src={shopping}
                height={30}
                width={33}
              />
              <span className="cart-number nav-cart-num">4</span>
            </div>
            <a style={{ padding: "5px" }}>Panier</a>
          </div>
          <div   onClick={() => {
                navigate("/wishlist");
              }} className="hovercolor">
            <img className="centerimg" src={wish} height={30} width={30} />
            <a
              style={{ padding: "5px" }}
            
            >
              WishList
            </a>
          </div>
          {localStorage.getItem("jwt") ? (
            <div
              style={{ position: "relative" }}
             className="showonhover hovercolor"
            
            >
              <img  onClick={() => {
                navigate("/account");
              }} className="centerimg" src={usr} height={30} width={30} />

              <a
               onClick={() => {
                navigate("/account");
              }}
                style={{ padding: "5px" }}
               
              >
                Account
              </a>
             
                <div
                  className="toshow"
                  style={{
                    height: "250px",
                    color: "black",
                    width: "200px",
                    position: "absolute",
                    right: "0px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      padding: "15px",
                      fontWeight: "500",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      src={JSON.parse(localStorage.getItem("user")).image==null?'https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png':JSON.parse(localStorage.getItem("user")).image}
                      height={50}
                      width={50}
                      style={{ borderRadius: "50%" }}
                    />
                    <a style={{ fontWeight: "500", fontSize: "14px",marginLeft:'10px',opacity:'0.8' }}>
                     
                      {JSON.parse(localStorage.getItem("user")).name}{" "}
                      {JSON.parse(localStorage.getItem("user")).lastname}
                    </a>
                  </div>
                  <div className="listacc">
    <a onClick={()=>navigate("/account")}>Account</a>
    <a onClick={()=>navigate("/panier")}>My Orders</a>
    <a onClick={()=>navigate("/panier")}>My Wish List</a>
    <a onClick={()=>navigate("/logout")}>Sign Out</a>
    </div>
                </div>
              
            </div>
          ) : (
            <div    onClick={() => {
              navigate("/account");
            }} className="hovercolor">
              <img className="centerimg" src={usr} height={30} width={30} />

              <a
                style={{ padding: "5px" }}
             
              >
                SignIn
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
