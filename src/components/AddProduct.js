import React from 'react'
import { useNavigate } from "react-router-dom";

// import {Link} from 'react-router-dom'
import { useState } from 'react';
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export const AddProduct = () => {
    let navigate = useNavigate();

    const [newIdCategorie, setNewIdCategorie] = useState(1);
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
    const [newThumbnail, setNewThumbnail] = useState([]);
    const [newVisible, setNewVisible] = useState(false);
    const [optionSelected, setOptionSelected] = useState(null);

    const colourOptions = [
        { value: "ocean", label: "Ocean" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "green", label: "Green" },
        { value: "forest", label: "Forest" },
        { value: "slate", label: "Slate" },
        { value: "silver", label: "Silver" }
    ];
    const categorieOptions = [
        {
            label: "Homme",
            value: 1,
        },
        {
            label: "Femme",
            value: 2,
        },
    ];
    const Option = (props) => {
        return (
            <div>
            <components.Option {...props}>
                <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
            </div>
        );
    };

    // set 
    const handleSelectColorChange = (e) => {
        setOptionSelected(e);
        setNewcolors(Array.isArray(e) ? e.map(x => x.value) : []);
    };

    // set thumbnail images to array so it will be displayed later
    const handleTumbnailChange = (e) => {
        setNewThumbnail([]);
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setNewThumbnail((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            );
        };
    };

    // set image files to array so it will be displayed later
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

    // display the images
    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <img className="p-2" src={photo} alt="" key={photo} style={{ width: "20%", height: "100px" }} />
        });
    };
    
    // send data to server
    const uploadToServer = async (e) => {
        e.preventDefault();
        var files = e.target['src_images'].files;
        var thumbnail = e.target['thumbnail'].files;
        if (files.length > 0) {
            const formData = new FormData();
            const obj = {
                'id_categorie': newIdCategorie,
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
                'available': true,
                'visible': newVisible,
            };
            formData.append('values', JSON.stringify(obj));
            formData.append('thumbnail', thumbnail[0]);
            for (let i = 0; i < files.length; i++) {
                formData.append('src_images', files[i]);
            };
            await axios({
                url: 'http://localhost:8090/product/create_product',
                method: 'POST',
                data: formData,
            });
            navigate("/");
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
                                
                                <div className="form-group mb-3 col-md-4">
                                    <label>Select Category <span style={{color:"red"}}>*</span></label>
                                    <select name="category_id" className="form-control">
                                        <option>Select Category</option>
                                        {categorieOptions.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group mb-3 col-md-4">
                                    <label>Title <span style={{color:"red"}}>*</span></label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        onChange={(event) => {
                                            setNewTitle(event.target.value);
                                        }}/>
                                    </div>
                                <div className="form-group mb-3 col-md-4">
                                <label>SKU <span style={{color:"red"}}>*</span></label>
                                <input type="text"
                                    name="SKU"
                                    className="form-control"
                                    onChange={(event) => {
                                        setNewSku(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group mb-3 col-md-4">
                                    <label>Price <span style={{color:"red"}}>*</span></label>
                                    <input type="text"
                                        name="Price"
                                        className="form-control"
                                        onChange={(event) => {
                                            setNewPrice(event.target.value);
                                            }}
                                    />
                                </div>
                                <div className="form-group mb-3 col-md-4">
                                    <label>Price Promotion</label>
                                    <input type="number"
                                            name="PricePromotion"
                                            className="form-control"
                                            onChange={(event) => {
                                            setNewPricePromotion(event.target.value);
                                            }}
                                    />
                                </div>
                                <div className="form-group mb-3 col-md-4">
                                <label>Model <span style={{color:"red"}}>*</span></label>
                                <input type="text"
                                        name="model"
                                        className="form-control"
                                        onChange={(event) => {
                                        setNewModel(event.target.value);
                                        }}
                                />
                                </div>
                                <div className="form-group mb-3 col-md-4">
                                    <label>Quantity <span style={{color:"red"}}>*</span></label>
                                        <input type="number"
                                            name="quantity"
                                            className="form-control"
                                            onChange={(event) => {
                                                setNewQuantity(event.target.value);
                                            }}
                                        />
                                </div>  
                                <div className="form-group mb-3 col-md-4">
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
                                <div className="form-group mb-3 col-md-4">
                                <label>weight</label>
                                <input type="text"
                                        name="weight"
                                        className="form-control"
                                        onChange={(event) => {
                                        setNewWeight(event.target.value);
                                        }}
                                />
                                </div>
                                <div className="form-group mb-3 col-md-4">
                                    <label>Weight Unit</label>
                                    <select name="weightUnit" className="form-control">
                                        <option>KiloGramme</option>
                                        <option>Litre</option>
                                        <option>oz</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3 col-md-4">
                                    <label>Size</label>
                                    <select name="size" className="form-control">
                                        <option>Select Size</option>
                                        <option>S M L XL XXL</option>
                                    </select>
                                </div>
                            </div>
                            <div className="tab-pane card-body border fade" id="otherdetails" role="tabpanel" aria-labelledby="otherdetails-tab">

                            <span
                                className="d-inline-block form-group mb-3 col-md-4"
                                data-toggle="popover"
                                data-trigger="focus"
                                data-content="Please select a colors"
                            >
                                <ReactSelect
                                options={colourOptions}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                components={{
                                    Option
                                }}
                                onChange={handleSelectColorChange}
                                allowSelectAll={true}
                                value={optionSelected}
                                />
                            </span>
                            
                            <div className="form-group mb-3 col-md-4">
                                <label>Thumbnail <span style={{color:"red"}}>*</span></label>
                                <input
                                    type="file"
                                    name="thumbnail"
                                    id="thumbnail"
                                    className="form-control"
                                    onChange={handleTumbnailChange}
                                />
                            </div>
                            <div className="result  form-group mb-3">{renderPhotos(newThumbnail)}</div>
                                
                            <div className="form-group mb-3 col-md-4">
                                <label>Images <span style={{color:"red"}}>*</span></label>
                                <input
                                    type="file"
                                    name="src_images"
                                    id="src_images"
                                    className="form-control"
                                    onChange={handleImageChange}
                                    multiple
                                />
                            </div>
                            <div className="result  form-group mb-3">{renderPhotos(newSrc_images)}</div>
                                
                            <div className="row form-group mb-3">
                                <div className="">
                                    <label>Show Product (checked=showed)&nbsp;&nbsp;&nbsp;</label>
                                        <input
                                            type="checkbox"
                                            name="visible"
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
