
//  VARIABLES
const addExpence = document.getElementById('add-expence'),
    inputExpence = document.getElementById('expence'),
    inputAmount = document.getElementById('amount'),
    totalBudget = document.getElementById('total-budget'),
    leftBudget = document.getElementById('left-budget');

let userBudget;

//  EVENT LISTENERS
document.addEventListener('DOMContentLoaded', init);
addExpence.addEventListener('submit', formSubmit);


//  CLASSES

// FUNCTIONS
function init() {
    userBudget = prompt('What\'s your budget for the week?');
    if(userBudget === null|| userBudget === ''|| userBudget ==='0') {
        window.location.reload();
    }
    else {
        totalBudget.textContent = Number(userBudget);
    }

}
function formSubmit (event) {
    event.preventDefault();
    console.log('You spent: '+inputAmount.value+' ₹ on '+inputExpence.value);
}