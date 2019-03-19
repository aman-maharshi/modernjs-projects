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

// saving course details into an object
function getCourseInfo(course) {
    // console.log(course)
    const courseDetails = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.new-price').textContent,
        id: course.querySelector('a').getAttribute('data-id')

    };
    // console.log(courseDetails);
    loadIntoCart (courseDetails);
}

// loading a html template onto the cart
function loadIntoCart(details) {
    console.log(details)
}
