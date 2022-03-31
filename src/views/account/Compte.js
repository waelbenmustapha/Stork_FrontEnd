import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

function Compte() {
    const location = useLocation();

  const [selected, setSelected] = useState(location.pathname.slice(9));
  const navigate = useNavigate();
useEffect(() => {
}, [])

  return (
    <div
      style={{
        backgroundColor: "rgb(242,242,242)",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          width: "1280px",
          display: "flex",
          flexDirection: "row",
          minHeight: "70vh",
          gap: "20px",
          borderRadius: "8px",
          margin: "0px auto",
        }}
      >
        <div style={{display:'flex',flexDirection:'column',gap:'30px'}}>
          <div
            style={{
              width: "300px",
              backgroundColor: "white",
              display: "flex",
height:'50vh',
              flexDirection: "column",
            }}
          >
            <a style={{ fontWeight: "700", fontSize: "20px", padding: "8px" }}>
              Account
            </a>
            <a
              onClick={() => {setSelected("");navigate('/account')}}
              className={
                selected == "" ? "hovergray selecteddd" : "hovergray"
              }
            >
              Overview
            </a>
            <a
              onClick={() => {setSelected("settings");navigate('/account/settings')}}
              className={
                selected == "settings" ? "hovergray selecteddd" : "hovergray"
              }
            >
              Settings
            </a>
            <a
              onClick={() => {setSelected("orders");navigate('/account/orders')}}
              className={
                selected == "orders" ? "hovergray selecteddd" : "hovergray"
              }
            >
              Orders
            </a>
            <a
              onClick={() => {setSelected("shipping address");navigate('/account/shippingaddress')}}
              className={
                selected == "shipping address" ? "hovergray selecteddd" : "hovergray"
              }
            >
              Shipping address
            </a>
          </div>
          <div
            style={{
              width: "300px",
              height:'260px',
              padding:'10px',
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{textAlign:'center',fontSize:'20px'}}>Stork Mobile App</p>
            <img src="https://ae01.alicdn.com/kf/HTB1phZLKVXXXXX5XFXX760XFXXXC.png" style={{height:'140px',width:'140px',margin:'0px auto'}}/>
            <p style={{fontSize:'14px',textAlign:'center',marginTop:'8px'}}>Scan or click to download</p>
          </div>
        </div>
        <div
          style={{
            width: "960px",
            borderRadius:'12px',
           
          }}
        >
            <p style={{backgroundColor:'white',padding:'10px',fontSize:'25px',fontWeight:'600'}}>{selected}</p>
         <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Compte;
