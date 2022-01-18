import React from 'react'
import { faEye, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function WidgetAddbottombar(props) {
    return (
        <div>
            <div
          style={{
            bottom: "0px",
            height: "40px",
            width:'240px',
            backgroundColor: "#495157",
            borderTopRightRadius:'5px',
            borderTopLeftRadius:'5px',
            left: "0px",
            position: "fixed",
            display: "flex",
            right: "0px",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon className="btnicon" color="white" icon={faEye} />
          <FontAwesomeIcon className="btnicon" color="white" icon={faQuestionCircle} />

         {!props.loading? <div
          onClick={props.onclick}
            style={{
              backgroundColor: "#39b54a",
              width: "100px",
              height: "30px",
              borderRadius: "10px",
              textAlign: "center",
              color: "white",
              marginLeft: "15px",
            }}
            className="hovercursor"
          >
            Save
          </div>:
          <Loader
        type="TailSpin"
        color="white"
        height={27}
        width={27}
      />}
        </div>
        </div>
    )
}

export default WidgetAddbottombar
