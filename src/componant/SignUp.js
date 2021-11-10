import React from "react";
import UseForm from "./UseForm";
import Validateinfo from "./Validateinfo";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./SignUp.css";

const SignUp = ({submitForm}) => {
    let navigate = useNavigate();
    const { handleChange, values, handleSubmit, errors } = UseForm(post, Validateinfo);
    function post(){
        console.log("hello");
        axios.post("http://localhost:8090/Users/SignUp_User", values).then((response) => {if (response.status===200){navigate("/")
        }});

    }
    return (
        
        <div className='form-content-right'>
                <form onSubmit={handleSubmit} className='form' noValidate>
                <h1> Crate your account by filling out the information below.
                </h1>
                <div className="gr">
                <div class="user-input-wrp">
                    <br/>
                    <input 
                    id="username"
                    type="text" 
                    name="username"
                    class="inputText" 
                    required
                    value={values.username}
                    onChange={handleChange} />
                     {errors.username && <p className="p">{errors.username}</p>}
                    <span class="floating-label">Name</span>
                   
                </div>
                <div class="user-input-wrp">
                    <br/>
                    <input 
                    id="lastname"
                    type="text" 
                    name="lastname"
                    className="inputText" 
                    required value={values.lastname}
                    onChange={handleChange}/>
                    <span class="floating-label" >LastName</span>
                    {errors.lastname && <p >{errors.lastname}</p>} 
                </div>
                <div class="user-input-wrp">
                    <br/>
                    <input 
                    id="email" 
                    type="text" 
                    name="email"
                    class="inputText"
                    required value={values.email}
                    onChange={handleChange}/>
                    <span class="floating-label" >Email</span>
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div class="user-input-wrp">
                    <br/>
                    <input 
                    id="password"
                    type="password" 
                    name="password"
                    class="inputText" 
                    value={values.password}
                    onChange={handleChange}
                    required/>
                    {errors.password && <p className="p">{errors.password}</p>}
                    <span class="floating-label" > password</span>
                        
                </div>
                <div class="user-input-wrp">
                    <br/>
                    <input id="password2" 
                    type="password" 
                    name="password2"
                    class="inputText" 
                    required 
                    value={values.password2}
                    onChange={handleChange} />
                    {errors.password2 && <p className="p">{errors.password2}</p>}
                    <span class="floating-label">confirmation password</span>
                </div>
                  <div class="user-input-wrp">
                    <br/>
                    <input 
                    id="phonenumber"
                    type="tel" 
                    name="phonenumber"
                    class="inputText" 
                    value={values.phonenumber}
                    onChange={handleChange} required/>
                    {errors.phonenumber && <p className="p">{errors.phonenumber}</p>}
                    <span class="floating-label">Your phone number</span>      
                </div>
                </div>
                <button className="form-input-btn" type="submit"
                        >
                    SignUp                
                </button>
                <span className="form-input-login"> Already have an account? 
                    <a href="#">Login </a>
                </span>
            
            </form>
            </div>
    );
};


export default SignUp;
