// Variables
let courses = document.querySelector('#courses-list'),
    cartContent = document.querySelector('#cart-content tbody'),
    clearCart = document.querySelector('#clear-cart'),
    indicator = document.querySelector('.indicator');

    
//Event Listeners
courses.addEventListener('click', addToCart);
cartContent.addEventListener('click', removeCourse);
clearCart.addEventListener('click', removeAllCourses);
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);


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
    loadIntoCart(courseDetails);
}

// loading a html template onto the cart
function loadIntoCart(details) {
    const row = document.createElement('tr');
    row.innerHTML = `
         <td> <img src=${details.image} width=100></td>
         <td>${details.title}</td>
         <td>${details.price}</td>
         <td><a href="#" class="remove" id=${details.id}>X</a></td>
    `;
    cartContent.appendChild(row);
    // to show and hide 'item added' indicator
    indicator.style.display = 'block';
    window.setTimeout("indicator.style.display = 'none';", 500);

    addToLocalStorage(details)
}

// get items from local storage
function getItemFromLocalStorage() {
     let item = localStorage.getItem('course')
     if(item === null) {
         item = [];
     }
     else {
         item = JSON.parse(item)
     }
     return item;
}

// adding the course content to local storage
function addToLocalStorage(details) {
    let courseInfo = getItemFromLocalStorage();
    courseInfo.push(details);
    localStorage.setItem('course', JSON.stringify(courseInfo));

}

// remove a perticular course from cart
function removeCourse(event) {
    if (event.target.classList.contains('remove')) {
        let idCart = event.target.parentElement.parentElement.querySelector('a').getAttribute('id')
        removeCourseLocalStorage(idCart);
        event.target.parentElement.parentElement.remove();
    }
}
// remove the matching cart element from local storage as well
function removeCourseLocalStorage(idCart) {
    courses = getItemFromLocalStorage();
    courses.forEach(function(obj, index) {
        if (obj.id == idCart)
            courses.splice(index, 1)
    });
    localStorage.setItem('course', JSON.stringify(courses));
}

// clear all items from cart
function removeAllCourses() {
    // event.target.parentElement.querySelector('tbody').remove();
    // cartContent.innerHTML= '';
    while(cartContent.firstChild) {
        cartContent.removeChild(cartContent.firstChild);
    }
    localStorage.removeItem('course');
}

// loading content from local storage to cart on page refresh/load
function loadFromLocalStorage() {
    let courseList = getItemFromLocalStorage();
    // console.log(courseList);
    courseList.forEach(function(course) {
        // console.log(course.image);
        let entry = document.createElement('tr');

        entry.innerHTML = `
         <td> <img src=${course.image} width=100></td>
         <td>${course.title}</td>
         <td>${course.price}</td>
         <td><a href="#" class="remove" id=${course.id}>X</a></td>
        `;
        cartContent.appendChild(entry);
    })
}
    