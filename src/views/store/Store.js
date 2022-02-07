import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import maginifier from "../../assets/magnifier.png"
import lato from "../../fonts/Lato-Light.ttf";
function Store() {
  const { name } = useParams();
  const [store, setStore] = useState(null);
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
        <div></div>
             <div style={{height:'90px',display:'flex',justifyContent:'center',alignItems:'center',width:'1200px',margin:'0px auto',position:'relative'}}><p className="lato" style={{fontSize:'30px',fontWeight:'700'}}>{store.name} Store</p><div style={{position:'absolute',top:'27px',right:'10px',border:'1px solid #777',padding:'3px',display:'flex',alignItems:'center'}} ><input type="text" style={{border:'0px solid'}}/><img className="hover" src={maginifier} style={{height:'25px',width:'25px'}}/></div></div>
             
                <div style={{backgroundColor:'black',height:'40px'}}><p>mystore</p></div>

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
          {" "}
          <div>
            {elements.map((el, index) =>
              el.type === "text" ? (
                <div
                  style={{
                    margin: 35,

                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h2 style={{ margin: 20 }}>{el.value}</h2>
                </div>
              ) : el.type === "2el" ? (
                <div
                  style={{
                    margin: 25,
                    display: "flex",
                    position: "relative",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  {el.el.map((val) => {
                    const found = store.products.find(
                      (x) => x.id === parseInt(val)
                    );
                    return (
                      <div>
                        <img
                          style={{
                            border: "solid 2px rgb(219, 181, 128)",
                            borderRadius: 8,
                          }}
                          alt="item"
                          height="250"
                          width="250"
                          src={found.thumbnail}
                        />
                        <p
                          style={{
                            margin: 10,
                            fontSize: 16,
                            fontWeight: "400",
                            textAlign: "left",
                            opacity: 0.75,
                          }}
                        >
                          {found.title}
                        </p>
                        <p
                          style={{
                            margin: 10,
                            fontSize: 19,
                            fontWeight: "500",
                            opacity: 0.87,
                            textAlign: "left",
                          }}
                        >
                          {found.price} TND
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : el.type === "slideshow" ? (
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <ImageGallery
                    slideInterval={5000}
                    autoPlay
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    items={el.img}
                  />
                </div>
              ) : el.type === "image" ? (
                <div
                  style={{
                    margin: 25,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "relative",
                  }}
                >
                  {" "}
                  <img
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    alt="img"
                    src={el.url}
                  />
                </div>
              ) : el.type === "3el" ? (
                <div
                  style={{
                    margin: 25,
                    display: "flex",
                    position: "relative",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  {el.el.map((val) => {
                    const found = store.products.find(
                      (x) => x.id === parseInt(val)
                    );
                    return (
                      <div
                        style={{
                          display: "flex",
                          boxShadow:
                            "rgba(163, 131, 85, 0.08) 0px 4px 24px 0px",
                          flexDirection: "column",
                          borderRadius: "8px",
                          padding: "16px",
                          border: "2px solid rgb(219, 181, 128)",
                          backgroundColor: "rgb(255,255,255)",
                        }}
                      >
                        <img
                          alt="item"
                          height="160"
                          width="200"
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                          src={found.thumbnail}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <p
                            style={{
                              margin: 10,
                              fontSize: 16,
                              fontWeight: "400",
                              textAlign: "left",
                              opacity: 0.75,
                            }}
                          >
                            {found.title}
                          </p>
                          <p
                            style={{
                              margin: 10,
                              fontSize: 19,
                              fontWeight: "500",
                              opacity: 0.87,
                              textAlign: "left",
                            }}
                          >
                            {found.price} TND
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null
            )}
          </div>
        </div>      </div>

      </div>
    );
  }
}

export default Store;
