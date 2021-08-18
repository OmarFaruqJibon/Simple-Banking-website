document.getElementById('login-btn').addEventListener('click', function(){
    // console.log('clicked');

    const emailField = document.getElementById('email-box');
    const passwordField = document.getElementById('password-box');
    
    if(emailField.value == 'jibon@abc.com' && passwordField.value == 'jibon'){
        window.location.href="banking.html";
    }else{
        alert('Wrong emain or password!');
    }

});

