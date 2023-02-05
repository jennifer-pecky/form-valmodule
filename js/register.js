import {
    form,
    email,
    userName,
    passWord, passWord2, formControl,
} from './element.js'



// ***********Eventlisterners***********//

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //****submitbtnValidation^^^^^^^//
    usernameValidation()
    emailValidation()
    PassWordValidation()
    passWord2Validation()

    console.log("anymore")

    let LoginVal = true;

    formControl.forEach((element) => {
        console.log(element);
        if (element.classList.contains("error")) {
            LoginVal = false;
        }
    });

    console.log(LoginVal);

    if (LoginVal) {
        window.location.href = "http://127.0.0.1:5500/pages/login.html";
    }
})



//*******/ validation seconds setting******//

userName.addEventListener("change", () => {
    setTimeout(() => usernameValidation(), 2000)
})
email.addEventListener("change", () => {
    setTimeout(() => emailValidation(), 2000)
})
passWord.addEventListener("change", () => {
    setTimeout(() => PassWordValidation(), 2000)
})
passWord2.addEventListener("change", () => {
    setTimeout(() => passWord2Validation(), 2000)
})
















































// alert("hey there!")