import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "./store.css";
import maginifier from "../../assets/magnifier.png";
import { Rating } from "react-simple-star-rating";
import arrowdown from "../../assets/arrowdown.png";


import lato from "../../fonts/Lato-Light.ttf";
import StoreHomePage from "../../components/store/StoreHomePage";
import StoreProducts from "../../components/store/StoreProducts";
import StoreFeedbacks from "../../components/store/StoreFeedbacks";
function Store() {
  const { name } = useParams();
  const [category,setCategory]=useState(null);
  const [store, setStore] = useState(null);
  const [selected, setSelected] = useState("storehome");
  const [elements, setelements] = useState([]);
  function getstore() {
    axios
      .get(`http://localhost:8090/store/get_store_by_name/${name}`)
      .then((response) => {
        console.log(response.data);
        console.log("item list are " + response.data.products);

        setStore(response.data);
        setelements(JSON.parse(response.data.homepage));
      });
  }

  useEffect(() => {
    getstore();
  }, []);

  if (store == null) {
    return <p>Loading</p>;
  } else {
    return (
      <div>
        <div
          style={{
            height: "39px",
            borderBottom: "1px solid rgb(233, 233, 233)",
          }}
        >
          <div
            style={{
              width: "1200px",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: "10px",
              height: "100%",
              margin: "0px auto",
            }}
          >
            <a
              className="lato"
              style={{ fontSize: "15px", fontWeight: "700", color: "black" }}
            >
              {store.name} Store
            </a>
            <div
              style={{
                fontSize: "13px",
                backgroundColor: "rgb(240, 240, 240)",
                border: "1px solid rgb(200, 200, 200)",
                borderRadius: "5px",
                padding: "0px 3px 0px 3px",
              }}
            >
              <a>Open </a>
              <a style={{ color: "rgb(237, 69, 0)" }}>3 month(s)</a>
             
            </div>
            <Rating
            readonly={true}
            size={24}
            style={{padding:'0px',margin:'0px',verticalAlign:'none',marginTop:'3px'}}
                ratingValue={72} /* Available Props */
              />
              <a style={{fontSize:'15px',fontWeight:'500'}}>{(72/20).toFixed(1)}</a>
          </div>
        </div>
        <div
          style={{
            height: "90px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "1200px",
            margin: "0px auto",
            position: "relative",
          }}
        >
          <p className="lato" style={{ fontSize: "30px", fontWeight: "700" }}>
            {store.name} Store
          </p>
          <div
            style={{
              position: "absolute",
              top: "27px",
              right: "10px",
              border: "1px solid #777",
              padding: "3px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input type="text" style={{ border: "0px solid" }} />
            <img
              className="hover"
              src={maginifier}
              style={{ height: "25px", width: "25px" }}
            />
          </div>
        </div>

        <div style={{ backgroundColor: "black", height: "40px" }}>
          <div
            style={{
              margin: "0px auto",
              height: "40px",
              width: "1200px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <a
              onClick={() => setSelected("storehome")}
              className="hovergraynav"
              style={{
                backgroundColor:selected=="storehome"?'rgba(255, 255, 255, 0.2)':"",
                color: "white",
                fontSize: "17px",
                fontWeight: "400",
                padding: "25px",
              }}
            >
              Store Home
            </a>
            <div
            onClick={() => {setSelected("products")}}
              className="hovergraynav prodhov"
              style={{
                backgroundColor:selected=="products"?'rgba(255, 255, 255, 0.2)':"",

                color: "white",
                position:'relative',
                fontSize: "17px",
                zIndex:'500',
                width:'130px',
                textAlign:'center',
                lineHeight:'40px',
                fontWeight: "400",
height:'40px'              }}
            >
             <p style={{margin:'0px'}} onClick={()=>setCategory("")} >Products <img src={arrowdown} style={{height:'15px',width:'15px'}}/></p> 
            <div className="storecategories showme" > 
            {store.storeCategories.map((el)=><a onClick={()=>setCategory(el)}>{el.name}</a>)}
            
            </div> 
            </div>
            <a
              onClick={() => setSelected("feedback")}
              className="hovergraynav"
              style={{
                backgroundColor:selected=="feedback"?'rgba(255, 255, 255, 0.2)':"",

                color: "white",
                fontSize: "17px",
                fontWeight: "400",
                padding: "25px",
              }}
            >
              Feedback
            </a>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f2f2f2",
            margin: "0px",
            padding: "10px 10px 10px 10px",
          }}
        >
          <div
            style={{
              width: "1200px",
              margin: "0px auto",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "25px",
            }}
          >
            {selected == "storehome" ? (
              <StoreHomePage store={store} elements={elements} />
            ) : selected == "products" ? (
              <StoreProducts setCategory={setCategory} store={store} products={store.products} category={category}/>
            ) : selected == "feedback" ? (
              <StoreFeedbacks />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
