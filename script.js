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
    const messageElement = document.getElementById("email-message");
    if(!isValidEmail(username)){
        messageElement.innerText = "Invalid email address";
        messageElement.style.display = 'inline';
        messageElement.style.color = 'red';
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 3000);
            return;}

            const messageElement2 = document.getElementById('password-message');
            if (!isValidPassword(password)) {
                messageElement2.innerText = "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character";
                messageElement2.style.display = 'inline';
                messageElement2.style.color = 'red';
                // Hide the message after 3 seconds
                setTimeout(() => {
                    messageElement2.style.display = 'none';
                }, 3000);
                return; // Exit function if password is invalid
            } 
            // Add spin animation and disable the button
            document.querySelector('.btn-text').style.display = 'none';
            document.getElementById('spin').style.display = 'inline-block';
            document.getElementById('spin').classList.add('spin-animation');
            submit.disabled = true;
            
            // Simulate a form submission or an AJAX request
            setTimeout(() => {
                alert("Form submitted successfully!");
                document.getElementById('spin').classList.remove('spin-animation');
                document.querySelector('.btn-text').style.display = 'inline';
                document.getElementById('spin').style.display = 'none';
                submit.disabled = false;
            }, 3000); // Simulate a 2-second delay for form submission
})



function isValidEmail(email) {
    // Define the regular expression for a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    return emailRegex.test(email);
}
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#£])[A-Za-z\d@$!%*?&#£]{8,}$/;
    return passwordRegex.test(password);
}

