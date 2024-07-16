document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    loginUser(email, password);
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password === confirmPassword) {
        createUser(email, password);
    } else {
        alert('Passwords do not match!');
    }
});

function loginUser(email, password) {
    // Placeholder function for logging in
    // Replace with actual authentication logic
    alert('Logged in successfully!');
    showProfileSection();
}

function createUser(email, password) {
    // Placeholder function for creating a user
    // Replace with actual user creation logic
    alert('Account created successfully!');
    loginUser(email, password);
}

function showProfileSection() {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block';
}

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Personal information saved!');
});
