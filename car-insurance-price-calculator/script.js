//  VARIABLES 
let yearSelect = document.querySelector("#year"),
    form = document.getElementById('form'),
    countrySelect = document.getElementById('country');
//  EVENT LISTENERS
// document.addEventListener('DOMContentLoaded', loadYearSelector)

document.addEventListener('DOMContentLoaded', function(){
    const html = new HTMLUI();
    html.displayYears();
});

form.addEventListener('submit', getFormData)

//  FUNCTIONS AND OBJECTS

// load the year select options of the form
// function loadYearSelector() {
//     for(let i = 2000; i < 2020; i++) {
//         let option = `<option value="${i}">${i}</option>`
//         yearSelect.innerHTML += option;
//     }
// }

function HTMLUI() {}

HTMLUI.prototype.displayYears = function() {
    const max = new Date().getFullYear(),
          min = max - 20;
    
    for(let i = max; i >= min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function getFormData(e) {
    e.preventDefault();
    
    // can't declare globally, as we have to get the value at the time form is submitted
    let insuranceTypeSelect = document.querySelector('input[name="type"]:checked');

    const country = countrySelect.value,
          year = yearSelect.value,
          insuranceType = insuranceTypeSelect.value;
    // console.log(country, year, insuranceType);

    if (country === '' || year === '' || insuranceType === '' ) {
        document.getElementById('result').textContent = 'Invalid Input';
    }
    else {
        document.getElementById('result').textContent = '';
        console.log('Input Submitted');
    }

}