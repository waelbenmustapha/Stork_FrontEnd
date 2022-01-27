import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/Auth";
import cross from "../assets/cross.png";
import "../css/Signin.css";
const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput
      setter={props.setEmail}
      description="Username"
      placeholder="Enter your email"
      type="text"
    />
    <FormInput
      setter={props.setPassword}
      description="Password"
      placeholder="Enter your password"
      type="password"
    />
  </div>
);

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input
      onChange={(e) => {
        props.setter(e.target.value);
      }}
      type={props.type}
      placeholder={props.placeholder}
    />
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = (props) => <a href="#" id="facebookIcon"></a>;

const Twitter = (props) => <a href="#" id="twitterIcon"></a>;

const Google = (props) => <a href="#" id="googleIcon"></a>;

function SignIn() {
  let navigate = useNavigate();
  function login() {
    axios
      .post("http://localhost:8090/Users/Login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("jwt", res.data.access_token);
        localStorage.setItem("user",JSON.stringify(res.data.user));
        navigate("/");
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          setErr(true);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(()=>{

if(localStorage.getItem("jwt"))
{
  navigate("/");
}

  },[])
  return (

    <div className="bodyy">
      <div className="loginform">
        <div className="centerdiv">
          <FormHeader title="Login" />
          <Form setEmail={setEmail} setPassword={setPassword} />

          <div id="button" class="row">
            {err && (
              <a
                style={{
                  textAlign: "center",
                  backgroundColor: "rgba(255,59,98,.08)",
                  padding: "5px",
                  marginBottom: "25px",
                  width: "90%",
                }}
              >
                <img
                  style={{ marginRight: "15px", marginLeft: "15px" }}
                  src={cross}
                  height={20}
                  width={20}
                />
                Your account email or password is incorrect.
              </a>
            )}
            <p
              className="hover"
              style={{ paddingLeft: "55px", color: "#f68b1e" }}
            >
              Forgot Password?
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
            >
              Login
            </button>
          </div>
          <OtherMethods />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
