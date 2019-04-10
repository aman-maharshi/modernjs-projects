//  VARIABLES 
let yearSelect = document.querySelector("#year"),
    form = document.getElementById('form'),
    countrySelect = document.getElementById('country'),
    message = document.getElementById('message'),
    loader = document.getElementById('loader');

const html = new HTMLUI(); // HTMLUI class defined in classes.js


//  EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function(){
    html.displayYears();
});
form.addEventListener('submit', getFormData)


//  FUNCTIONS
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
        // Insurance Class defined in classes.js
        const insurance = new Insurance(country, year, insuranceType);
        const price = insurance.calculatePrice(insurance);
        // console.log(price);

        html.showResult(price);
    }

}