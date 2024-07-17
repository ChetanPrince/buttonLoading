const passwordView = document.querySelector(".password-toggle-icon");

passwordView.addEventListener("click", ()=>{
    const password = document.getElementById("password");
    if(password.type === "password"){
        password.type = "text";    }
        else{
            password.type = "password";
        }
})