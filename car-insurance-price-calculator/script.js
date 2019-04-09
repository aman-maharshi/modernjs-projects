//  VARIABLES 
let yearSelect = document.querySelector("#year"); 

//  EVENT LISTENERS
document.addEventListener('DOMContentLoaded', loadYearSelector)

//  FUNCTIONS

function loadYearSelector() {
    for(let i = 2000; i < 2020; i++) {
        let option = `<option value="${i}">${i}</option>`
        yearSelect.innerHTML += option;
    }
}