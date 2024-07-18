const passwordView = document.getElementById("password-view");
passwordView.addEventListener("click", ()=>{
    const password = document.getElementById("password");
    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
})
function processWait(){
const username = document.getElementById("userName").value;
const password = document.getElementById("password").value;
if(!isValidEmail(username)){
    const messageElement = document.getElementById("invalid-email");
    messageElement.textContent = "Not A Valid Email Address!"
    setTimeout(()=>{
        messageElement.textContent = "";
        messageElement.classList.add("hide");
    }, 3000);
    return;
}
if(!isValidPassword(password)){
    const messageElement = document.getElementById("invalid-password");
    messageElement.textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character"
    setTimeout(()=>{
        messageElement.textContent = "";
        messageElement.classList.add("hide");
    }, 3000);
    return;
}

    document.getElementById("submit-btn").classList.add("hide");
    document.getElementById("animation-element").classList.remove("hide");
    document.getElementById("animation-element").classList.add("animation");
    submit.disabled = true;
    
    setTimeout(()=>{
        alert("User Has Been Registered Successfully")
        document.getElementById("submit-btn").classList.remove("hide");
    document.getElementById("animation-element").classList.add("hide");
    document.getElementById("animation-element").classList.remove("animation");
    submit.disabled = false;
},3000)
}


const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", processWait);

function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
}

function isValidPassword(password){
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#£])[A-Za-z\d@$!%*?&#£]{8,}$/;
    return passwordRegex.test(password);

}