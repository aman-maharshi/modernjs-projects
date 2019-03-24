// VARIABLES
let form = document.getElementById('email-form'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    loaders = document.getElementById('loaders');
    sendBtn = document.getElementById('sendBtn'),
    resetBtn = document.getElementById('resetBtn');


// EVENT LISTENERS    
document.addEventListener('DOMContentLoaded', appInit);
email.addEventListener('blur', validateField);
subject.addEventListener('blur', validateField);
message.addEventListener('blur', validateField);
form.addEventListener('submit', sendMail);
resetBtn.addEventListener('click', resetForm);


// FUNCTIONS
function appInit() {
    sendBtn.disabled = true;
    loaders.style.display = 'none';
}
function validateField() {

    checkLength(this);

    if(this.type === 'email') {
        checkEmail(this);
    }

    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        sendBtn.disabled = false;
    }
}
function checkLength(field) {
    // field will be eamil/subject/message depending on the object executing this
    if(field.value.length > 0) {
        field.style.borderBottom = "2px solid green";
    }
    if(field.value.length === 0) {
        field.style.borderBottom = "2px solid red";
    }
}
function checkEmail(emailField) {
    if(emailField.value.indexOf('@') !== -1) {
        emailField.style.borderBottom = "2px solid green";
    }
    else {
        emailField.style.borderBottom = "2px solid red";
    }

}
function sendMail(e) {
    e.preventDefault();
    loaders.style.display = '';
    document.getElementById('spinner-gif').style.display = '';
    document.getElementById('mail-gif').style.display = 'none';
    setTimeout( function() {
        document.getElementById('spinner-gif').style.display = 'none';
        document.getElementById('mail-gif').style.display = '';
    }, 2000);
    setTimeout(function(){
        form.reset();
        loaders.style.display = 'none';
    }, 3000);
}
function resetForm(e) {
    e.preventDefault();
    // window.location.reload();
    form.reset();
    sendBtn.disabled = true;
    email.style.borderBottom= '';
    subject.style.borderBottom= '' ;
    message.style.borderBottom= '';
}