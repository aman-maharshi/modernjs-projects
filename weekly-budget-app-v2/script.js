//  VARIABLES
const enterBudget = document.querySelector('#enter-budget'),
    formFirst = document.querySelector('#form-first'),
    expenceName = document.querySelector('#name'),
    expenceAmount = document.querySelector('#amount'),
    formSecond = document.querySelector('#form-second');

let budget;


//  EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
    enterBudget.focus();
})
formFirst.addEventListener('submit', init);
formSecond.addEventListener('submit', addExpence);


//  FUNCTIONS
function init(e) {  
    e.preventDefault();
    budget = enterBudget.value;
    if (budget !== '') {
        enableForm();
        expenceName.focus();
    }
    else {
        document.getElementById('message-first').textContent = 'This field cant\'t be left empty';
        setTimeout(function() {
            document.getElementById('message-first').style.display = 'none';
        }, 2000)
    }
}
function enableForm() {
    expenceName.disabled = false;
    expenceAmount.disabled = false;
    document.getElementById('add-btn').disabled = false;
}
function addExpence() {

}
function addToList() {

}
function updateBudget() {

}