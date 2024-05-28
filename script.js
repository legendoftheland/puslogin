document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform a simple check for username and password
    if (username === 'your_username' && password === 'your_password') {
        // If the username and password are correct, redirect to the content page
        window.location.href = 'https://your_content_page_url';
    } else {
        // If the username and password are incorrect, show an error message
        alert('Invalid username or password. Please try again.');
    }
});