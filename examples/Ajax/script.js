/*
    FIRST
--------------------*/
document.getElementById('btn1').addEventListener('click', loadData);

function loadData() {

    // STEP 1: create a new XMLHTTPRequest Object 
    const xhr = new XMLHttpRequest();  

    // STEP 2: open connection
    xhr.open('GET', 'data.txt', true);

    // STEP 3: execute ajax call
    xhr.onload = function() {
        /*
            CODES
            200 - correct
            403 - forbidden
            404 - not found
        */
        if(this.status === 200) {
            let obj = this.responseText;
            obj = JSON.parse(obj);
            document.getElementById('result1').innerHTML  = `<p class="crimson">Location: ${obj.city}</p>`;
        }
    }

    // STEP 3 another way of executing ajax call
    xhr.onreadystatechange = function() {
        /*
            READY STATES:
            0 - unset
            1 - opened
            2 - recieved
            3 - loading
            4 - done
        */
        if(this.status === 200 && this.readyState === 4) {
            // document.getElementById('result1').innerHTML  = `<p>Location: ${obj.city}</p>`;
        }
    }

    // STEP 4: send request
    xhr.send();
}

/*
    SECOND
-----------------*/
document.getElementById('btn2').addEventListener('click', loadPlayerInfo);

function loadPlayerInfo() {

    // 1. create object
    const xhr = new XMLHttpRequest();
    // 2. open connnection
    xhr.open('GET', 'players.json', true);
    // 3. execute function
    xhr.onload = function() {
        if(this.status === 200) {
            const players = JSON.parse(this.responseText);
            let output = '';
            players.forEach(element => {
                output += `<p class="crimson">${element.player} with ${element.titles} titles </p>`;
            });
            console.log(typeof(output))
            output += `<a href="players.json">players.json<a>`
            console.log(output)
            document.getElementById('result2').innerHTML = output;
        }
    }
    // 4. send request
    xhr.send();
}
/* 
    THIRD
---------------------*/
document.querySelector('#btn3').addEventListener('click', loadUsersFromApi)

function loadUsersFromApi() {

    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
    xhr.onload = function() {
        if(this.status === 200) {
            let jsonData = JSON.parse(this.responseText);
            let output = '';
            jsonData.forEach(element => {
                output += `<li class="list">${element.name}</li>`
            });
            document.getElementById('result3').innerHTML = output;
        }
    }
    xhr.send();

}
/*
    FOURTH - CHUCK NORRIS JOKE LOADER
---------------------------------------*/
const output = document.querySelector('#result4');
const button = document.querySelector('#btn4');
button.addEventListener('click', loadChuck);
function loadChuck() {
    fetch('http://api.icndb.com/jokes/random/3')
        .then((response) => response.json())
        .then((data) => {
            let arr = data.value;
            result = ''
            arr.forEach((entry) => {
                result += `<p>${entry.joke}</p>`
            })
            output.innerHTML = result;
        });
}