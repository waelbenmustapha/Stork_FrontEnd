import axios from 'axios';


export function login(email,password){

    axios.post("http://localhost:8090/Users/Login",{email:email,password:password}).then((res)=>{console.log(res.data);return res.data});
}


