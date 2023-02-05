import {
     emailValidation,
     passWordValidation,
     loginValidation,
} from "./vaildate.js"





form.addEventListener("submit", (e) => {
     e.preventDefault()


     emailValidation()
     passWordValidation()
     loginValidation()
});




