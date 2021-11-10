import { useState, useEffect} from "react";
import Validateinfo from "./Validateinfo";
import axios from 'axios';

const UseForm = (callback, Validateinfo ) => {
   const [values, setValues] = useState ({
        username: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
        phonenumber: "",
    });
    /*
    const [name, setName] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);*/
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState (false);

    const handleChange = e => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

        const handleSubmit = e => {
            e.preventDefault();
            //console.log("hello");
            //axios.post("localhost:8090/Users/SignUp", values).then((response) => {console.log(response)});
            setErrors(Validateinfo(values));
            setIsSubmitting(true);
        };
        
      
      
        

        useEffect (() => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        }, [errors]);
    
    return {handleChange, values, handleSubmit, errors, };
};

export default UseForm;