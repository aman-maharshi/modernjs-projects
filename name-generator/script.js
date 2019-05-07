document.getElementById('form').addEventListener('submit', laodNames);


function laodNames(e) {
    e.preventDefault();
    const region = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const amount = document.getElementById('quantity').value;

    // build URL
    let url = 'https://uinames.com/api/?';
    if (region != '' && amount != '') {
        url +=  `region=${region}`;
        url += `&gender=${gender}`;
        url += `&amount=${amount}`;
        console.log(url);    
    }
    if (amount == '') {
        document.querySelector('.warning').textContent = 'All fields are mandatory';
        setTimeout(function() {
            document.querySelector('.warning').textContent = '';
        }, 2000)
        
    }
    

}