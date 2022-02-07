import React, { useEffect, useState } from "react";
import magnifier from "../../assets/magnifier.png";
import downarr from "../../assets/downarr.png";
import square from "../../assets/square.png";
import axios from "axios";

function StoreProducts(props) {

const [products,setProducts]=useState([]);

function getprods(){
  if(props.category!==""){
  axios.get("http://localhost:8090/product/findbystorecategory/"+props.category.id).then((res)=>setProducts(res.data))
}
else{
  setProducts(props.store.products)
}
}
  useEffect(() => {
    getprods();
    console.log("reloading")
  }, [props.category]);
  
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "200px",
          minWidth:'180px',
          backgroundColor: "white",
        }}
      >
        <div style={{border:'1px solid #ccc', }}>
          <div style={{padding:'5px',textAlign:'center',backgroundColor:'#f68b1e'}}><a style={{fontSize:'14px',fontWeight:'500',color:'white'}}>Store Categories</a></div>
          <div
            style={{
              display: "flex",
              gap:'5px',
              fontSize:'14px',
              padding:'10px',
              flexDirection: "column",
              marginTop: "15px",
            }}
          >
            {props.store.storeCategories.map((el)=><div style={{display:'flex',alignItems:'center'}}><img src={square} style={{height:'10px',width:'10px'}}/> <a onClick={()=>props.setCategory(el)} className="hoverunderlineorange" style={{marginLeft:'10px'}}>{el.name}</a></div>)}
          
          </div>
        </div>
        <div>
          Filters
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
            rating<a>1 star</a>
            <a>1 star</a>
            <a>1 star</a>
            <a>1 star</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
            rating<a>1 star</a>
            <a>1 star</a>
            <a>1 star</a>
            <a>1 star</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
            rating<a>1 star</a>
            <a>1 star</a>
            <a>1 star</a>
            <a>1 star</a>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white",width:'1000px' }}>
        <div
          style={{
            backgroundColor: "#ebebeb",
            height: "50px",
            fontSize: "15px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            padding: "25px",
            border: "1px solid #bbb",
          }}
        >
          <a>Store Categories {">"} {props.category.name}</a>
          <div
            style={{
              backgroundColor: "white",
              padding: "3px",
              marginLeft: "15px",
              height: "25px",
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              placeholder="Search within results"
              type="text"
              style={{ border: "0px solid", height: "23px" }}
            />
            <img
              className="hover"
              src={magnifier}
              style={{ height: "18px", width: "18px" }}
            />
          </div>
          <a style={{ marginLeft: "25px", opacity: "0.8" }}>{products.length} item found</a>
        </div>
        <div
          style={{
            backgroundColor: "#e9e9e9",
            border: "1px solid #ccc",
            marginTop: "20px",
            marginBottom: "20px",
            height: "35px",
            gap: "40px",
            display: "flex",
            alignItems: "center",
            padding: "10px",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          <a
            style={{ color: "black", fontWeight: "500" }}
            className="hovercolororange"
          >
            Best Match
          </a>
          <a
            style={{ color: "black", opacity: "0.8" }}
            className="hovercolororange"
          >
            Orders{" "}
            <img src={downarr} style={{ height: "11px", width: "11px" }} />
          </a>
          <a
            style={{ color: "black", opacity: 0.8 }}
            className="hovercolororange"
          >
            New <img src={downarr} style={{ height: "11px", width: "11px" }} />
          </a>
          <a
            style={{ color: "black", opacity: 0.8 }}
            className="hovercolororange"
          >
            Price{" "}
            <img src={downarr} style={{ height: "11px", width: "11px" }} />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
         {products.map((el)=> <div
            style={{ width: "300px", height: "300px", border: "2px solid red" }}
          >
            <a>{el.title}</a>
            <p>{el.price}</p>
          </div>)}
         
          

         
        </div>
        <div style={{ backgroundColor: "#ccc" }}>
            {"<"} 1 - 2 - 3 {">"}
          </div>
      </div>
    </div>
  );
}

export default StoreProducts;
