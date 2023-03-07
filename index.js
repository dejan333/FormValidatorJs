
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Show Input Error Message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}
//Show Success outline
function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}
//Check email is valid
function isValidEmail(email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(re.test(email.value.trim())){
        showSuccess(email);
    }else{
        showError(email, getFieldName(email) + ' Is not valid')
    }
}
//Check Passwords
function checkPasswords(pass1,pass2){
    
    if(pass1.value !== pass2.value){
        showError(pass2, ' Password dont match');
    }
}

//Check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, getFieldName(input) + ' Is required');
        }else {
            showSuccess(input);
        }
    });
}

//Check input length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,getFieldName(input) + ' mast be at least ' + min + ' characters');
    }else if(input.value.length > max){
        showError(input, getFieldName(input)+ ' must be less than ' + max + '  characters');
    } 
    else{
        showSuccess(input);
    }
}

//Get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Submitt Form Listener
form.addEventListener("submit", function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username, 3 , 15);
    checkLength(password, 6 , 25);
    checkLength(password2, 6 , 25);
    isValidEmail(email);
    checkPasswords(password,password2);

})