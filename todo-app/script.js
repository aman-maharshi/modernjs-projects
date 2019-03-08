let form = document.querySelector('#todo-form');
let todoItem = document.querySelector("#todo-item");// selecting the text input
let todoList = document.querySelector('#todo-list');

/*
    EVENT LISTENERS
*/

// event to add the item from input field on to the 'ul' element
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
        form.reset(); // this.reset();

        // add the todo item to Local Storage
        addToLocalStorage(item);
    }
});

// event to remove item from DOM and from the local storage when 'X' button is clicked
todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-item')) { 
      e.target.parentElement.remove();  
      // e.target.parentNode.style.display = "none";
    }
    removeFromLocalStorage(e.target.parentElement.textContent);
});

// event to load content from the local storage when the page loads or reloads 
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
    return key; // will return an Array
}

function removeFromLocalStorage(todoX) {
    let todo = todoX.slice(0, todoX.length - 1);
    let items = getFromLocalStorage();

    // remove item from array
    items.forEach(function (todoLS, index) {
        if (todo == todoLS) {
            items.splice(index, 1);
        }
    });
    // write the array to the local storage
    localStorage.setItem('todo', JSON.stringify(items));
}
