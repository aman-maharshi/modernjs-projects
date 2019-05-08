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
        ajaxRequest(url);
    }
    if (amount == '' || region == '') {
        document.querySelector('.warning').textContent = 'All fields are mandatory';
        setTimeout(function() {
            document.querySelector('.warning').textContent = '';
        }, 2000)
    }
}

function ajaxRequest(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if(this.status == 200) {
            let obj = JSON.parse(this.responseText);
            let output = '';
            obj.forEach(element => {
                output += `<li>${element.name}</li>`
            });
            // document.getElementById('names').firstElementChild.style.display = 'none';
            document.getElementById('result').innerHTML = output;
        }
    }
    xhr.send();
}