import React from 'react';
import ImageGallery from "react-image-gallery";

function StoreHomePage(props) {
    
  return <div>
  {props.elements.map((el, index) =>
    el.type === "text" ? (
      <div
        style={{
      

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
          const found = props.store.products.find(
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
          const found = props.store.products.find(
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
</div>;
}

export default StoreHomePage;
