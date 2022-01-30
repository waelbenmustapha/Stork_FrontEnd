import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Logout() {



    let navigate = useNavigate();

useEffect(()=>{

localStorage.removeItem("jwt");
localStorage.removeItem("user");
navigate("/");

},[])




  return <Navigate to="/" />
}

export default Logout;
