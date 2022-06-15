import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import {Link} from 'react-router-dom'
// import { components } from "react-select";
// import { default as ReactSelect } from "react-select";
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

export const Add = () => {
    
    return (
        <div className='appContainer'>
            <main className='add-edit'>
                <div className='add-edit-header'>
                    <h1 className='page-title'>
                        <span>Ajouter un produit</span>
                    </h1>
                </div>
                <div className='add-edit-conainer'>
                    <div className='add-edit-nav'>
                        <ul class="add-edit-nav-body add-edit-nav-sticky" id="add-edit-nav-tab-container" style={{width: "195px", position: "fixed", zIndex: "1038", marginTop: "0px", top: "100px"}}>
                            <li class="add-edit-nav-group" ng-repeat="group in $ctrl.sectionGroups">
                                <h5 class="add-edit-nav-group-title">Informations sur le produit</h5>
                                <ul class="add-edit-nav-group-sections">
                                    <li class="add-edit-nav-section">
                                        <a class="add-edit-nav-section-title" href="#add-edit-details">
                                            <span>Informations de base</span>
                                        </a>
                                    </li>
                                    <li class="add-edit-nav-section">
                                        <a class="add-edit-nav-section-title active" href="#add-edit-description">
                                            <span>Description</span>
                                        </a>
                                    </li>
                                    <li class="add-edit-nav-section">
                                        <a class="add-edit-nav-section-title" href="#add-edit-images">
                                            <span>Images et vidéos</span>
                                        </a>
                                    </li>
                                    <li class="add-edit-nav-section">
                                        <a class="add-edit-nav-section-title" href="#add-edit-identifiers">
                                            <span>Identifiants de produits</span>
                                        </a>
                                    </li>
                                    <li class="add-edit-nav-section">
                                        <a class="add-edit-nav-section-title" href="#add-edit-pricing">
                                            <span>Tarification</span>
                                        </a>
                                    </li>
                                    <li class="add-edit-nav-section">
                                        <a class="add-edit-nav-section-title" href="#add-edit-inventory">
                                            <span>Stock</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div style={{ height: "2400px" }}></div>
                    </div>
                    <div className='add-edit-contents'>
                        <form>
                            {/* ****************************************************** */}
                            {/* ************ Informations sur le produit ************* */}
                            <div className="group-title">
                                <h2>Informations sur le produit</h2>
                                <div className="group-title-description">Informations permettant de définir un produit.</div>
                            </div>
                            <div className="group-sections">
                                <div className='rendered-section'>
                                    <div class="panel" id="add-edit-basic-info">
                                        <div class="panel-header">
                                            <h2 class="panel-title">
                                                <span>Informations de base</span>
                                            </h2>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-field">
                                                <div class="form-label">&nbsp;</div>
                                                <input class="form-checkbox" id="productInput-visible_in_store" name="productInput-visible_in_store" type="checkbox" />
                                                <label for="productInput-visible_in_store" class="form-label" id="productLabel-visible_in_store">
                                                    <span>Visible in store</span>
                                                </label>
                                            </div>
                                            <div class="form-field form-field--empty"></div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-field">
                                                <label class="form-label" id="productLabel-name" for="productInput-name">
                                                    <span>Product Name</span>
                                                    <span class="form-small-required">&nbsp;*&nbsp;</span>
                                                </label>
                                                <div class="form-input-container">
                                                    <input class="form-input" id="productInput-name" name="productInput-name" placeholder="Sample Product Name" type="text" required="" />
                                                </div>
                                            </div>
                                            <div class="form-field">
                                                <label class="form-label" id="productLabel-sku" for="productInput-sku"><span>SKU</span></label>
                                                <div class="form-input-container">
                                                    <input class="form-input" id="productInput-sku" name="productInput-sku" type="text" placeholder="THX-1138" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-field">
                                                <label class="form-label" id="productLabel-price" for="productInput-price">
                                                    <span>Default Price</span>
                                                    <span class="form-small-required">&nbsp;*&nbsp;</span>
                                                </label>
                                                <div class="form-input form-input-flex form-input-prefix">
                                                    <span class="form-label">TND</span>
                                                    <input class="form-input-no-border"id="productInput-price" name="productInput-price" type="text" required="" placeholder="15"/>
                                                </div>
                                            </div>
                                            <div class="form-field">
                                                <label class="form-label" id="productLabel-stock" for="productInput-stock"><span>Stock</span></label>
                                                <div class="form-input-container">
                                                    <input class="form-input" id="productInput-stock" name="productInput-stock" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-field">
                                                <label class="form-label" id="productLabel-brand" for="productInput-brand"><span>Marque</span></label>
                                                <div class="form-input-container">
                                                    <input class="form-input" id="productInput-brand" name="productInput-brand" type="text" />
                                                </div>
                                            </div>
                                            <div class="form-field">
                                                <label class="form-label" id="productLabel-weight" for="productInput-weight">
                                                    <span>Poids(KGS)</span>
                                                    <span class="form-small-required">&nbsp;*&nbsp;</span>
                                                </label>
                                                <div class="form-input-container">
                                                    <input class="form-input" id="productInput-weight" name="productInput-weight" type="text" required="" placeholder="0" />
                                                    <span class="form-label--inset">
                                                        <span>KGS</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='rendered-section'>
                                    <div class="panel" id="add-edit-description">
                                        <div class="panel-body">
                                            <div class="panel-header">
                                                <h2 class="panel-title">
                                                    <span>Description</span>
                                                </h2>
                                            </div>
                                            <div class="form-row">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='rendered-section'>
                                    <div class="panel" id="add-edit-images">
                                        <div class="panel-body">
                                            <div class="panel-header">
                                                <h2 class="panel-title">
                                                    <span>Images</span>
                                                </h2>
                                            </div>
                                            <div class="form-row">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='rendered-section'>
                                    <div class="panel addEditPricing" id="add-edit-pricing">
                                        <div class="panel-body">
                                            <div class="panel-header">
                                                <h2 class="panel-title"><span>Tarification</span></h2>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-field">
                                                    <label class="form-label" id="productLabel-defaultPrice" for="productInput-defaultPrice">
                                                        <span>Prix par défaut</span>
                                                        <span class="form-small-required">&nbsp;*&nbsp;</span>
                                                        <span>(hors taxes)</span>
                                                    </label>
                                                    <div class="form-input form-input-flex form-input-prefix">
                                                        <span class="form-label">TND</span>
                                                        <input class="form-input-no-border" id="productInput-defaultPrice" name="productInput-defaultPrice" type="text" required="" placeholder="0"/>
                                                    </div>
                                                </div>
                                                <div class="form-field form-field--empty"></div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-field">
                                                    <label class="form-label" id="productLabel-remise_type" for="productInput-remise_type">
                                                        <span>Type de remise</span>
                                                    </label>
                                                    <div class="form-input-container">
                                                        <select id="productInput-weight" name="productInput-weight" class="form-input">
                                                            <option value="-1">Choose remise type...</option>
                                                            <option value="1">Percentage %</option>
                                                            <option value="2">TND</option>
                                                        </select>
                                                        <span class="form-label--inset">
                                                        <span>🔻</span>
                                                    </span>
                                                </div>
                                                </div>
                                                <div class="form-field">
                                                    <label class="form-label" id="productLabel-remise_quantity" for="productInput-remise_quantity">
                                                        <span>Remise quantity</span>
                                                    </label>
                                                    <div class="form-input form-input-flex form-input-prefix">
                                                        <span class="form-label">TND</span>
                                                        <input class="form-input-no-border" id="productInput-remise_quantity" name="productInput-remise_quantity" type="text" placeholder="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ****************************************************** */}
                            {/* ***************** Options du produit ***************** */}
                            <div class="group-title">
                                <h2>Options du produit</h2>
                                <div class="group-title-description">Créez des variantes et personnalisations de produits.</div>
                            </div>
                            <div className="group-sections">
                                <div className='rendered-section'>
                                    
                                </div>
                            </div>
                            {/* ****************************************************** */}
                            {/* ***************** Distribution ***************** */}
                            <div class="group-title">
                                <h2>Distribution</h2>
                                <div class="group-title-description">Configurez les informations relatives à l'expédition et au stock de ce produit.</div>
                            </div>
                            <div className="group-sections">
                                <div className='rendered-section'>
                                    <div class="panel" id="add-edit-dimensions">
                                        <div class="panel-body">
                                            <div class="panel-header">
                                                <h2 class="panel-title"><span>Dimensions &amp; Weight</span></h2>
                                                <p class="panel-title-description"><span>Renseignez les dimensions et le poids de ce produit afin d'estimer les frais de port. Ces dimensions sont prises en compte au niveau du conteneur d'envoi du produit. Elles sont destinées au calcul des frais de port, mais ne seront pas affichées dans la vitrine de votre boutique.</span></p>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-field">
                                                    <label class="form-label" id="productLabel-weight" for="productInput-shippingWeight">
                                                        <span>Poids</span>
                                                        <span class="measurement">(KGS)</span>
                                                        <span class="form-small-required">&nbsp;*&nbsp;</span>
                                                    </label>
                                                    <div class="form-input-container">
                                                        <input id="productInput-shippingWeight" name="productInput-shippingWeight" class="form-input ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" type="text" required="" placeholder="0"/>
                                                    </div>
                                                </div>

                                                <div class="form-field">
                                                    <label class="form-label" id="productLabel-width" for="productInput-width">
                                                        <span>Largeur</span>
                                                        <span class="measurement">(Centimeters)</span>
                                                    </label>
                                                    <div class="form-input-container">
                                                        <input class="form-input" id="productInput-width" name="productInput-width" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-field">
                                                    <label class="form-label" id="productLabel-height" for="productInput-height">
                                                        <span>Hauteur</span>
                                                        <span class="measurement">(Centimeters)</span>
                                                    </label>
                                                    <div class="form-input-container">
                                                        <input class="form-input" id="productInput-height" name="productInput-height" type="text"/>
                                                    </div>
                                                </div>

                                                <div class="form-field">
                                                    <label class="form-label" id="productLabel-depth" for="productInput-depth">
                                                        <span>Profondeur</span>
                                                        <span class="measurement">(Centimeters)</span>
                                                    </label>
                                                    <input class="form-input" id="productInput-depth" name="productInput-depth" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='rendered-section'>
                                    <div class="panel" id="add-edit-shipping">
                                        <div class="panel-body">
                                            <div class="panel-header">
                                                <h2 class="panel-title" translate=""><span>Détails de la livraison</span></h2>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-field">
                                                    <label class="form-label" for="productInput-fixed_cost_shipping_price" id="productLabel-fixed_cost_shipping_price">
                                                        <span>Frais de livraison fixes</span>
                                                    </label>

                                                    <div class="form-input form-input-flex form-input-prefix">
                                                        <span class="form-label" id="productLabel-fixed_cost_shipping_price">TND</span>
                                                        <input class="form-input-no-border" id="productInput-fixed_cost_shipping_price" name="productInput-fixed_cost_shipping_price" placeholder="0" />
                                                    </div>
                                                </div>

                                                <div class="form-field">
                                                    <div class="form-label">&nbsp;</div>
                                                    <input class="form-checkbox" id="productInput-is_free_shipping" name="productInput-is_free_shipping" type="checkbox" />
                                                    <label for="productInput-is_free_shipping" class="form-label" id="productLabel-is_free_shipping">
                                                        <span>Livraison gratuite</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='form-row'>
                                                <div class="form-field">
                                                    <label class="form-label" id="productLabel-delais_livraison" for="productInput-delais_livraison">
                                                        <span>Delais de livraison</span>
                                                    </label>
                                                    <div class="form-input-container">
                                                        <input class="form-input" id="productInput-delais_livraison" name="productInput-delais_livraison" type="text" />
                                                    </div>
                                                </div>
                                                <div class="form-field form-field--empty"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ****************************************************** */}
                            {/* *********************** footer *********************** */}
                            <div class="add-edit-footer">
                                <div class="field-group save-group">
                                    <button class="button button--no-border" type="button">Cancel</button>
                                    <div class="save-button">
                                        <button class="button button--primary main-button" type="button">Save</button>
                                    </div>
                                </div>
                            </div>
                            {/* ****************************************************** */}
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
