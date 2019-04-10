//  VARIABLES 
let yearSelect = document.querySelector("#year"),
    form = document.getElementById('form'),
    countrySelect = document.getElementById('country'),
    message = document.getElementById('message'),
    loader = document.getElementById('loader');

const html = new HTMLUI();


//  EVENT LISTENERS

document.addEventListener('DOMContentLoaded', function(){
    html.displayYears();
});
form.addEventListener('submit', getFormData)


//  FUNCTIONS and OBJECTS

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
        const insurance = new Insurance(country, year, insuranceType);
        const price = insurance.calculatePrice(insurance);
        // console.log(price);

        html.showResult(price);
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

HTMLUI.prototype.showResult = function(price) {
    const result = document.getElementById('result');

    loader.style.display = 'block';
    setTimeout(function() {
        loader.style.display = 'none'
        result.innerHTML = `Total Amount: ${price} INR`
    }, 2000)

}


// compute the insurance
function Insurance(make, year, level) {
    this.make = make;
    this.year = year;
    this.level = level;
}

Insurance.prototype.calculatePrice = function(insurance) {
    // console.log(insurance); 
    let price;
    const base = 5000;

    const make = insurance.make;

    // changing the cost depending on the manufacturing country
    switch(make) {
        case 'American':
            price = base * 1.5;
            break;
        case 'Indian': 
            price = base;
            break;
        case 'European':
            price = base * 2  
    }
    // console.log('base price:' + price);
    // changing the cost depending on the year of manufacture
    const year = insurance.year;
    const difference = new Date().getFullYear() - year;
    
    // each year cost of insurance will decrease by 3%
    price = price - ((difference * 3)* price) / 100;
    // console.log('price based on year of manufacture: ' + price);

    // changing the price depending on the type of insurance selected
    const level = insurance.level;
    // basic will increase the price by 20% and complete will increase the price by 40%
    if (level === 'Basic') {
        price = price + price * 0.2;
    }
    if(level === 'Complete') {
        price = price + price * 0.4;
    }
    // console.log('price based on the plan selected: ' + price )

    return price;

}