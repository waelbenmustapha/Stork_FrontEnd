export default function Validateinfo(values){
    let errors = {}

    //username
    if(!values.username.trim()) {
        errors.username = "Username required"

    }

    //lastname
    if(!values.lastname.trim()) {
        errors.lastname = "Lastname required"

    }
    
    //Email
    if(!values.email.trim()) {
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,}$/i.test(values.email)) 
        {
                errors.email="Email address is invalid"
        }
    if(!values.password.trim()) {
        errors.password = "Password required"
    } 
    else if (values.password.length <6){
        errors.password="password needs to be 6 characters or more"
        }
    if(!values.password2.trim()) {
        errors.password2 = "password is required"
    
    } else if (values.password2 !== values.password){
        errors.password2 = "password to not match"
    };
    if (typeof values.phonenumber !== "undefined") {

        var pattern = new RegExp(/^[2,4,5,9][0-9]{7}$/);
        if (!pattern.test(values.phonenumber)) {
          errors.phonenumber = "Please enter only number.";
      
        }else if(values.phonenumber.length !== 8){
          errors.phonenumber = "Please enter valid phone number.";
      
        }
      
      }

    return errors;
}

