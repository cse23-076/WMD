document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var feedback = document.getElementById('feedback').value.trim();
    var messageElement = document.getElementById('message');

    if (name === '' || email === '' || feedback === '') {
        messageElement.textContent = 'Please fill all boxes.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Feedback received. Thank you!';
        messageElement.style.color = 'red';
        // Optionally, clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('feedback').value = '';
    }
});
