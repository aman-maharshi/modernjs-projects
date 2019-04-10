
class HTMLUI {
    displayYears() {
        const max = new Date().getFullYear(), min = max - 20;
        for (let i = max; i >= min; i--) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearSelect.appendChild(option);
        }
    }
    displayError(error) {
        message.textContent = error;
        // remove the message after 3 seconds
        setTimeout(function () {
            message.textContent = '';
        }, 3000);
    }
    showResult(price) {
        const result = document.getElementById('result');
        loader.style.display = 'block';
        setTimeout(function () {
            loader.style.display = 'none';
            result.innerHTML = `Total Amount: ${price} INR`;
        }, 2000);
    }
}

class Insurance {
    constructor(make, year, level) {
        this.make = make;
        this.year = year;
        this.level = level;
    }
    calculatePrice(insurance) {
        // console.log(insurance); 
        let price;
        const base = 5000;
        const make = insurance.make;
        // changing the cost depending on the manufacturing country
        switch (make) {
            case 'American':
                price = base * 1.5;
                break;
            case 'Indian':
                price = base;
                break;
            case 'European':
                price = base * 2;
        }
        // console.log('base price:' + price);
        // changing the cost depending on the year of manufacture
        const year = insurance.year;
        const difference = new Date().getFullYear() - year;
        // each year cost of insurance will decrease by 3%
        price = price - ((difference * 3) * price) / 100;
        // console.log('price based on year of manufacture: ' + price);
        // changing the price depending on the type of insurance selected
        const level = insurance.level;
        // basic will increase the price by 20% and complete will increase the price by 40%
        if (level === 'Basic') {
            price = price + price * 0.2;
        }
        if (level === 'Complete') {
            price = price + price * 0.4;
        }
        // console.log('price based on the plan selected: ' + price )
        return price;
    }
}