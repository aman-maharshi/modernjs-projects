
// Variables
let form = document.querySelector('#todo-form');
let todoItem = document.querySelector("#todo-item");// selecting the text input
let todoList = document.querySelector('#todo-list');


// Event Listeners

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

         
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    
        // clearing the text field
        form.reset();
    }
});

todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-item')) {
      console.log('Yes');  
      e.target.parentElement.remove();  
      // e.target.parentNode.style.display = "none";
    }
    else {
        console.log('No');
    }
    // console.log(e.target);
});



