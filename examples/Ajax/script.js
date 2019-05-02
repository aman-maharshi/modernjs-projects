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
            document.getElementById('result1').innerHTML  = `<p>Location: ${obj.city}</p>`;
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