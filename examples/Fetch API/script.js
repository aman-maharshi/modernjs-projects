const btn1 = document.getElementById('btn1'),
      btn2 = document.getElementById('btn2'),
      btn3 = document.getElementById('btn3'),
      result = document.getElementById('result');

btn1.addEventListener('click', loadText);
btn2.addEventListener('click', loadJson);
btn3.addEventListener('click', loadJsonApi);

function loadText() {
    // Step 1: fetch the url / file
    fetch('data.txt')
    // Step 2: use promise
    .then(function(response) {
        // console.log(response)
        return response.text();
    })
    .then(function(data) {
        // console.log(data);
        result.innerHTML = data;
    })
}

function loadJson() {
    fetch('quotes.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        output = ''
        data.forEach(element => {
            output += `<p>"${element.quote}"<span> - ${element.author}</span><p>`
        });
        result.innerHTML = output;
    }) 

}

function loadJsonApi() {
    fetch('https://quota.glitch.me/random')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        result.innerHTML = `<p>"${data.quoteText}"<span> - ${data.quoteAuthor}</span></p>`;
    })
    
}