// Select 
const userForm = document.getElementById('userForm');
const userInfoDisplay = document.getElementById('userInfoDisplay');

// Handle
userForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Collect data from form fields
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const orderType = document.getElementById('orderType').value;

    // Collect data from radio button
    let orderChoice = '';
    const orderOptions = document.getElementsByName('order');
    for (let i = 0; i < orderOptions.length; i++) {
        if (orderOptions[i].checked) {
            orderChoice = orderOptions[i].value;
            break;
        }
    }

    // Q4
    const userInfo = `
        <h3>Submitted Information:</h3>
        <ul>
            <li><strong>Username:</strong> ${username}</li>
            <li><strong>Age:</strong> ${age}</li>
            <li><strong>Gender:</strong> ${gender}</li>
            <li><strong>Order Type:</strong> ${orderType}</li>
            <li><strong>Order Choice:</strong> ${orderChoice || 'No order selected'}</li>
        </ul>
    `;
    userInfoDisplay.innerHTML = userInfo; 
});
