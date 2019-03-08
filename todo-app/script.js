let form = document.querySelector('#todo-form');
let todoItem = document.querySelector("#todo-item");// selecting the text input
let todoList = document.querySelector('#todo-list');

/*
    EVENT LISTENERS
*/

form.addEventListener('submit', function(e) {
    // preventing default form submitting
    e.preventDefault();

    // selecting the value from input text
    let item = todoItem.value;

    if (item != "") {
        // creating a 'li' item 
        let li = document.createElement('li');
        li.textContent = item;

        // creating a 'X' button for the 'li' element
        let removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-item';
        removeBtn.textContent = 'X';

        li.appendChild(removeBtn); // adding X button to li 
        todoList.appendChild(li); // adding li to ul
    
        // clearing the text input field
        form.reset();

        // add the todo item to Local Storage
        addToLocalStorage(item);
    }
});

todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-item')) { 
      e.target.parentElement.remove();  
      // e.target.parentNode.style.display = "none";
    } else {
        // console.log('\'X\' not clicked, but the \'li\' is clicked')
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let x = getFromLocalStorage();

    x.forEach(function(element) {
       // creating a 'li' item 
       let li = document.createElement('li');
       li.textContent = element;

       // creating a 'X' button for the 'li' element
       let removeBtn = document.createElement('a');
       removeBtn.classList = 'remove-item';
       removeBtn.textContent = 'X';

       li.appendChild(removeBtn); // adding X button to li 
       todoList.appendChild(li); // adding li to ul 
    });
});

/*
    FUNCTIONS
*/

function addToLocalStorage(item) {
    let arr = getFromLocalStorage();
    arr.push(item);
    localStorage.setItem('todo', JSON.stringify(arr));
}

function getFromLocalStorage() {
    let todo;
    let value = localStorage.getItem('todo');
    if(value === null) {
        key = []; // creating an empty array to store todo items
    } else {
        key = JSON.parse(value); // conveting the string(array) stored in local storage to an array so we can actually push items to it. 
    }
    return key;
}


