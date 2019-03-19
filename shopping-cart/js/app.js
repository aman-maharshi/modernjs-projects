// Variables
let courses = document.querySelector('#courses-list'),
    cartRow = document.querySelector('#cart-content tbody'),
    clearCart = document.querySelector('#clear-cart');

    
//Event Listeners
courses.addEventListener('click', addToCart);
clearCart.addEventListener('click', clearCartContent);


//Functions
function addToCart(event) {
    event.preventDefault();
    if (event.target.classList.contains('add-to-cart')) {
        let course = event.target.parentElement.parentElement;
        getCourseInfo(course);
    }
}

// saving course details into an object
function getCourseInfo(course) {
    // console.log(course)
    const courseDetails = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.new-price').textContent,
        id: course.querySelector('a').getAttribute('data-id')

    };
    // console.log(courseDetails.image)
    loadIntoCart (courseDetails);
}

// loading a html template onto the cart
function loadIntoCart(details) {
    const row = document.createElement('tr');
    row.innerHTML = `
         <td> <img src=${details.image} width=100></td>
         <td>${details.title}</td>
         <td>${details.price}</td>
         <td><a href="#" class="remove">X</a><td>
    `;
    cartRow.appendChild(row);
}

function clearCartContent() {
    clearCart.parentElement.querySelector('tbody').remove();
}