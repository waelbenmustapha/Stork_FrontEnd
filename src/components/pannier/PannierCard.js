import React, {useState } from "react";
import "./PannierCard.css"
import favorit from "../../assets/favoris.png"
import delet from "../../assets/delete.png"

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
<div className="PannierCardImg"><img src={el.img} alt="cart" style={{width:'100%', height:'100%', borderRadius:'8px'}} /></div>
<div className="PannierCardText">
  {el.desc}<br/>
  {el.name}<br/>
  <b>€{el.prix}</b>
  <a style={{backgroundColor:"red"}}>%{el.solde}<br/></a>
  <b>Color</b> {el.color}<br/>
  <b>Livraison</b> {el.livraison}<br/>
</div>
<div className="PannierCardEmoji">
<div style={{display:'flex', justifyContent:'end', paddingRight:'5%'}}>
<img src={favorit} width={25} height={25} className="iconn" style={{marginRight:'4px', marginTop:'auto'}} onClick={()=>console.log("favorit")}/>
<img src={delet} width={30} height={30} className="iconn" onClick={()=>console.log("delete")}/>
</div>
<div className="buttons">
<button onClick={incress} className="buttonsIncressDecress" >+</button>
<p>{total}</p>
<button onClick={decress} className="buttonsIncressDecress">-</button>
</div>
</div>



  </div>;
};

export default PannierCard;
