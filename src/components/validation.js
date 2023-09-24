export default function Validation(values){
    const errors ={}

    const email_pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(values.name === ""){
        errors.name = "Please enter your name"
    }

    if(values.email === ""){
        errors.email = "email is required"
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "Please enter a valid email address"
    } 

    if(values.message === ""){
        errors.message = "Please enter your message"
    }
    return errors;
}