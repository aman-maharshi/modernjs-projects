//  VARIABLES 
let yearSelect = document.querySelector("#year"),
    form = document.getElementById('form'),
    countrySelect = document.getElementById('country'),
    message = document.getElementById('message'),
    loader = document.getElementById('loader');

const html = new HTMLUI();


//  EVENT LISTENERS

// document.addEventListener('DOMContentLoaded', loadYearSelector)
document.addEventListener('DOMContentLoaded', function(){
    html.displayYears();
});

form.addEventListener('submit', getFormData)


//  FUNCTIONS

// load the year select options of the form
// function loadYearSelector() {
//     for(let i = 2000; i < 2020; i++) {
//         let option = `<option value="${i}">${i}</option>`
//         yearSelect.innerHTML += option;
//     }
// }

function getFormData(e) {
    e.preventDefault();
    
    // can't declare globally, as we have to get the value at the time form is submitted
    let insuranceTypeSelect = document.querySelector('input[name="type"]:checked');

    const country = countrySelect.value,
          year = yearSelect.value,
          insuranceType = insuranceTypeSelect.value;
    // console.log(country, year, insuranceType);

    if (country === '' || year === '' || insuranceType === '' ) {
        html.displayError('All fields are mandatory!')
    }
    // compute the insurance if all the fields are valid
    else {
        // message.textContent = '';
        loader.style.display = 'block';
        setTimeout(function(){
            loader.style.display = 'none'
        }, 2000)
        console.log('Input Submitted');
    }

}


// OBJECTS

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

HTMLUI.prototype.displayError = function(error) {
    message.textContent = error;

    // remove the message after 3 seconds
    setTimeout(function(){
        message.textContent = '';
    }, 3000)
}