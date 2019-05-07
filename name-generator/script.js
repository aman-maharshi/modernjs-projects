document.getElementById('form').addEventListener('submit', laodNames);


function laodNames(e) {
    e.preventDefault();
    const region = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const amount = document.getElementById('quantity').value;

    // build URL
    let url = 'https://uinames.com/api/?';
    if (region != '') {
        url +=  `region=${region}`;
        url += `&gender=${gender}`;
    }
    if (amount != '') {
        url += `&amount=${amount}`;
        console.log(url);
    }
    

}