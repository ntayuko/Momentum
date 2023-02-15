const loninInput = document.querySelector("#login-forminput");
const loninButton = document.querySelector("#login-formbutton");

function onLoginBtnClick() {
    const value = loninInput.value;
    if (value === "") {
        console.log("Please write your name");
    }
}

loninButton.addEventListener("click", onLoginBtnClick);