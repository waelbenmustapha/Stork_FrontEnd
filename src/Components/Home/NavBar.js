import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faShoppingCart,

  faUserAlt,
  faUserAltSlash,
} from "@fortawesome/free-solid-svg-icons";
import "../../css/home.css";
import { faUserCircle, faUser } from "@fortawesome/free-regular-svg-icons";
function NavBar() {
  return (
    <div
      style={{
        position: "sticky",
        alignItems: "center",
        top: 0,
        zIndex: 10,
        backgroundColor: "white",
        height: "100%",
        height: "72px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <img style={{ margin: '0 auto' }} src={logo} height={60} width={90} />
      </div>
      <div style={{ flex: 2, display: "flex", flexDirection: "row" }}>
        <input
          className="input"
          placeholder="Cherchez un produit, une marque ou une catégorie "
        />
        <button className="recherchebtn">RECHERCHER</button>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifySelf: 'center', justifyContent: 'center' }}>
        <div className="iconhover" > <FontAwesomeIcon icon={faUser} size="lg" style={{ marginRight: 5 }} />
          <a style={{ marginRight: 15 }}>Compte</a></div>
        <div className="iconhover" >
          <FontAwesomeIcon size="lg" icon={faShoppingCart} style={{ marginRight: 5 }} />
          <a>Panier</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
