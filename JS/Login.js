//step-1:add event listener to the submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    //step-2:get e-mail address inside the input field
    const emailField = document.getElementById('email-field');
    const emailAdress = emailField.value;
    //console.log(emailAdress);


    //step-3:get password
    const passField = document.getElementById('pass-field');
    const passWord = passField.value;
    //console.log(passWord);

    //step-4:Verify Email and Password
    if (emailAdress === 'asifmahim58@gmail.com' && passWord === 'asif4217') {
        window.location.href = 'Bank.html';
    }

    else {
        alert('Invalid User');
    }
})