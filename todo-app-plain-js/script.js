// Variables
let form = document.getElementById('form');
let textInput = document.getElementById('text');
let todoList = document.querySelector('.list');


// Event Listeners
form.addEventListener('submit', addToList);
todoList.addEventListener('click', removeItem);


// Functions
function addToList(event) {
    event.preventDefault();
    let todo = textInput.value;
    if (todo != "") {
       
        // creating a 'X' button
        let crossBtn = document.createElement('a');
        crossBtn.textContent = 'X';
        crossBtn.classList = 'cross';

        // creating and adding 'li' to 'ul'
        let li = document.createElement('li');
        li.textContent = todo
        todoList.appendChild(li);

        // adding the 'X' button to 'li'
        li.appendChild(crossBtn);

        form.reset();

        saveToLocalStorage(todo);
    }   
}
function removeItem(event) {
    if (event.target.classList.contains('cross')) {
       event.target.parentElement.remove();
   }
}

function loadFromLocalStorage() {
    let items;
    items = localStorage.getItem('todo')
    if (items === null) {
        items = [];
    }
    else {
        items = JSON.parse(items);
    }
    return items;
}

function saveToLocalStorage(todo) {
    let content = loadFromLocalStorage();
    content.push(todo);
    localStorage.setItem('todo', JSON.stringify(content));
}

