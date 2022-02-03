import React, { useState, useEffect } from 'react';
import NavBar from "../components/home/NavBar";
import Footer from "../components/home/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../css/home.css';

export const ProductDetails = () => {
  const [dataItems, setItems] = useState(
    {
      "id": 1,
      "categorie": "sport",
      "title": "Montre numérique intelligente de sport pour hommes, montre-bracelet électronique led, Bluetooth, fitness, femmes, enfants, heures",
      "SKU": "nameofstore-categorie-asHxdvFlN46s4dfs4dsf46sdf46",
      "price": "4,40",
      "promotion": "-28%",
      "marque": "Samsung",
      "quantity": "14",
      "weight": "0.15",
      "weight_unit": "kg",
      "colors":["red","black","crimson","teal"],
      "size": ["S","M","L","XL","XXL"],
      "description": "Pack  2 Sweat à capuche indémodable  de couleur Gris et Noir à manches longuesle sweat à capuche à une grande pochette Kangoro en avant pour se sentir chaque jour plus à l’aisecette pack se porte  avec un jeans, un Jogging ou bien un short.!De plus c'est un look streetwear tendance Simple, confortable et élégant.Matière de fabrication: Coton molleton doux.Composition : 50% coton, 50% polyester.Made in Tunisia.",
      "link": "http://localhost:5000/showproduct/id=1",
      "src": [
        "https://ae01.alicdn.com/kf/H84fc1a30e14e4c0c85941b9a63254b0bf/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/H6a85fcfda1ef4a5fa59314424ba43844O/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/H84fc1a30e14e4c0c85941b9a63254b0bf/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/He2642254c57c4961ba2ac7b49a28eb3cD/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/H6a85fcfda1ef4a5fa59314424ba43844O/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/H84fc1a30e14e4c0c85941b9a63254b0bf/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/He2642254c57c4961ba2ac7b49a28eb3cD/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/H6a85fcfda1ef4a5fa59314424ba43844O/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/H84fc1a30e14e4c0c85941b9a63254b0bf/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/He2642254c57c4961ba2ac7b49a28eb3cD/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
        "https://ae01.alicdn.com/kf/H76429d21abd542c8929bd1bc54f77eb98/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp"
        ],
    }
  );
  const imgRef = React.createRef();
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const onAddClicked = () => {
    setQuantity(quantity + 1);
  };

  const onRemoveClicked = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageTap = imageIndex =>{
    setImageIndex(imageIndex);
    const images = imgRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    };
    images[imageIndex].className = "active";
  };

  const openTab = (evt, id) => {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-content-container");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-item");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
  }

  const scrollLeft = () => {
    document.getElementById("thumb").scrollLeft -= 200;
  }

  const scrollRight = () => {
    document.getElementById("thumb").scrollLeft += 200;
  }
  /*************************** */
  const addScroll = () => {
    document.getElementById("test").scrollLeft += 200;
  }
  
  
  useEffect(() => {
    imgRef.current.children[imageIndex].className = "active";
  });

  return(
    <>
      <NavBar />
      <div className='wrapper'>
        <div className='product-main'>
          <div className="product-main-wrap" key={dataItems.id}>
            <div className="box-product-image">
              <div className="big-img">
                <img src={dataItems.src[imageIndex]} alt=""/>
              </div>
              <div id="slide-wrapper" >
                <i id="slideLeft" className="arrow fas fa-chevron-left" onClick={scrollLeft}></i>
                
                <div className="thumb" ref={imgRef}>
                  {
                    dataItems.src.map((img, index) => (
                      <img src={img} alt="" key={index} onClick={() => handleImageTap(index)} />
                    ))
                  }
                </div>
                
                <i id="slideRight" className="arrow fas fa-chevron-right" onClick={scrollRight}></i>
              </div>
              
            </div>
            
            <div className="box-product-content">
              <div className="product-title">
                <h1 className="product-title-text">{dataItems.title}</h1>
              </div>

              <div className="product-reviewer">
                {/* <div className="overview-rating" aria-haspopup="true" aria-expanded="false">
                  <label className="next-rating-icon">
                    <i className="next-icon next-icon-favorites-filling next-medium"></i>
                  </label>
                  <span className="overview-rating-average">4.3</span>
                  <i className="next-icon next-icon-arrow-down next-xxs" style={{ marginLeft: "0px;"}}/>
                </div> */}
                <div className="overview-rating" style={{display: "contents"}}>
                  <span>
                    <Stack spacing={1}>
                      <Rating name="size-small" defaultValue={2} size="small" />
                    </Stack>
                  </span>
                  <span className="overview-rating-average">4.3</span>
                </div>
                <span className="product-reviewer-reviews black-link">5248 Avis</span>
                <span className="product-reviewer-sold">15584 Commandes</span>
              </div>

              <div className="split-line-thin"></div>

              <div className="variations product-price">
                <div className="product-price-current">
                  <span className="product-price-value">{/*dataItems.price*/}29.00 TND</span>
                </div>
                <div className="product-price-original">
                  <div className="product-price-del">
                    <span className="product-price-value">60.00 TND</span>
                  </div>
                  <span className="product-price-mark">-50%</span>
                </div>
              </div>

              <div className="variations product-coupon"></div>

              <div className='variations product-option'>
                {/* *************** Product Colors ************** */}
                {/* <div className="colors">
                    {
                    dataItems.colors.map((color, colorIndex) =>(
                        <button style={{background: color}} key={colorIndex}></button>
                    ))
                    }
                </div> */}
                <div className="option-block">
                  <div className='variations color'>
                    <div className="option-title">
                      <span>Couleur: </span>
                    </div>
                    <label for="color1" className='product-color'>
                      <input type="radio" name="color" id="color1" checked />
                      <span></span>
                    </label>
                    <label for="color2" className='product-color'>
                      <input type="radio" name="color" id="color2" />
                      <span></span>
                    </label>
                    <label for="color3" className='product-color'>
                      <input type="radio" name="color" id="color3" />
                      <span></span>
                    </label>
                    <label for="color4" className='product-color'>
                      <input type="radio" name="color" id="color4" />
                      <span></span>
                    </label>
                  </div>
                </div>

                <div className="option-block">
                  <div className="option-title">
                    <span>Taille: </span>
                  </div>
                  <ul className="option-block-list">
                    <li className="option-block-item selected">
                      <div className="option-block-text">
                        <span>S</span>
                      </div>
                    </li>
                    <li className="option-block-item">
                      <div className="option-block-text">
                        <span>M</span>
                      </div>
                    </li>
                    <li className="option-block-item">
                      <div className="option-block-text">
                        <span>L</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className='variations product-quantity'>
                <div className="option-title">
                  <span>Quantity: </span>
                </div>
                <div className="quantity_selector">
                  <span
                    className={
                      quantity > 1 ? "minus" : "minus disabled"
                    }
                    onClick={() => onRemoveClicked()}
                  >
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  </span>
                  <span id="quantity_value">{quantity}</span>
                  <span className="plus" onClick={() => onAddClicked()} >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              
              {/* <div className="product-shipping">
                <div className="product-shipping-price">
                  <span className="bold">Expédition :  7.00 TND</span>
                </div>
                <span className="product-shipping-date">
                  <span className="product-shipping-delivery">Temps estimé pour la livraison: <span>7-15</span> jours </span>
                  <span className="shipping-tips-icon-wrap" >
                    
                  </span>
                </span>
              </div> */}
              <div className="variations product-warranty"></div>
              
              <div className="variations product-action">
                  <div className="red_button product-add_to_cart_button" /*onClick={}*/>
                    <a href="#">add to cart</a>
                  </div>

                  <div className="product_favorite">
                    <i className='far fa-heart'></i>
                  </div>
              </div>  
            </div>
            <div className='user-location-detail'>
              <div className="user-location-title">
                titletitle
              </div>
            </div>
          </div>
        </div>

        <div className='product-extend'>
          <div className='detail-container flex'>
            <div className="product-detail">
              <div className="detail-extend-tab">
                <div className="detail-tab-bar">
                  <ul className="tab-lists avoid-user-select">
                    <li className="tab-item active" onClick={(e) => openTab(e, 'presentation')}>
                      <div className="tab-inner">
                        <span className="tab-inner-text" >PRÉSENTATION</span>
                      </div>
                    </li>
                    <li className="tab-item" onClick={(e) => openTab(e, 'avis')}>
                      <div className="tab-inner">
                        <span className="tab-inner-text">AVIS <span className="fdbc-num">&nbsp;(1754)&lrm;</span></span>
                      </div>
                    </li>
                    <li className="tab-item" onClick={(e) => openTab(e, 'details')}>
                      <div className="tab-inner">
                        <span className="tab-inner-text">DÉTAILS</span>
                      </div>
                    </li>
                    <li className="tab-item report-item" style={{ display: "block" }}>
                      <div className="tab-inner report-item">
                        <span className="tab-inner-text">
                          <a href="" target="_blank">Signaler cet article</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="detail-tab-content">
                  <div className="tab-content-container" id="presentation" style={{ display: "block" }}>
                    <div className="product-overview">
                      <div className='long-description'>
                        <div className='long-describe'>
                          <h4>Description :</h4>
                          <p>
                            sèche linge effet rotin de Sofpince Capacité de 20m qui
                            vous offre un grand espace de séchage.
                            Dimensions ouvert ( L x P x H) : 180 x 52.5 x 109 cm ,
                            Dimensions fermé ( L x P x H ) : 55x10x126cm ,
                            Pratique à utiliser et a déplacer facilement même avec
                            du linge dessus . Matière : plastique , rotin , ainsi
                            Idéal pour l'extérieur . L'étendoir comporte 3 étendoirs
                            dont un d'une plus grande capacité pour les plus grand
                            vêtement .
                            Il offre une grande capacité de séchage tout en entrant
                            dans un minimum d'espace .
                            Le meuble est modulable selon les envies et les vêtements
                            à sécher . Une fois tout le linge sec ,
                            il se range facilement et il est peu encombrant .
                            Sa structure est légère en pvc mais conserve un bon
                            maintien même plié . La notice d'utilisation est livré
                            avec l'accessoire .
                          </p>
                          <img src="https://ae01.alicdn.com/kf/H84fc1a30e14e4c0c85941b9a63254b0bf/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp" style={{width: "100%", verticalAlign: "middle"}}/>
                          <p>
                            sèche linge effet rotin de Sofpince Capacité de 20m qui
                            vous offre un grand espace de séchage.
                            Dimensions ouvert ( L x P x H) : 180 x 52.5 x 109 cm ,
                            Dimensions fermé ( L x P x H ) : 55x10x126cm ,
                            Pratique à utiliser et a déplacer facilement même avec
                            du linge dessus . Matière : plastique , rotin , ainsi
                            Idéal pour l'extérieur . L'étendoir comporte 3 étendoirs
                            dont un d'une plus grande capacité pour les plus grand
                            vêtement .
                            Il offre une grande capacité de séchage tout en entrant
                            dans un minimum d'espace .
                            Le meuble est modulable selon les envies et les vêtements
                            à sécher . Une fois tout le linge sec ,
                            il se range facilement et il est peu encombrant .
                            Sa structure est légère en pvc mais conserve un bon
                            maintien même plié . La notice d'utilisation est livré
                            avec l'accessoire .
                          </p>
                          <img src="https://ae01.alicdn.com/kf/H76429d21abd542c8929bd1bc54f77eb98/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp" style={{width: "100%", verticalAlign: "middle"}}/>
                          <p>
                            sèche linge effet rotin de Sofpince Capacité de 20m qui
                            vous offre un grand espace de séchage.
                            Dimensions ouvert ( L x P x H) : 180 x 52.5 x 109 cm ,
                            Dimensions fermé ( L x P x H ) : 55x10x126cm ,
                            Pratique à utiliser et a déplacer facilement même avec
                            du linge dessus . Matière : plastique , rotin , ainsi
                            Idéal pour l'extérieur . L'étendoir comporte 3 étendoirs
                            dont un d'une plus grande capacité pour les plus grand
                            vêtement .
                            Il offre une grande capacité de séchage tout en entrant
                            dans un minimum d'espace .
                            Le meuble est modulable selon les envies et les vêtements
                            à sécher . Une fois tout le linge sec ,
                            il se range facilement et il est peu encombrant .
                            Sa structure est légère en pvc mais conserve un bon
                            maintien même plié . La notice d'utilisation est livré
                            avec l'accessoire .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content-container" id="avis" style={{ display: "none" }}>
                    <div className="product-evaluation" id="product-evaluation">
                      <div className="evaluation-title">Avis clients (1754)</div>
                      <div className='evaluation-content util-clearfix'>
                        <ul className='rate-list'>
                          <li>
                            <span className='rate-title'>5 Stars</span>
                            <span className='stars'>
                              <Stack spacing={1}>
                                <Rating name="size-small" defaultValue={5} size="small" />
                              </Stack>
                            </span>
                            <span className='rate-count'>501</span>
                          </li>
                          <li>
                            <span className='rate-title'>4 Stars</span>
                            <span className='stars'>
                              <Stack spacing={1}>
                                <Rating name="size-small" defaultValue={4} size="small" />
                              </Stack>
                            </span>
                            <span className='rate-count'>61</span>
                          </li>
                          <li>
                            <span className='rate-title'>3 Stars</span>
                            <span className='stars'>
                              <Stack spacing={1}>
                                <Rating name="size-small" defaultValue={3} size="small" />
                              </Stack>
                            </span>
                            <span className='rate-count'>151</span>
                          </li>
                          <li>
                            <span className='rate-title'>2 Stars</span>
                            <span className='stars'>
                              <Stack spacing={1}>
                                <Rating name="size-small" defaultValue={2} size="small" />
                              </Stack>
                            </span>
                            <span className='rate-count'>11</span>
                          </li>
                          <li>
                            <span className='rate-title'>1 Star</span>
                            <span className='stars'>
                              <Stack spacing={1}>
                                <Rating name="size-small" defaultValue={1} size="small" />
                              </Stack>
                            </span>
                            <span className='rate-count'>121</span>
                          </li>
                        </ul>
                        <div className='rate-score'>
                          <span className="rate-score-number"><b>4.7</b><span> / 5</span></span>
                          <span className='rate-score-value'>
                            <Stack spacing={1}>
                              <Rating name="size-small" defaultValue={4} size="small" />
                            </Stack>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content-container" id="details" style={{ display: "none" }}>
                    <div className="product-specs">
                      <ul className="product-specs-list util-clearfix">
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Nom de marque:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="Reup">Marque BMW </span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Capacité:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="300ml">300ml</span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Feature 27:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="h2o humidifier">h2o humidifier</span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Feature 28:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="car humidifier air purifier">car humidifier air purifier</span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Nom de marque:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="Reup">Marque BMW </span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Capacité:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="300ml">300ml</span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Feature 27:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="h2o humidifier">h2o humidifier</span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Feature 28:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="car humidifier air purifier">car humidifier air purifier</span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Nom de marque:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="Reup">Marque BMW </span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Capacité:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="300ml">300ml</span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Feature 27:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="h2o humidifier">h2o humidifier</span>
                        </li>
                        <li className="product-prop line-limit-length">
                          <span className="property-title">Feature 28:&nbsp;</span>
                          <span className="property-desc line-limit-length" title="car humidifier air purifier">car humidifier air purifier</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rcmds-v-products'>
                <span>Recommandations du vendeur</span>
                <div className='items'>
                  
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rcmds-v-products'>
                <span>Autre produits</span>
                <div className='items'>
                  
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="itemshadow" style={{flex: "1 0 190px", margin: "5px", height: "300px", backgroundColor: "white"}}>
                    <div>
                      <img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/8564/1.jpg?6642" style={{height: "190px", width: "100%", borderRadius: "8px"}}/>
                        <p className="elementname">XIAOMI Mi Smart Brand 5 </p>
                        <div>
                          <p style={{fontSize: "10px", textAlign: "left", fontWeight: "500", margin: "0px 0px 0px 10px"}}>TND <span style={{fontSize: "18px", fontWeight: "700"}}>98.69</span></p>
                          <div style={{textAlign: "left"}}>
                            <span style={{margin: "0px", padding: "0px 0px 0px 10px", textDecorationLine: "line-through", textAlign: "left", fontSize: "12px", color: "rgb(117, 117, 122)"}}>TND 139.00</span>
                            <span style={{margin: "0px", textAlign: "left", opacity: "0.6", fontSize: "12px", color: "rgb(117, 117, 122)"}}> /  </span>
                            <span style={{margin: "0px", textAlign: "left", fontSize: "14px", color: "rgb(255, 101, 9)"}}> - 29%  </span>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='product-extend-side-container'>
              <div className='side-container'>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
              </div>
              <div className='side-container'>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
              </div>
              <div className='side-container'>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
                <span>side container</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

