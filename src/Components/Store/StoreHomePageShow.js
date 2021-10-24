import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Slide } from "react-slideshow-image";

function StoreHomePageShow() {
    const [itemslist, setitemlist] = useState([]);
   const [elements, setelements] = useState([]);
   function getelements() {
    axios.get("http://localhost:5000/items/getitems").then((res) => {
      setitemlist(res.data);
    })}
   function fetchstore(){
       axios.get('http://localhost:5000/stores/getstores').then(result=>setelements(JSON.parse(result.data.home)));
   }
   useEffect(() => {
    fetchstore();
    getelements();
   }, [])
    return (
        <div>
            {elements.map((el, index) =>
            el.type === "text" ? (
              <div
                style={{
                  margin:35,

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
                  const found = itemslist.find((x) => x.id === parseInt(val));
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
                        src={found.image}
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
                        {found.name}
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
               
                <Slide>
                  {el.img.map((slideImage, index) => (
                    <div>
                      <img
                        alt="slide img"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        src={slideImage}
                      />
                    </div>
                  ))}
                </Slide>
                =
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
                  const found = itemslist.find((x) => x.id === parseInt(val));
                  return (
                    <div className="test">
                      <img
                        alt="item"
                        height="160"
                        width="200"

                        style={{maxWidth:'100%',maxHeight:'100%'}}
                        src={found.image}
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
                          {found.name}
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
    )
}

export default StoreHomePageShow
