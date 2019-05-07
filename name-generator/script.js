document.getElementById('form').addEventListener('submit', laodNames);


function laodNames(e) {
    e.preventDefault();
    const region = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const amount = document.getElementById('quantity').value;
}