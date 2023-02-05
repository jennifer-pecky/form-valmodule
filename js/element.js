const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email")
const passWord = document.getElementById("password");
const passWord2 = document.getElementById("password2");
const formControl = document.querySelectorAll(".form-control")




const Form = document.getElementById("form")
const Email = document.getElementById("email")
const password = document.getElementById("password")

// localStorage validaton//
const checkEmail = localStorage.getItem("email")
const checkPassword = localStorage.getItem("password")


export {
    form,
    Form,
    userName,
    email,
    Email,
    passWord,
    passWord2,
    formControl,
    password,
    checkEmail,
    checkPassword,
};