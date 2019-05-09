# Examples

## Ajax

```javascript
    // Step 1
    let xhr = new XMLHttpRequest;
    // Step 2
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true) // xhr.open('GET', 'file.json', true)
    // Step 3
    xhr.onload = function() { 
        if(this.status === 200) {
            let jsonData = JSON.parse(this.responseText);
            let output = '';
            jsonData.forEach(element => {
                output += `<li class="list">${element.name}</li>`
            });
            document.getElementById('result3').innerHTML = output;
        }
    }   // xhr.onreadystatechange = function() {}
    // Step 4
    xhr.send();
````
## Fetch API

```javascript
    .fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        });
        .then(function(data) {
            let output  = '';
            data.foreach(element => {
                output += `<li class="list">${element.name}</li>`
            })
            document.getElementById('result3').innerHTML = output;
        })
```