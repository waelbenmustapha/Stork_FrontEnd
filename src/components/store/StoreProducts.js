import React, { useEffect, useState } from "react";
import magnifier from "../../assets/magnifier.png";
import downarr from "../../assets/downarr.png";
import square from "../../assets/square.png";
import axios from "axios";
import discount from "../../assets/discount.png";
import PaginationBar from "../PaginationBar";
function StoreProducts(props) {
  const [products, setProducts] = useState([]);
  const [clicknmbr, setClicknmbr] = useState(0);
  const [page, setPage] = useState(1);
  const [unchanged, setUnchanged] = useState([]);
  function sortproductsbyprice(pr) {
    setClicknmbr(clicknmbr + 1);
    if (clicknmbr % 2 == 0) {
      console.log("price down");
      pr.sort(function (a, b) {
        if (a.price_promotion == 0) {
          if (b.price_promotion == 0) {
            return a.price - b.price;
          } else if (b.price_promotion !== 0) {
            return a.price - b.price_promotion;
          }
        } else {
          if (b.price_promotion == 0) {
            return a.price_promotion - b.price;
          } else if (b.price_promotion !== 0) {
            return a.price_promotion - b.price_promotion;
          }
        }
      });

      setProducts([...pr]);
    }
    if (clicknmbr % 2 == 1) {
      console.log("reverse price up");
      pr.reverse();
      setProducts([...pr]);
    }
  }

  const searchBydescriptionortitle = (searchInput) => {
    const filteredData = unchanged.filter((value) => {
      const searchStr = searchInput.toLowerCase();
      const titlematch = value.title
        .toString()
        .toLowerCase()
        .includes(searchStr);
      return titlematch;
    });
    setProducts(filteredData);
  };

  function getprods() {
    if (props.category !== "") {
      axios
        .get(
          "http://localhost:8090/product/findbystorecategory/" +
            props.category.id
        )
        .then((res) => {
          setProducts(res.data);
          setUnchanged(res.data);
        });
    } else {
      setProducts(props.store.products);
      setUnchanged(props.store.products);
    }
  }
  useEffect(() => {
    getprods();
  }, [props.category]);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "row",
      }}
    >
      <p style={{ fontSize: "25px" }}>{}</p>
      <div
        style={{
          width: "200px",
          minWidth: "180px",
          backgroundColor: "white",
        }}
      >
        <div style={{ border: "1px solid #ccc" }}>
          <div
            style={{
              padding: "5px",
              textAlign: "center",
              backgroundColor: "#f68b1e",
            }}
          >
            <a style={{ fontSize: "14px", fontWeight: "500", color: "white" }}>
              Store Categories
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              fontSize: "14px",
              padding: "10px",
              flexDirection: "column",
              marginTop: "15px",
            }}
          >
            {props.store.storeCategories.map((el) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={square} style={{ height: "10px", width: "10px" }} />{" "}
                <a
                  onClick={() => {
                    setPage(1);
                    props.setCategory(el);
                  }}
                  className="hoverunderlineorange"
                  style={{ marginLeft: "10px" }}
                >
                  {el.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: "1px solid #ccc" ,marginTop:'25px'}}>
          <div
            style={{
              padding: "5px",
              textAlign: "center",
              backgroundColor: "#f68b1e",
            }}
          >
            <a style={{ fontSize: "14px", fontWeight: "500", color: "white" }}>
              Store Categories
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              fontSize: "14px",
              padding: "10px",
              flexDirection: "column",
              marginTop: "15px",
            }}
          >
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
        </div>
        
      </div>
      <div style={{ backgroundColor: "white", width: "1000px" }}>
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
          <a>
            <a
              className="hovercolororange"
              style={{ color: "black" }}
              onClick={() => {
                setPage(1);
                props.setCategory("");
              }}
            >
              Store Categories
            </a>{" "}
            {">"} {props.category.name}
          </a>
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
              onChange={(e) => searchBydescriptionortitle(e.target.value)}
              style={{ border: "0px solid", height: "23px" }}
            />
            <img
              className="hover"
              src={magnifier}
              style={{ height: "18px", width: "18px" }}
            />
          </div>
          <a style={{ marginLeft: "25px", opacity: "0.8" }}>
            {products.length} item found
          </a>
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
            onClick={() => {
              sortproductsbyprice(products);
            }}
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
            minHeight: "980px",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {products.slice((page - 1) * 12, page * 12).map((el) => (
            <div
              className="scaleitup"
              style={{
                width: "220px",
                height: "300px",
                marginBottom: "20px",
                padding: "8px",
                position: "relative",
              }}
            >
              <img
                src={el.thumbnail}
                style={{
                  height: "200px",
                  width: "200px",
                  border: "1px solid #ededed",
                }}
              />
              {el.price_promotion !== 0 && (
                <div
                  style={{ position: "absolute", top: "6px", right: "-25px" }}
                >
                  <div style={{ position: "relative" }}>
                    {" "}
                    <img
                      src={discount}
                      style={{ height: "80px", width: "80px" }}
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: "43px",
                        right: "42px",
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "white",
                      }}
                    >
                      {100 - ((el.price_promotion / el.price) * 100).toFixed(0)}
                    </p>
                  </div>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {" "}
                <a style={{ color: "#444", fontSize: "13px" }}>{el.title}</a>
                <a
                  style={{
                    marginLeft: "5px",
                    color: "#f60",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  TND {el.price_promotion == 0 ? el.price : el.price_promotion}
                </a>
                {el.price_promotion !== 0 ? (
                  <p
                    style={{
                      marginLeft: "5px",
                      fontSize: "12px",
                      color: "#999",
                      textDecorationLine: "line-through",
                    }}
                  >
                    TND {el.price}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PaginationBar
            page={page}
            setPage={setPage}
            totalPosts={products.length}
          />
        </div>
      </div>
    </div>
  );
}

export default StoreProducts;
