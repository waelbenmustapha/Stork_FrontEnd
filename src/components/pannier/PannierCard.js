import React, { useEffect, useState } from "react";
import "./PannierCard.css"
import favorit from "../../assets/favoris.png"
const PannierCard = ({el, setTotalPrice, totalPrice}) => {
  const [total,setTotal]= useState(0)
var prixApresSolde=(el.prix-el.solde/100).toFixed(2)
const incress=()=>{
  setTotal(total+1)
  let TOT1=totalPrice+parseFloat(prixApresSolde)
  console.log("incress" ,TOT1)
  setTotalPrice(TOT1)
}
const decress=()=>{
  if (total>0){
    setTotal(total-1)
    let TOT2=totalPrice-prixApresSolde
    setTotalPrice( TOT2)
    console.log("incress" ,TOT2)
  }
}

  return <div className="PannierCards">
<div className="PannierCardInput"> <input type="checkbox" /> </div>
<div className="PannierCardImg"><img src={el.img} alt="cart" style={{width:'100%', height:'100%'}} /></div>
<div className="PannierCardText">
  text
  {el.id}<br/>
  {el.name}<br/>
  <b>€{el.prix}</b><br/>
  <a style={{backgroundColor:"red"}}>%{el.solde}<br/></a>
  <b>Color</b> {el.color}<br/>
  <b>Livraison</b> {el.livraison}<br/>
</div>
<div className="PannierCardEmoji">
<div>emoji
<img src={favorit} width={30} height={30} className="iconn" onClick={()=>console.log("favorit")}/>
<button>d</button>
</div>
<div>
<button onClick={incress} >+</button>
<p>{total}</p>
<button onClick={decress}>-</button>
</div>
</div>



  </div>;
};

export default PannierCard;
