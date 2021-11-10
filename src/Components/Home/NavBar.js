import React from 'react'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
        <div style={{position:'sticky',alignItems:'center',top:0,backgroundColor:'#eeeeee',height:'100%',height:'72px',display:'flex',justifyContent:'space-around'}}>
<img src={logo} height={60} width={90}/>

<input />
<input style={{padding:'7px',width:'30%',borderRadius:15,borderColor:'#f68b1e'}} placeholder="Cherchez un produit, une marque ou une catégorie "/>
<FontAwesomeIcon
size="lg"
icon={faShoppingCart}
/>        </div>
    )
}

export default NavBar
