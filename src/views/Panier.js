import React, { useState } from 'react'
import PannierCard from '../components/pannier/PannierCard'
const carts = [{id:"1", name:"name1", desc:"La description est la présentation de lieux, de personnages ou d'événements dans un récit.", prix:"10", solde:"0", img:"https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",color:'noir', livraison:'7 jours'},
{id:"2", name:"name2", desc:"La description est la présentation de lieux, de personnages ou d'événements dans un récit.", prix:"14", solde:"3", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",color:'blue', livraison:'8jours'},
{id:"3", name:"name3", desc:"La description est la présentation de lieux, de personnages ou d'événements dans un récit.", prix:"15", solde:"5", img:"https://static.remove.bg/remove-bg-web/a6eefcd21dff1bbc2448264c32f7b48d7380cb17/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",color:'yellow', livraison:'8jours'},
{id:"4", name:"name4", desc:"La description est la présentation de lieux, de personnages ou d'événements dans un récit.", prix:"20", solde:"0", img:"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",color:'red', livraison:'8jours'},
{id:"5", name:"name5", desc:"La description est la présentation de lieux, de personnages ou d'événements dans un récit.", prix:"22", solde:"1", img:"https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg",color:'green', livraison:'8jours'}]

function Panier() {
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <div style={{display:'flex'}}>
            <div style={{display:'flex', flexDirection:'column', padding:'20px 30px'}}>
                <h3>Panier ({carts.length||0}) </h3>
            {carts?carts.map(el=> <PannierCard el={el} key={el.id} setTotalPrice={setTotalPrice} totalPrice={totalPrice} />):null}
            </div>
            <h1>Cart {totalPrice.toFixed(2)} </h1>
        </div>
    )
}

export default Panier
