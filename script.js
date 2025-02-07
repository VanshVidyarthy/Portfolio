function toggleDetails(index) {
    document.querySelectorAll('.details')[index].classList.toggle('show');
}

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }
    alert("Message Sent!");
    return true;
}

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
