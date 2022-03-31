import axios from "axios";
import React, { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { uploadimage } from "../../utils/ImageUpload";
import Loader from "react-loader-spinner";

function Settings() {
  const [selected, setSelected] = useState(null);
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        display: "flex",
        flexDirection: "column",

        gap: "10px",
      }}
    >
      <p>Personal information</p>
      <div style={{ display: "flex", gap: "10px" }}>
        {" "}
        <p
          className="hover"
          style={{ color: "#06c" }}
          onClick={() => setSelected("edit")}
        >
          Edit profile
        </p>
        <p
          className="hover"
          style={{ color: "#06c" }}
          onClick={() => setSelected("upload")}
        >
          Upload Picture
        </p>
      </div>

      <div>
        {selected == "edit" ? (
          <EditProfile />
        ) : selected == "upload" ? (
          <Upload />
        ) : null}
      </div>
      <p>Security Information</p>

      <p
        className="hover"
        style={{ color: "#06c" }}
        onClick={() => setSelected("password")}
      >
        Change Password
      </p>
      <div>{selected == "password" ? <Passchange /> : null}</div>
    </div>
  );
}

const EditProfile = () => {
  const navigate = useNavigate();

  const [fname, setFname] = useState(
    JSON.parse(localStorage.getItem("user")).name
  );
  const [lname, setLname] = useState(
    JSON.parse(localStorage.getItem("user")).lastname
  );
  const [pnmbr, setPnmbr] = useState(
    JSON.parse(localStorage.getItem("user")).phoneNumber
  );

  function editprof() {
    axios
      .put(
        `http://localhost:8090/Users/edit-profile/${
          JSON.parse(localStorage.getItem("user")).id
        }`,
        { name: fname, lastname: lname, phoneNumber: pnmbr },
        { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      )
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/account/settings");
      })
      .catch((err) => alert("Error while updating account"));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "50%",
      }}
    >
      First Name:
      <input
        onChange={(e) => setFname(e.target.value)}
        value={fname}
        style={{ marginLeft: "5px" }}
        type="text"
      />
      Last Name:
      <input
        onChange={(e) => setLname(e.target.value)}
        value={lname}
        style={{ marginLeft: "5px" }}
        type="text"
      />
      Phone Number:
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <input
          onChange={(e) => setPnmbr(e.target.value)}
          value={pnmbr}
          style={{ marginLeft: "5px", flexGrow: 1 }}
          type="number"
        />
        <button
          style={{ fontSize: "14px", fontWeight: "400" }}
          onClick={() => {
            editprof();
          }}
          className="recherchebtnn"
        >
          Edit profile
        </button>
      </div>
    </div>
  );
};

const Upload = () => {
  const imgref = useRef(null);
  const [img, setimg] = useState(JSON.parse(localStorage.getItem("user")).image);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  function editimage() {
    axios
      .put(
        `http://localhost:8090/Users/edit-image/${
          JSON.parse(localStorage.getItem("user")).id
        }`,
        { image: img },
        { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      )
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/account/settings");
      })
      .catch((err) => alert("Error while updating account"));
  }

  return (
    <div>
      {loading==false?<img
        className="hover"
        onClick={() => imgref.current.click()}
        style={{ height: "150px", width: "150px",border:'3px solid gray' }}
        src={
          img == null
            ? "https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png"
            : img
        }
      />: <Loader
      type="TailSpin"
      color="black"
      height={150}
      width={150}
    />}

      <input
        style={{ visibility: "hidden" }}
        ref={imgref}
        onChange={(e) => uploadimage(e.target.files,setimg,setloading)}
        type="file"
      />
      <button
        style={{ fontSize: "14px", fontWeight: "500",height:'45px' }}
        onClick={() => {
          editimage();
        }}
        className="recherchebtnn"
      >
       Save image
      </button>
    </div>
  );
};

const Passchange = () => {
  return <p>this is edit</p>;
};

export default Settings;
