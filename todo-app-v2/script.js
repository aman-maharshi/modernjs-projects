// Variables
let form = document.getElementById('form');
let textInput = document.getElementById('text');
let todoList = document.querySelector('.list');


// Event Listeners
form.addEventListener('submit', addToList);
todoList.addEventListener('click', removeItem);
document.addEventListener('DOMContentLoaded', localStorageOnLoad);


// Functions
function addToList(event) {
    event.preventDefault();
    let todo = textInput.value;
    if (todo != "") {

        // creating and adding 'li' to 'ul'
        let li = document.createElement('li');
        li.textContent = todo
        todoList.appendChild(li);

        // creating a 'X' button
        let crossBtn = document.createElement('a');
        crossBtn.textContent = 'X';
        crossBtn.classList = 'cross';

        // adding the 'X' button to 'li'
        li.appendChild(crossBtn);

        form.reset();

        saveToLocalStorage(todo);
    }   
}
// removing items from dom and local storage
function removeItem(event) {
    if (event.target.classList.contains('cross')) {
       event.target.parentElement.remove();
       
       // remove from local storage
       removeFromLocalStorage(event.target.parentElement.textContent);    
   }
}

// getting the todo items from local storage as an array
function getFromLocalStorage() {
    let items;
    items = localStorage.getItem('todo')
    if (items === null) {
        items = [];
    }
    else {
        // converting the string from local storage to an array
        items = JSON.parse(items); 
    }
    return items;
}

function saveToLocalStorage(todo) {
    let content = getFromLocalStorage();
    content.push(todo);
    localStorage.setItem('todo', JSON.stringify(content));
}
// loading items from local storage onto dom on page refresh
function localStorageOnLoad() {
    let todoItems = getFromLocalStorage();
    todoItems.forEach(function(entry) { 

        // creating and adding 'li' to 'ul'
        let li = document.createElement('li');
        li.textContent = entry;
        todoList.appendChild(li);

        // creating a 'X' button
        let crossBtn = document.createElement('a');
        crossBtn.textContent = 'X';
        crossBtn.classList = 'cross';

        // adding the 'X' button to 'li'
        li.appendChild(crossBtn);
    });

}

function removeFromLocalStorage(text) {
    // removing the 'X' at the end on 'li' item
    text = text.slice(0, text.length -1);
    let items = getFromLocalStorage();

    // removing the matching item from array and pushing the changed array to local storage
    items.forEach(function(entry, index) {
        if(entry === text) {
            items.splice(index, 1); 
            localStorage.setItem('todo', JSON.stringify(items));
        }
    });    
}

