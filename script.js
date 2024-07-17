const passwordView = document.querySelector(".password-toggle-icon");

passwordView.addEventListener("click", ()=>{
    const password = document.getElementById("password");
    if(password.type === "password"){
        password.type = "text";    }
        else{
            password.type = "password";
        }
})




// everything inside a click event and after checking whether username has an eligible email id 

//  check whether the password meets requirement of having first letter case capital and minimum 8 characters with 1 special character

// add btn-text class to submit button
// add span element and set id to spin
//  add class spin animation when click event happens
// set a timeout 
//  after a timeout remove element span with id spin
// after a timeout remove btn text class from submit button
