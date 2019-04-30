//  VARIABLES
const enterBudget = document.querySelector('#enter-budget'),
    formFirst = document.querySelector('#form-first'),
    expenceName = document.querySelector('#name'),
    expenceAmount = document.querySelector('#amount'),
    formSecond = document.querySelector('#form-second'),
    myBudget = document.querySelector('#budget'),
    amountLeft = document.querySelector('#left'),
    expenceList = document.querySelector('#list');

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
        myBudget.textContent = budget;
        amountLeft.textContent = budget;
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
function addExpence(e) {
    e.preventDefault();
    let name = expenceName.value,
        amount = expenceAmount.value;
    formSecond.reset();
    expenceName.focus();
    addToList(name, amount);
}
function addToList(item, value) {
    console.log(item, value);

    let li = document.createElement('li');
    let span = document.createElement('span');
    li.className = 'list-group-item';
    span.className = 'badge';
    span.textContent = value;
    li.textContent = item;
    li.appendChild(span);
    expenceList.appendChild(li);
}
function updateBudget() {

}