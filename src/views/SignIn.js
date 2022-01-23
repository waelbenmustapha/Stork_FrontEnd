import axios from 'axios';
import React, { useState } from 'react'
import { login } from '../api/Auth';
import '../css/Signin.css';
const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);



const Form = props => (


   <div>
     <FormInput setter={props.setEmail} description="Username" placeholder="Enter your email" type="text" />
     <FormInput setter={props.setPassword} description="Password" placeholder="Enter your password" type="password"/>
     
   </div>
);




const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input onChange={(e)=>{ props.setter(e.target.value)}} type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);

function SignIn() {

    const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
    return (
     <div className='bodyy'>
         <div className='loginform'>
             <div className='centerdiv'>
         <FormHeader title="Login" />
        <Form setEmail={setEmail} setPassword={setPassword} />
        <div id="button" class="row">
    <button onClick={(e)=>{e.preventDefault();login(email,password);}}>Login</button>
  </div>
        <OtherMethods /></div></div>
     </div>
    )
}

export default SignIn
