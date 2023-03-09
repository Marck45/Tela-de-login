const btnReg = document.querySelector("#btnRegister");
const loginContainer = document.querySelector("#login-container");
const loginOK = document.querySelector("#login-ok");


    btnReg?.addEventListener("click", (e) => {
        e.preventDefault();
    
        loginContainer.classList.add("hide");
        loginOK.classList.remove("hide");
    });
