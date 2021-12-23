import React from 'react'
// import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from 'axios';
import { NutFill } from 'react-bootstrap-icons';

export const EditProduct = () => {
    const { id } = useParams();
    //const match = useRouteMatch();
    //const id = match.params.id;
    const history = useHistory();

    //variable and State function
    const [dataItems, setItems] = useState(
        {
            'id_categorie': '',
            'id_store': '',
            'title': '',
            'sku': '',
            'price': 0,
            'price_promotion': 0,
            'model': '',
            'quantity': 0,
            'description': '',
            'weight': 0,
            'weight_unit': 'kg',
            'size': [],
            'colors': [],
            'available': true,
            'visible': false,
        }
    )
    // const [newTitle, setNewTitle] = useState(dataItems.first);
    // const [newSku, setNewSku] = useState("");
    // const [newPrice, setNewPrice] = useState(0);
    // const [newPricePromotion, setNewPricePromotion] = useState(0);
    // const [newModel, setNewModel] = useState("");
    // const [newQuantity, setNewQuantity] = useState(0);
    // const [newDescription, setNewDescription] = useState("");
    // const [newWeight, setNewWeight] = useState(0);
    // const [newWeightUnit, setNewWeightUnit] = useState("kg");
    // const [newSize, setNewSize] = useState([]);
    // const [newColors, setNewcolors] = useState([]);
    const [newSrc_images, setNewSrc_images] = useState([]);
    const [newThumbnail, setNewThumbnail] = useState([]);
    // const [newAvailable, setNewAvailable] = useState(true);
    // const [newVisible, setNewVisible] = useState(false);

    // const dafaultImageInput = (listOfImage) => {
    //     setNewSrc_images(oldArray => [...oldArray, listOfImage]);
    //     // setNewSrc_images((prevImages) => prevImages.concat(image));
    //     listOfImage.forEach(image => { console.log(image) });
    // }

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

    //send data to server
    const uploadToServer = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const obj = {
            'id_categorie': 22,
            'id_store': 22,
            'title': dataItems.title,
            'sku': dataItems.sku,
            'price': dataItems.price,
            'price_promotion': dataItems.price_promotion,
            'model': dataItems.model,
            'quantity': dataItems.quantity,
            'description': dataItems.description,
            'weight': dataItems.weight,
            'weight_unit': dataItems.weight_unit,
            'size': JSON.stringify(dataItems.size),
            'colors': JSON.stringify(dataItems.colors),
            'available': dataItems.available,
            'visible': dataItems.visible,
        };
        var thumbnail = e.target['thumbnail'].files;
        formData.append('values', JSON.stringify(obj));
        formData.append('thumbnail', thumbnail[0]);
        //check if there is an images input
        var files = e.target['src_images'].files;
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                formData.append('src_images', files[i]);
            };
        }else {
            formData.append('src_images', null);
        };

        //send data to server
        await axios({
            url: `http://localhost:8090/product/update_product/${id}`,
            method: 'PUT',
            data: formData,
        });
        history.push("/");
    };

    

    // initializing data
    useEffect(() => {

        // get the product by Id
        const getTodos = (id) => {
            axios.get(`http://localhost:8090/product/get_single_product/${id}`).then((response) => {
                setItems(response.data);
            });
        };
        getTodos(id);

    }, []);


    if (dataItems == null) {
        return <h1 style={{ textAlign: 'center', marginTop: '200px' }}>404 Not Found!</h1>;
    } else {
        return (
            <div className="container-fluid px-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h4>
                            Edit Product
                        </h4>
                    </div>
                    <div className="card-body">

                        <form encType="multipart/form-data"
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
                                        <label>Select Category <span style={{ color: "red" }}>*</span></label>
                                        <select name="category_id" className="form-control">
                                            <option>Select Category</option>
                                            <option>Homme</option>
                                            <option>Femme</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3 col-md-4">
                                        <label>Title <span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            value={dataItems.title }
                                            onChange={(event) => {
                                                setItems({ "title": event.target.value });
                                            }} />
                                    </div>
                                    <div className="form-group mb-3 col-md-4">
                                        <label>SKU <span style={{ color: "red" }}>*</span></label>
                                        <input type="text"
                                            name="SKU"
                                            className="form-control"
                                            value={dataItems.sku}
                                            onChange={(event) => {
                                                setItems({ "sku": event.target.value });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-3 col-md-4">
                                        <label>Price <span style={{ color: "red" }}>*</span></label>
                                        <input type="text"
                                            name="Price"
                                            className="form-control"
                                            value={dataItems.price}
                                            onChange={(event) => {
                                                setItems({ "price": event.target.value });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-3 col-md-4">
                                        <label>Price Promotion</label>
                                        <input type="number"
                                            name="PricePromotion"
                                            className="form-control"
                                            value={dataItems.price_promotion}
                                            onChange={(event) => {
                                                setItems({ "price_promotion": event.target.value });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-3 col-md-4">
                                        <label>Model <span style={{ color: "red" }}>*</span></label>
                                        <input type="text"
                                            name="model"
                                            className="form-control"
                                            value={dataItems.model}
                                            onChange={(event) => {
                                                setItems({ "model": event.target.value });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-3 col-md-4">
                                        <label>Quantity <span style={{ color: "red" }}>*</span></label>
                                        <input type="number"
                                            name="quantity"
                                            className="form-control"
                                            value={dataItems.quantity}
                                            onChange={(event) => {
                                                setItems({ "quantity": event.target.value });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group mb-3 col-md-4">
                                        <label>Description <span style={{ color: "red" }}>*</span></label>
                                        <textarea type="text"
                                            name="description"
                                            className="form-control"
                                            value={dataItems.description}
                                            onChange={(event) => {
                                                setItems({ "description": event.target.value });
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
                                            value={dataItems.weight}
                                            onChange={(event) => {
                                                setItems({ "weight": event.target.value });
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
                                    <div className="form-group mb-3 col-md-4">
                                        <label>Colors</label>
                                        <input
                                            type="color"
                                            name="colors"
                                            className="form-control"
                                            // onChange={(event) => {
                                            //     setItems({ "colors": event.target.value });
                                            // }}
                                        />
                                    </div>
                                    
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
                                        <label>Images <span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type="file"
                                            name="src_images"
                                            id="src_images"
                                            className="form-control"
                                            //value={newSrc_images}
                                            onChange={handleImageChange}
                                            multiple
                                        />
                                    </div>
                                    <div className="result  form-group mb-3">{renderPhotos(newSrc_images)}</div>
                                    <div className="row">
                                        <div className="form-group mb-3">
                                            <label>Show Product (checked=showed)</label>
                                            <input
                                                type="checkbox"
                                                name="visible"
                                                className="w-50 h-50"
                                                //value="true"
                                                onChange={(event) => {
                                                    setItems({ "visible": !dataItems.visible });
                                                }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                             
                            <input type="submit" value="Submit" id="btn-submit" className="btn btn-primary px-4 mt-2" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    
}
