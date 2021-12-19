import React from 'react'
// import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from 'axios';

export const AddProduct = () => {
    const history = useHistory();

    const [newTitle, setNewTitle] = useState("");
    const [newSku, setNewSku] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [newPricePromotion, setNewPricePromotion] = useState(0);
    const [newModel, setNewModel] = useState("");
    const [newQuantity, setNewQuantity] = useState(0);
    const [newDescription, setNewDescription] = useState("");
    const [newWeight, setNewWeight] = useState(0);
    const [newWeightUnit, setNewWeightUnit] = useState("kg");
    const [newSize, setNewSize] = useState([]);
    const [newColors, setNewcolors] = useState([]);
    const [newSrc_images, setNewSrc_images] = useState([]);
    const [newAvailable, setNewAvailable] = useState(true);
    const [newVisible, setNewVisible] = useState(false);

    const handleImageChange = (e) => {
        setNewSrc_images([]);
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setNewSrc_images((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            );
        };
    };

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <img className="p-2" src={photo} alt="" key={photo} style={{ width: "20%", height: "100px" }} />
        });
    };

    const uploadToServer = async (e) => {
        e.preventDefault();
        var files = e.target['src_images'].files;
        if (files.length > 0) {
            const formData = new FormData();
            const obj = {
                'id_categorie': 22,
                'id_store': 22,
                'title': newTitle,
                'sku': newSku,
                'price': newPrice,
                'price_promotion': newPricePromotion,
                'model': newModel,
                'quantity': newQuantity,
                'description': newDescription,
                'weight': newWeight,
                'weight_unit': newWeightUnit,
                'size': JSON.stringify(newSize),
                'colors': JSON.stringify(newColors),
                'available': newAvailable,
                'visible': newVisible,
            };

            formData.append('values', JSON.stringify(obj));
            
            for (let i = 0; i < files.length; i++) {
                formData.append('src_images', files[i]);
            };
            await axios({
                url: 'http://localhost:8090/product/create_product',
                method: 'POST',
                data: formData,
            });
            history.push("/");
        };
    };
    
    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>
                        Add Product
                        {/* <Link to="#" className="btn btn-primary btn-sm float-end">View Product</Link> */}
                    </h4>
                </div>
                <div className="card-body">

                    <form
                        encType="multipart/form-data"
                        onSubmit={async (e) => {
                            await uploadToServer(e);
                            // await onSubmit(newTitle, newSku, newPrice, newPricePromotion, newModel, newQuantity, newDescription, newWeight, newWeightUnit, newSize, newColors, newVisible);
                        }}>
                        
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">Home</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">SEO tags</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="otherdetails-tab" data-bs-toggle="tab" data-bs-target="#otherdetails" type="button" role="tab" aria-controls="otherdetails" aria-selected="true">Other Details</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                
                                <div className="form-group mb-3">
                                    <label>Select Category <span style={{color:"red"}}>*</span></label>
                                    <select name="category_id" className="form-control">
                                        <option>Select Category</option>
                                        <option>Homme</option>
                                        <option>Femme</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Title <span style={{color:"red"}}>*</span></label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        onChange={(event) => {
                                            setNewTitle(event.target.value);
                                        }}/>
                                    </div>
                                <div className="form-group mb-3">
                                <label>SKU <span style={{color:"red"}}>*</span></label>
                                <input type="text"
                                    name="SKU"
                                    className="form-control"
                                    onChange={(event) => {
                                        setNewSku(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Price <span style={{color:"red"}}>*</span></label>
                                    <input type="text"
                                        name="Price"
                                        className="form-control"
                                        onChange={(event) => {
                                            setNewPrice(event.target.value);
                                            }}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Price Promotion</label>
                                    <input type="number"
                                            name="PricePromotion"
                                            className="form-control"
                                            onChange={(event) => {
                                            setNewPricePromotion(event.target.value);
                                            }}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                <label>Model <span style={{color:"red"}}>*</span></label>
                                <input type="text"
                                        name="model"
                                        className="form-control"
                                        onChange={(event) => {
                                        setNewModel(event.target.value);
                                        }}
                                />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Quantity <span style={{color:"red"}}>*</span></label>
                                        <input type="number"
                                            name="quantity"
                                            className="form-control"
                                            onChange={(event) => {
                                                setNewQuantity(event.target.value);
                                            }}
                                        />
                                </div>  
                                <div className="form-group mb-3">
                                    <label>Description <span style={{color:"red"}}>*</span></label>
                                        <textarea type="text"
                                            name="description"
                                            className="form-control"
                                            onChange={(event) => {
                                                setNewDescription(event.target.value);
                                            }}
                                        />
                                </div>

                            </div>
                            <div className="tab-pane card-body border fade" id="seotags" role="tabpanel" aria-labelledby="seotags-tab">
                                <div className="form-group mb-3">
                                <label>weight</label>
                                <input type="text"
                                        name="weight"
                                        className="form-control"
                                        onChange={(event) => {
                                        setNewWeight(event.target.value);
                                        }}
                                />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Weight Unit</label>
                                    <select name="weightUnit" className="form-control">
                                        <option>KiloGramme</option>
                                        <option>Litre</option>
                                        <option>oz</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Size</label>
                                    <select name="size" className="form-control">
                                        <option>Select Size</option>
                                        <option>S M L XL XXL</option>
                                    </select>
                                </div>
                            </div>
                            <div className="tab-pane card-body border fade" id="otherdetails" role="tabpanel" aria-labelledby="otherdetails-tab">
                                
                            <div className="row">
                                <div className="form-group mb-3">
                                    <label>Colors</label>
                                        <input
                                            type="color"
                                            name="colors"
                                            className="form-control"
                                        />
                                </div>
                                <div className="form-group mb-3">
                                <label>Image <span style={{color:"red"}}>*</span></label>
                                    <input
                                        type="file"
                                        name="src_images"
                                        id="src_images"
                                        className="form-control"
                                        onChange={handleImageChange}
                                        multiple
                                    />
                                </div>
                                <div className="result  form-group mb-3">{ renderPhotos(newSrc_images) }</div>
                                <div className="col md-4 form-group mb-3">
                                    <label>Show Product (checked=showed)</label>
                                        <input
                                            type="checkbox"
                                            name="visible"
                                            className="w-50 h-50"
                                            onChange={(event) => {
                                                setNewVisible(!newVisible);
                                            }}
                                        />
                                </div>
                            </div>

                        </div>
                    </div>

                        <input
                            type="submit"
                            value="Submit"
                            id="btn-submit"
                            className="btn btn-primary px-4 mt-2"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
