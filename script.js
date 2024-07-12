document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For simplicity, we use a hardcoded check here
    // In a real-world application, you would send a request to the server
    if (username === 'user' && password === 'password') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('voting').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('vote-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked').value;
    
    // In a real-world application, you would send the vote to the server
    alert("Your vote for ${selectedCandidate} has been submitted!");
});