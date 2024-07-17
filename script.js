const passwordView = document.querySelector(".password-toggle-icon");

passwordView.addEventListener("click", ()=>{
    const password = document.getElementById("password");
    if(password.type === "password"){
        password.type = "text";    }
        else{
            password.type = "password";
        }
})

const submit = document.getElementById("submit-wait");
submit.addEventListener("click", ()=>{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.querySelector(".message");
    if(!isValidEmail(username)){
        messageElement.innerText = "Invalid email address";
        messageElement.style.display = 'inline';
    }else{
        messageElement.innerText = "Valid email address";
                messageElement.style.display = 'inline';
                messageElement.style.color = 'green'; // Change color for valid email
            }
            // Hide the message after 3 seconds
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 3000);
})



function isValidEmail(email) {
    // Define the regular expression for a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    return emailRegex.test(email);
}


// everything inside a click event and after checking whether username has an eligible email id 

//  check whether the password meets requirement of having first letter case capital and minimum 8 characters with 1 special character

// add btn-text class to submit button
// add span element and set id to spin
//  add class spin animation when click event happens
// set a timeout 
//  after a timeout remove element span with id spin
// after a timeout remove btn text class from submit button
