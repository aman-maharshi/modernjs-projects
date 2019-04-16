
/*
    TODO: 
        - Change the prompt for userBudget to an form input element.
        - Change the look and style of list items

*/

//  VARIABLES
const addExpence = document.getElementById('add-expence'),
      inputExpence = document.getElementById('expence'),
      inputAmount = document.getElementById('amount'),
      totalBudget = document.getElementById('total-budget'),
      leftBudget = document.getElementById('left-budget'),
      list = document.getElementById('list-items');

let userBudget, budget;


//  EVENT LISTENERS
document.addEventListener('DOMContentLoaded', init);
addExpence.addEventListener('submit', formSubmit);


// FUNCTIONS
function init() {
    userBudget = prompt('What\'s your budget for the week?');
    budget = userBudget;
    if(userBudget === null|| userBudget === ''|| userBudget ==='0') {
        window.location.reload();
    }
    else {
        totalBudget.textContent = Number(userBudget);
        inputExpence.focus();
    }

}
function formSubmit (event) {
    event.preventDefault();
    // add items to My Expences list
    let li = document.createElement('li');
    li.textContent = inputExpence.value + ' : ' + inputAmount.value;
    list.appendChild(li);
    
    // computing the left budget
    let left = budget - inputAmount.value;
    budget = left;
    leftBudget.textContent = budget;

    changeLeftBudgetColor(budget) ;
    if(budget <= 0) {
        document.getElementById('message').textContent = 'You have used up your entire budget for the week!'
    }
    
    addExpence.reset();
    inputExpence.focus();
    
}
function changeLeftBudgetColor(amount) {

    let fifty = 0.5 * userBudget
    let twentyFive = 0.25 * userBudget
    if( amount <= fifty && amount > twentyFive ) {
        leftBudget.parentElement.className += ' orange';
    } 
    if( amount <= twentyFive) {
        leftBudget.parentElement.className += ' red';
    }
}
