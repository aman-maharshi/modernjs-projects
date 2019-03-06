
// Variables
let form = document.querySelector('#todo-form');
let todoItem = document.querySelector("#todo-item");
let todoList = document.querySelector('#todo-list');



document.querySelector('#todo-form').addEventListener('submit', function(e){
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

         
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    
        // clearing the text field
        form.reset();
    }

    
});
