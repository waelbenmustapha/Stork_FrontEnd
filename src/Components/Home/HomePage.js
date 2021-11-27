import React, { useState, useRef, useEffect } from "react";
import NavBar from "./NavBar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Plusdemande(props) {
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
        {props.items.map((el) => (
          <div
            className="box"
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
              src={el.img}
            />
            <p class="elementname">{el.name} </p>
            {el.solde ? (
              <div>
                <span className="elementprice">
                  TND {el.price - (el.price / 100) * el.discount}
                </span>
                <span class="percentage">
                  -{el.discount}
                  <span style={{ fontSize: "14px", fontWeight: "400" }}>%</span>
                </span>
                <p className="prcprc">TND {el.price}</p>
              </div>
            ) : (
              <span className="prcnrml">TND {el.price}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      class="container-fluid"
      style={{
        backgroundColor: "#eaeaea",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <output
        style={{
          borderColor: "#eaeaea",
        }}
      >
        <footer class="section-footer border-top">
          <div class="container-fluid">
            <section class="footer-top padding-y">
              <div class="row">
                <aside class="col-md-4">
                  <article class="mr-3">
                    <div>
                      <h1
                        style={{
                          marginLeft: "50px",
                        }}
                      >
                        RETROUVEZ-NOUS SUR
                      </h1>
                      <p className="social-container">
                        <a
                          href="https://www.youtube.com/c/jamesqquick"
                          className="youtube social"
                        >
                          <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a
                          href="https://www.facebook.com/learnbuildteach/"
                          className="facebook social"
                        >
                          <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a
                          href="http://www.instagram.com/larnbuildteach"
                          className="instagram social"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a
                          href="https://wwww.twitter.com"
                          className="twitter social"
                        >
                          <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                      </p>
                    </div>
                    <div>
                      <a
                        class="btn btn-icon btn-light"
                        title="Facebook"
                        target="_blank"
                        href="#"
                        data-abc="true"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        class="btn btn-icon btn-light"
                        title="Instagram"
                        target="_blank"
                        href="#"
                        data-abc="true"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a
                        class="btn btn-icon btn-light"
                        title="Youtube"
                        target="_blank"
                        href="#"
                        data-abc="true"
                      >
                        <i class="fab fa-youtube"></i>
                      </a>
                      <a
                        class="btn btn-icon btn-light"
                        title="Twitter"
                        target="_blank"
                        href="#"
                        data-abc="true"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                  </article>
                </aside>
                <aside class="col-sm-3 col-md-2">
                  <h6 class="title">A PROPOS</h6>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" data-abc="true">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#" data-abc="true">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" data-abc="true">
                        Terms & Condition
                      </a>
                    </li>
                    <li>
                      <a href="#" data-abc="true">
                        Our Blogs
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="col-sm-3 col-md-2">
                  <h6 class="title">Services</h6>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" data-abc="true">
                        Help center
                      </a>
                    </li>
                    <li>
                      <a href="#" data-abc="true">
                        Money refund
                      </a>
                    </li>
                    <li>
                      <a href="#" data-abc="true">
                        Terms and Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" data-abc="true">
                        Open dispute
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="col-sm-3 col-md-2">
                  <h6 class="title">Pour les utilisateurs</h6>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" data-abc="true">
                        User Login
                      </a>
                    </li>
                    <li>
                      <a href="#" data-abc="true">
                        User register
                      </a>
                    </li>
                    <li>
                      <a href="#" data-abc="true">
                        Account Setting
                      </a>
                    </li>
                    <li>
                      <a href="#" data-abc="true">
                        My Orders
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="col-sm-2 col-md-2">
                  <h6 class="title">Notre app</h6>
                  <a href="#" class="d-block mb-2" data-abc="true">
                    <img
                      class="img-responsive app"
                      src="https://i.imgur.com/nkZP7fe.png"
                      height="40"
                    />
                  </a>
                  <a href="#" class="d-block mb-2" data-abc="true">
                    <img
                      class="img-responsive app"
                      src="https://i.imgur.com/47q2YGt.png"
                      height="40"
                      width="123"
                    />
                  </a>
                </aside>
              </div>
            </section>
            <section class="footer-copyright border-top">
              <p class="float-left text-muted">
                © 2021 Stork All rights reserved
              </p>
              <p target="_blank" class="float-right text-muted">
                <a href="#" data-abc="true">
                  Privacy &amp; Cookies
                </a>
                &nbsp; &nbsp;
                <a href="#" data-abc="true">
                  Accessibility
                </a>
              </p>
            </section>
          </div>
        </footer>
      </output>
    </div>
  );
}

function HomePage() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

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
    },
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
    },
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
    },
  ]);

  const [itemsvisible, setItemsvisible] = useState(12);
  const [categories, setcategories] = useState([
    {
      id: 1,
      icon: "https://i.postimg.cc/tTMFhwVJ/shop.png",
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
      icon: "https://i.postimg.cc/tgD3gYqh/home.png",
      name: "Maison",
      subcat: [
        { id: 1, name: "Cuisine" },
        { id: 2, name: "Top Marque" },
        { id: 2, name: "ElectroMenager" },
      ],
    },
    {
      id: 1,
      icon: "https://i.postimg.cc/rpqGcSkV/cosmetics.png",
      name: "Santé & Beauté",
      subcat: [
        { id: 1, name: "Maquillage" },
        { id: 2, name: "Parfums" },
      ],
    },
    {
      id: 1,
      icon: "https://i.postimg.cc/t70Pc6kH/tablet.png",
      name: "Télephone & Portables",
      subcat: [
        { id: 2, name: "Télephone Portable" },

        { id: 1, name: "Tablette" },
        { id: 2, name: "Accessoire" },
      ],
    },
    {
      id: 1,
      icon: "https://i.postimg.cc/Y0LY8R13/tshirt.png",
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
      icon: "https://i.postimg.cc/gJJvLmj1/responsive.png",
      name: "Informatique",
      subcat: [
        { id: 1, name: "Ordinateur" },
        { id: 2, name: "Laptop" },
        { id: 2, name: "Stockage" },
      ],
    },
    {
      id: 1,
      icon: "https://i.postimg.cc/fW1rsggM/washing-machine.png",
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
      icon: "https://i.postimg.cc/BZjVdGph/video-console.png",
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
  const items = [
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
      name: "XIAOMI Mi Smart Brand 5",
      price: 139,
      solde: true,
      discount: 29,
      img: "https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642",
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
  ];

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    console.log(height);
  });
  return (
    <div>
      <img
        style={{ maxHeight: "100%", maxWidth: "100%", verticalAlign: "bottom" }}
        src="https://ae01.alicdn.com/kf/Hac8dfb7c5a24489385475c2ae153f373m.jpg_Q90.jpg_.webp"
      />
      <div className="sellonstork">
        <div>
          <p className="sellonstorktxt">Vendez sur Stork</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <NavBar />
      <div
        style={{
          padding: "30px 0px 10px 0px",
          margin: "auto",
          width: "auto",
          maxWidth: "1200px",
          justifyContent: "center",
          backgroundColor: "#f2f2f2",
          maxHeight: height,
          display: "flex",
          flexDirection: "row",
          gap: 30,
        }}
      >
        <div className="categories" style={{ width: "240px" }}>
          <ul class="category_menu" ref={ref}>
            {categories.map((el) => (
              <li className="maincat">
                <img
                  className="cat_name"
                  height="30px"
                  width="30px"
                  src={el.icon}
                />
                <span class="cat_name">{el.name}</span>
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
        <div className="midprt">
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
        <div className="gradientdiv">
          <img
            style={{ alignSelf: "center" }}
            height={48}
            width={48}
            src="//ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png"
          />
          <p
            style={{ fontWeight: "700", fontSize: "15px", textAlign: "center" }}
          >
            Bienvenue sur Stork
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <span class="inscr">S'inscrire</span>
            <span class="connect">Se Connecter</span>
          </div>
          <img
            style={{ marginTop: 15, borderRadius: 15 }}
            height={270}
            width={210}
            src="https://ae01.alicdn.com/kf/H4d81c0b772ad404b9acc330f16c6165dO.png_.webp"
          />
        </div>
      </div>
      <div className="plussomething">
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
      <div className="allitems">
        {allItems.slice(0, itemsvisible).map((el) => (
          <div className="itemshadow">
            <div>
              <img className="itmimg" src={el.img} />
              <p class="elementname">{el.name} </p>
              {el.solde ? (
                <div>
                  <p className="prcsld">
                    TND{" "}
                    <span style={{ fontSize: "18px", fontWeight: "700" }}>
                      {(el.price - (el.price / 100) * el.discount).toFixed(2)}
                    </span>
                  </p>
                  <div style={{ textAlign: "left" }}>
                    <span className="prcold">TND {el.price.toFixed(2)}</span>
                    <span className="slash">/ </span>{" "}
                    <span className="dscnt"> - {el.discount}% </span>
                  </div>
                </div>
              ) : (
                <span className="prcnodsc">TND {el.price.toFixed(2)}</span>
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
      <Footer />
    </div>
  );
}

export default HomePage;
