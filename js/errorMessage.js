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


export { errorMessage, successMessage }