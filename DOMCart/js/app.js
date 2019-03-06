document.querySelector('#clear-cart').addEventListener('click', clearCart);

function clearCart() {
    let content = document.querySelector('#cart-content');
    content.remove();
    // content.style.display = 'none'; 
    // content.style.opacity = '0'; 
    // content.parentNode.removeChild(content);
}
function mousePos(e) {
    console.log(e);
    // console.log(e.screenX, e.screenY);
}

let searchBtn = document.querySelector('#search');
let search = document.querySelector('#search-course');


searchBtn.addEventListener('submit', print);

function print(e) {
    e.preventDefault();
    console.log(search.value);
}

//Local Storage
//the value stored in the local storage will be string
localStorage.setItem('Name', 'Aman')
localStorage.setItem(1, 2);
localStorage.removeItem('1');
const item = localStorage.getItem('Name');
console.log(item);
// localStorage.clear();