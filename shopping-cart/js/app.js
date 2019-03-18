// Variables
let courses = document.querySelector('#courses-list');
let cart = document.querySelector('#img-cart');

//Event Listeners

courses.addEventListener('click', addToCart);

//Functions
function addToCart(event) {
    event.preventDefault();
    if (event.target.classList.contains('add-to-cart')) {
        let course = event.target.parentElement.parentElement;
        getCourseInfo(course);
    }
}

function getCourseInfo(course) {
    console.log(course);
}