// Variables
let courses = document.querySelector('#courses-list'),
    cartContent = document.querySelector('#cart-content tbody'),
    clearCart = document.querySelector('#clear-cart'),
    indicator = document.querySelector('.indicator');

    
//Event Listeners
courses.addEventListener('click', addToCart);
cartContent.addEventListener('click', removeCourse);
clearCart.addEventListener('click', removeAllCourses);


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
    cartContent.appendChild(row);
    // to show and hide 'item added' indicator
    indicator.style.display = 'block';
    window.setTimeout("indicator.style.display = 'none';", 500);

}

// remove a perticular course from cart
function removeCourse(event) {
    if (event.target.classList.contains('remove')) {
        event.target.parentElement.parentElement.remove();
    }
}

function removeAllCourses() {
    // event.target.parentElement.querySelector('tbody').remove();
    // cartContent.innerHTML= '';
    while(cartContent.firstChild) {
        cartContent.removeChild(cartContent.firstChild);
    }
}