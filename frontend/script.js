// Function to send code to the backend server for compilation and execution
function compileCode() {
    const code = document.getElementById('code').value;
    const language = document.getElementById('language').value;

    // API request to compile code
    fetch('http://localhost:3000/compile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').textContent = data.output;
    })
    .catch(error => {
        document.getElementById('output').textContent = 'Error: ' + error.message;
    });
}