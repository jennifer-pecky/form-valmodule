import {
    form,
    Form,
    userName,
    email,
    Email,
    passWord,
    passWord2,
    password,
    checkEmail,
    checkPassword,

} from "./element.js"


import { errorMessage, successMessage } from "./errorMessage"



const emailValidation = () => {
    const emailValue = email.value.trim()
    // console.log('get');

    if (emailValue === "") {
        errorMessage(email, "email address is required")
    } else if (email.value !== checkEmail) {
        errorMessage(email, "a valid email is required")
    } else {
        successMessage(email)
    }
}

const passWordValidation = () => {
    const passwordvalue = password.value.trim()

    if (passwordvalue === "") {
        errorMessage(password, "A valid password is required")
    } else if (passwordvalue < 8 || passwordvalue > 15) {
        errorMessage(password, "must be between 8 and 15 characters")
    } else if (passwordvalue === checkPassword) {
        errorMessage(password, "Invalid password, input a valid password")
    } else {
        successMessage(password)
    }
}

const loginValidation = () => {
    console.log("hey you");
    if (email.value === checkEmail && password.value === checkPassword) {
        successMessage(email)
        successMessage(password)
    } else {
        setTimeout(() => {
            alert("you have been logged in.Welcome to your account")
        }, 1000)
    }
    // alert("you just clicked login")
}



//^^^^^^ Error message ^^^^^^^//
const errorMessage = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector("small");

    errorDisplay.textContent = message;
    formControl.classList.add("error")
    formControl.classList.remove("success")
}
//********* Success message^^^^^^^// 

const successMessage = (element) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector("small")

    errorDisplay.textContent = "";
    formControl.classList.remove("error")
    formControl.classList.add("success")
}


//*************Validation section******** */

const usernameValidation = () => {
    // console.log('get');
    const userNameValue = userName.value.trim();

    if (userNameValue === "") {
        errorMessage(userName, "userName is required")
    } else if (userNameValue.length < 3 || userNameValue.length > 15) {
        errorMessage(userName, "between 3 and 15 characters must be unique")
    } else {
        successMessage(userName)
        localStorage.setItem("userName", userName.value)
    }
}

const EmailValidation = () => {
    const emailValue = email.value.trim()
    console.log('emailValidation');

    if (emailValue === "") {
        errorMessage(email, "email address is required")
    } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        errorMessage(email, "email address must be valid")
    } else {
        successMessage(email)
        localStorage.setItem("email", email.value)
        console.log("my love");
    }
}

const PassWordValidation = () => {
    const passwordvalue = passWord.value.trim()

    if (passwordvalue === "") {
        errorMessage(passWord, "A valid password is required")
    } else if (passwordvalue.length > 8 || passwordvalue.length < 15) {
        errorMessage(passWord, "must between 8 and 15 characters must be unique")
    } else {
        successMessage(passWord)
        localStorage.setItem("passWord", passWord.value)
    }
}

const passWord2Validation = () => {
    const password2value = passWord2.value.trim()
    const passwordvalue = passWord.value.trim()

    if (password2value === "") {
        errorMessage(passWord2, "A valid password is required")
    } else if (password2value !== passwordvalue) {
        errorMessage(passWord2, "must match the password filed value")
    } else {
        successMessage(passWord2)
        localStorage.setItem("passWord2", passWord2.value)
    }
}

export {
    usernameValidation,
    EmailValidation,
    PassWordValidation,
    passWord2Validation,
}

export {
    emailValidation,
    passWordValidation,
    loginValidation,
};
