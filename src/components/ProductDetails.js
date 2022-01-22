// import img1 from '../images/1.jpg';
// import img2 from '../images/2.jpg';
// import img3 from '../images/3.jpg';
// import img4 from '../images/4.jpg';
import React, { useState, useEffect } from 'react';

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
                "https://ae01.alicdn.com/kf/H6a85fcfda1ef4a5fa59314424ba43844O/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
                "https://ae01.alicdn.com/kf/H84fc1a30e14e4c0c85941b9a63254b0bf/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
                "https://ae01.alicdn.com/kf/He2642254c57c4961ba2ac7b49a28eb3cD/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp",
                "https://ae01.alicdn.com/kf/H76429d21abd542c8929bd1bc54f77eb98/Montre-num-rique-intelligente-de-sport-pour-hommes-montre-bracelet-lectronique-led-Bluetooth-fitness-femmes-enfants.jpg_Q90.jpg_.webp"
                ],
      }
    );
    const [index, setIndex] = useState(0);
    const myRef = React.createRef();
  
    const handleTab = index =>{
      setIndex(index);
      const images = myRef.current.children;
      for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
      };
      images[index].className = "active";
    };
    
    useEffect(() => {
      myRef.current.children[index].className = "active";
    });

    return(
      <div className="app">
        {
            <div className="details" key={dataItems.id}>
              <div className="box-product-image">
                <div className="big-img">
                  <img src={dataItems.src[index]} alt=""/>
                </div>
                <div className="thumb" ref={myRef}>
                    {
                    dataItems.src.map((img, index) =>(
                        <img src={img} alt="" key={index} 
                        onClick={() => handleTab(index)}
                        />
                    ))
                    }
                </div>
              </div>

              <div className="box-product-content">
                <div className="product-title"><h1 className="product-title-text">{ dataItems.title }</h1></div>

                {/* star rate */}
                <div className="product-reviewer"
                  data-spm-anchor-id="a2g0o.detail.1000016.i22.5cc9377aEMX9Ew">
                  <div className="overview-rating"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <div class="next-rating next-rating-large next-rating-grade-high"
                      tabindex="0"
                      role="group"
                      aria-label="">
                      <div className="next-rating-base next-rating-base-disabled">
                        <div className="next-rating-underlay" aria-hidden="true">
                          <span className="next-rating-icon">
                            <i className="next-icon next-icon-favorites-filling next-medium"/>
                          </span>
                          <span className="next-rating-icon">
                            <i className="next-icon next-icon-favorites-filling next-medium" />
                          </span>
                          <span className="next-rating-icon">
                            <i className="next-icon next-icon-favorites-filling next-medium" />
                          </span>
                          <span className="next-rating-icon">
                            <i className="next-icon next-icon-favorites-filling next-medium"></i>
                          </span>
                          <span className="next-rating-icon">
                            <i className="next-icon next-icon-favorites-filling next-medium"></i>
                          </span></div><div className="next-rating-overlay" style={{width: "83px"}}>
                          <form action="#">
                            <label className="next-rating-icon">
                              <i className="next-icon next-icon-favorites-filling next-medium"></i>
                            </label>
                            <label className="next-rating-icon">
                              <i className="next-icon next-icon-favorites-filling next-medium"/>
                            </label>
                            <label className="next-rating-icon">
                              <i className="next-icon next-icon-favorites-filling next-medium"
                                data-spm-anchor-id="a2g0o.detail.1000016.i21.5cc9377aEMX9Ew"></i>
                            </label>
                            <label className="next-rating-icon">
                              <i className="next-icon next-icon-favorites-filling next-medium" data-spm-anchor-id="a2g0o.detail.1000016.i4.5cc9377aEMX9Ew"></i>
                            </label>
                            <label className="next-rating-icon">
                              <i className="next-icon next-icon-favorites-filling next-medium"></i>
                            </label>
                          </form>
                        </div>
                      </div>
                    </div>
                    <span className="overview-rating-average">4.4</span>
                    <i className="next-icon next-icon-arrow-down next-xxs" style={{ marginLeft: "0px;"}}/>
                  </div>
                  <span className="product-reviewer-reviews black-link">5248 Avis</span>
                  <span className="product-reviewer-sold">15584 Commandes</span>
                </div>

                <div class="split-line-thin"></div>

                <div className="product-price">
                  <div class="product-price-current">
                    <span className="product-price-value">€ {dataItems.price}</span>
                  </div>
                  <div className="product-price-original">
                    <div className="product-price-del">
                      <span className="product-price-value">€ 6,12</span>
                    </div>
                    <span className="product-price-mark">-28%</span>
                  </div>
                </div>

                <div className="colors">
                    {
                    dataItems.colors.map((color, index) =>(
                        <button style={{background: color}} key={index}></button>
                    ))
                    }
                </div>

                {/* <p>{item.description}</p> */}
                {/* <p>{item.content}</p> */}

                

                <div className="product-quantity clearfix">
                  <div className="product-quantity-title">Quantité:</div>
                </div>



                <div className="product-action">
                  <span className="buy-now-wrap" aria-haspopup="true" aria-expanded="false">
                    <button title="" type="button" className="next-btn next-large next-btn-primary">
                      Acheter maintenant
                    </button>
                  </span>
                  <span class="addcart-wrap" aria-haspopup="true" aria-expanded="false">
                    <button title="" type="button" class="next-btn next-large next-btn-primary" >
                      Ajouter au panier
                    </button>
                  </span>
                  <span className="add-wishlist-wrap">
                    <div className="add-wishlist">
                      <i className="next-icon next-icon-favourite next-large" />
                      <span className="add-wishlist-num">397</span>
                    </div>
                  </span>
                </div>

              </div>
            </div>
          
        }
      </div>
    );
};

