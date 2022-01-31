import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/home/NavBar"
import ImageGallery from "react-image-gallery";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import orders from "../assets/orders.png";
import user2 from "../assets/user2.png";
import shoppingcart from "../assets/shopping-cart.png";
import axios from "axios";
import home from '../assets/home.png';
import "../css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Plusdemande(props) {
  let navigate = useNavigate();
  return (
    <div className="itemsdiv">
      <h2 className="h2onitemsdiv">{props.h2text}</h2>
      <span className="voirplus">Voir plus</span>
      <div
        style={{
          margin: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        { props.items.map((el) => (
          <div
          onClick={()=>{navigate('/productdetails')}}
            className="box hover"
            style={{
              width: "185px",
            }}
          >
            <img
              style={{
                height: "185px",
                width: "185px",
                borderRadius: "4px",
              }}
              src={el.thumbnail}
            />
            <p class="elementname">{el.sku} </p>
            {el.price_promotion ? (
              <div>
                <span className="elementprice">
                  TND {el.price_promotion}
                </span>
                <span class="percentage">
                  -{((el.price-el.price_promotion)*100)/el.price}
                  <span style={{ fontSize: "14px", fontWeight: "400" }}>%</span>
                </span>
                <p
                  style={{
                    margin: "0px",
                    padding: "0px 5px 0px 5px",
                    textDecorationLine: "line-through",
                    fontSize: "1rem",
                    color: "#75757a",
                  }}
                >
                  TND {el.price}
                </p>
              </div>
            ) : (
              <span
                style={{
                  fontSize: "18px",
                  padding: "0px 5px 0px 5px",
                  fontWeight: "700",
                  margin: "0px",
                }}
              >
                TND {el.price}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



function HomePage() {
  let navigate = useNavigate();

  const [height, setHeight] = useState(0);
  const [items,setItems]=useState([]);
  const ref = useRef(null);
  const getitems=()=>{
    axios.get("http://localhost:8090/product/get_all_product").then((res) => {
      setItems(res.data.slice(0,5));
      console.log("wtf")
    });  
  }
  const [allItems, setAllitems] = useState([
    {
      name: "Masque",
      price: 100,
      solde: true,
      discount: 15,

      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/1474/1.jpg?8226",
    },
    {
      name: "Pince bien",
      price: 105,
      discount: 60,
      solde: false,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/5044/1.jpg?2325",
    },
   
  
  
   
    {
      name: "Nutella",
      price: 45,
      solde: false,
      discount: 40,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/1083/1.jpg?5706",
    },
   
    
    {
      name: "Infinix IRocker",
      price: 79,
      solde: true,
      discount: 38,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/8234/1.jpg?0806",
    },
   
    {
      name: "Rio Caviar kit",
      price: 110,
      discount: 66,
      solde: true,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/7704/1.jpg?6865",
    },
    {
      name: "XIAOMI Mi Smart Brand 5",
      price: 139,
      solde: true,
      discount: 29,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642",
    },
  
    {
      name: "Huile d'olive",
      price: 45,
      solde: false,
      discount: 40,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/1574/1.jpg?4811",
    },
    {
      name: "Kinder",
      price: 7.5,
      solde: true,
      discount: 33,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/7183/1.jpg?6223",
    }, {
      name: "Masque",
      price: 100,
      solde: true,
      discount: 15,

      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/1474/1.jpg?8226",
    },
    {
      name: "Pince bien",
      price: 105,
      discount: 60,
      solde: false,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/5044/1.jpg?2325",
    },
   
  
  
   
    {
      name: "Nutella",
      price: 45,
      solde: false,
      discount: 40,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/1083/1.jpg?5706",
    },
   
    
    {
      name: "Infinix IRocker",
      price: 79,
      solde: true,
      discount: 38,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/8234/1.jpg?0806",
    },
   
    {
      name: "Rio Caviar kit",
      price: 110,
      discount: 66,
      solde: true,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/7704/1.jpg?6865",
    },
    {
      name: "XIAOMI Mi Smart Brand 5",
      price: 139,
      solde: true,
      discount: 29,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642",
    },
  
    {
      name: "Huile d'olive",
      price: 45,
      solde: false,
      discount: 40,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/1574/1.jpg?4811",
    },
    {
      name: "Kinder",
      price: 7.5,
      solde: true,
      discount: 33,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/7183/1.jpg?6223",
    }, {
      name: "Masque",
      price: 100,
      solde: true,
      discount: 15,

      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/1474/1.jpg?8226",
    },
    {
      name: "Pince bien",
      price: 105,
      discount: 60,
      solde: false,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/5044/1.jpg?2325",
    },
   
  
  
   
    {
      name: "Nutella",
      price: 45,
      solde: false,
      discount: 40,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/1083/1.jpg?5706",
    },
   
    
    {
      name: "Infinix IRocker",
      price: 79,
      solde: true,
      discount: 38,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/8234/1.jpg?0806",
    },
   
    {
      name: "Rio Caviar kit",
      price: 110,
      discount: 66,
      solde: true,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/7704/1.jpg?6865",
    },
    {
      name: "XIAOMI Mi Smart Brand 5",
      price: 139,
      solde: true,
      discount: 29,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642",
    },
  
    {
      name: "Huile d'olive",
      price: 45,
      solde: false,
      discount: 40,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/1574/1.jpg?4811",
    },
    {
      name: "Kinder",
      price: 7.5,
      solde: true,
      discount: 33,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/7183/1.jpg?6223",
    },
  ]);
  
  const [itemsvisible, setItemsvisible] = useState(12);
  const [categories, setcategories] = useState([
    {
      id: 1,
      icon:"https://i.postimg.cc/tTMFhwVJ/shop.png",
      name: "Superette",
      subcat: [
        { id: 1, name: "Epeciere" },
        { id: 2, name: "Boisson" },
        { id: 2, name: "Lessive" },
        { id: 2, name: "Essentiels" },
      ],
    },
    {
      id: 1,
      icon:"https://i.postimg.cc/tgD3gYqh/home.png",
      name: "Maison",
      subcat: [
        { id: 1, name: "Cuisine" },
        { id: 2, name: "Top Marque" },
        { id: 2, name: "ElectroMenager" },
      ],
    },
    {
      id: 1,
      icon:"https://i.postimg.cc/rpqGcSkV/cosmetics.png",
      name: "Santé & Beauté",
      subcat: [
        { id: 1, name: "Maquillage" },
        { id: 2, name: "Parfums" },
      ],
    },
    {
      id: 1,
      icon:"https://i.postimg.cc/t70Pc6kH/tablet.png",
      name: "Télephone & Portables",
      subcat: [
        { id: 2, name: "Télephone Portable" },

        { id: 1, name: "Tablette" },
        { id: 2, name: "Accessoire" },
      ],
    },
    {
      id: 1,
      icon:"https://i.postimg.cc/Y0LY8R13/tshirt.png",
      name: "Mode",
      subcat: [
        { id: 1, name: "Mode Homme" },
        { id: 2, name: "Mode Femme" },
        { id: 3, name: "Garçons" },
        { id: 4, name: "Fille" },
        { id: 4, name: "Chaussures Homme" },
        { id: 4, name: "Accesoire Homme" },
        { id: 4, name: "Accesoire Femme" },
      ],
    },
    {
      id: 1,
      icon:"https://i.postimg.cc/gJJvLmj1/responsive.png",
      name: "Informatique",
      subcat: [
        { id: 1, name: "Ordinateur" },
        { id: 2, name: "Laptop" },
        { id: 2, name: "Stockage" },
      ],
    },
    {
      id: 1,
      icon:"https://i.postimg.cc/fW1rsggM/washing-machine.png",
      name: "Electronique",
      subcat: [
        { id: 1, name: "Tv" },
        { id: 2, name: "Appareil Photo" },
        { id: 3, name: "Audio" },
        { id: 4, name: "Accessoire Tv" },
      ],
    },
    {
      id: 1,
      icon:"https://i.postimg.cc/BZjVdGph/video-console.png",
      name: "Jeux Video & Consoles",
      subcat: [
        { id: 1, name: "PS1" },
        { id: 2, name: "PS2" },
        { id: 2, name: "PS3" },
        { id: 2, name: "PS4" },
        { id: 2, name: "XBOX" },

        { id: 2, name: "ATARI" },
      ],
    },
  ]);
 

  useEffect(() => {
    getitems();
    setHeight(ref.current.clientHeight);
    console.log(height);
  },[]);
  return (
    <div style={{backgroundColor:'#f2f2f2'}}>
      <img
        style={{ maxHeight: "100%", maxWidth: "100%", verticalAlign: "bottom" }}
        src="https://ae01.alicdn.com/kf/Hac8dfb7c5a24489385475c2ae153f373m.jpg_Q90.jpg_.webp"
      />
     <div style={{backgroundColor:'#f5f5f5',width:'1200px',margin:'0px auto'}}>
          <p onClick={()=>{navigate('/becomeSeller')}} className="sellonstorktxt">Vendez sur Stork</p>
        </div>
      <div
        style={{
          padding: "10px 0px 10px 0px",
          margin: "auto",
          width: "auto",
          maxWidth: "1200px",
          justifyContent: "center",
          backgroundColor: "#f2f2f2",
          minHeight: height,
          display: "flex",
          flexDirection: "row",
          gap: 30,
        }}
      >
        <div className="categories" style={{ width: "240px" }}>
          <ul class="category_menu" ref={ref}>
            {categories.map((el) => (
              <li className="maincat">
                <img className="cat_name" height="30px" width="30px" src={el.icon}/><span class="cat_name">{el.name}</span>
                <ul style={{ minHeight: height }} class="right_sliding">
                  {el.subcat.map((subcat) => (
                    <li>
                      <span class="cat_name">{subcat.name}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            width: "700px",
            height:height,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 7, height: height * 0.7, borderRadius: 45 }}>
            <Carousel
              showArrows={false}
              autoPlay
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
            >
              <img
                style={{
                  maxHeight: height * 0.7,
                  maxWidth: "100%",
                  minHeight: height * 0.7,
                  minWidth: "100%",
                  borderRadius: "10px",
                }}
                src="https://tn.jumia.is/cms/000_BF21/00_Live/Sliders/2/BF21_Beauty_Slider2.jpg"
              />
              <img
                style={{
                  maxHeight: height * 0.7,
                  maxWidth: "100%",
                  minHeight: height * 0.7,
                  minWidth: "100%",
                  borderRadius: "10px",
                }}
                src="https://tn.jumia.is/cms/000_BF21/00_Live/Sliders/2/BF21_Toutpourvotremaison_Slider.jpg"
              />
              <img
                style={{
                  maxHeight: height * 0.7,
                  maxWidth: "100%",
                  minHeight: height * 0.7,
                  minWidth: "100%",
                  borderRadius: "10px",
                }}
                src="https://tn.jumia.is/cms/000_BF21/00_Live/00_CPRs/SIS/BF21_CPR-boutique-offcielle_Slider.jpg"
              />
            </Carousel>
          </div>
          <div style={{ flex: 3, maxHeight: height * 0.3, padding: 5 }}>
            <img
              style={{
                maxHeight: height * 0.28,
                maxWidth: "100%",
                minHeight: height * 0.25,
                minWidth: "100%",
                borderRadius: "10px",
              }}
              src="https://tn.jumia.is/cms/000_BF21/00_Live/Generic/BF21_Hiver_SB.jpg"
            />
          </div>
        </div>
        <div
          className="gradientdiv"
          style={{
            padding: 15,
            backgroundColor: "white",
            borderRadius: "8px",
            width: "240px",
            height:height,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
           {!localStorage.getItem("jwt")?<img
            style={{ alignSelf: "center" }}
            height={48}
            width={48}
            src="//ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png"
          />:<img
          style={{ alignSelf: "center",borderRadius:'50%' }}
          height={48}
          width={48}
          src="https://media-exp1.licdn.com/dms/image/C5603AQEZIMZilsqA6A/profile-displayphoto-shrink_200_200/0/1608994757336?e=1648684800&v=beta&t=dYS8ndTACYXL4UDoykvG9ZWrmRskE52xBrrSSBErBCQ"
        />}
          {!localStorage.getItem("jwt")?<div>
          <p
            style={{ fontWeight: "700", fontSize: "13px", textAlign: "center" }}
          >
            Bienvenue sur Stork
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <span onClick={()=>{navigate('/signup')}} class="inscr">S'inscrire</span>
            <span onClick={()=>{navigate('/signin')}} class="connect">Se Connecter</span>
          </div>
          </div>:<div><p style={{fontWeight:'700',fontSize:'15px',textAlign:'center',padding:'5px',margin:'0px',opacity:'0.85'}}>Hi, {JSON.parse(localStorage.getItem("user")).name}</p>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center'}}>
        <div> <div className="hover" style={{backgroundColor:'#f0f0f0',height:'55px',width:'55px',padding:'5px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}> <img src={user2} style={{height:'35px',width:'35px'}}/></div><p style={{margin:'0px',fontSize:'14px',textAlign:'center'}}>Account</p></div>
        <div> <div className="hover" style={{backgroundColor:'#f0f0f0',height:'55px',width:'55px',padding:'5px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}> <img src={orders} style={{height:'35px',width:'35px'}}/></div><p style={{margin:'0px',fontSize:'14px',textAlign:'center'}}>Orders</p></div>
        <div> <div className="hover" style={{backgroundColor:'#f0f0f0',height:'55px',width:'55px',padding:'5px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}> <img src={shoppingcart} style={{height:'35px',width:'35px'}}/></div><p style={{margin:'0px',fontSize:'14px',textAlign:'center'}}>Cart</p></div>

            </div>
          
          </div>}
          <img
            style={{ marginTop: 15, borderRadius: 15 }}
            height={270}
            width={210}
            src="https://ae01.alicdn.com/kf/H4d81c0b772ad404b9acc330f16c6165dO.png_.webp"
          />
        </div>
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Plusdemande h2text={"Les plus demandés"} items={items}></Plusdemande>
        <Plusdemande
          h2text={"Nos Meilleurs Offres Black Friday | Jusqu'à -70%"}
          items={items}
        ></Plusdemande>
        <Plusdemande
          h2text={"Accessoires Téléphones | Jusqu'à -70%"}
          items={items}
        ></Plusdemande>
      </div>
      <div className="alsolike">
        <div className="khatt"></div>
        <p style={{ margin: "0px 18px", fontWeight: "700" }}>
          Vous aimerez aussi
        </p>
        <div className="khatt"></div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          textAlign: "center",
          width: "1200px",
          margin: "auto",
        }}
      >
        {allItems.slice(0, itemsvisible).map((el) => (
          <div
          onClick={()=>navigate("/productdetails")}
            className="itemshadow"
            style={{
              flex: "1 0 190px",
              margin: "5px",
              height: "300px",
              backgroundColor: "white",
            }}
          >
            <div
            
            >
              <img
                style={{
                  height: "190px",
                  width: "100%",
                  borderRadius: "8px",
                }}
                src={el.img}
              />
              <p class="elementname">{el.name} </p>
              {el.solde ? (
                <div >
                  <p style={{fontSize:'10px',textAlign:'left',fontWeight:'500',margin:'0px 0px 0px 10px'}}>
                    TND <span style={{fontSize:'18px',fontWeight:'700'}}>{(el.price - (el.price / 100) * el.discount).toFixed(2)}</span>
                  </p><div style={{textAlign:'left'}}>
                  <span
                    style={{
                      margin: "0px",
                      padding: "0px 0px 0px 10px",
                      textDecorationLine: "line-through",
                      textAlign:'left',
                      fontSize: "12px",
                      
                      color: "#75757a",
                    }}
                  >
                    TND {el.price.toFixed(2)}
                  </span>
                  <span style={{ margin: "0px",
                      textAlign:'left',
                      opacity:'0.6',
                      fontSize: "12px",
                      color: "#75757a"}}> /  </span> <span style={{ margin: "0px",
                      textAlign:'left',
                      fontSize: "14px",
                      color: '#ff6509'}}> - {el.discount}%  </span></div>
                 
                </div>
              ) : (
                <span
                  style={{
                    fontSize: "18px",
                    padding: "0px 5px 0px 5px",
                    fontWeight: "700",
                    margin: "0px",
                  }}
                >
                  TND {el.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "25px" }}
      >
        <div
          onClick={() => setItemsvisible((prevValue) => prevValue + 6)}
          className="loadmore"
        >
          Voir Plus
        </div>
      </div>
    </div>
  );
}

export default HomePage;
