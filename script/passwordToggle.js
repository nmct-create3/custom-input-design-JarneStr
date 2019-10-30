// wacht tot de DOM geladen is.
// voer het toggelen van ht password gaan we ook een functie maken
//handlePaswordSwitcher
//haal in deze funcite de passwoord inputen passwoord toggle op


const handlePasswordSwitcher = function(){
    const passwordInput = document.querySelector('.js-password-input'),
    passwordToggle = document.querySelector('.js-password-toggle');
    
    passwordToggle.addEventListener('change', function() {
        if (passwordInput.type === 'text')
        {
            passwordInput.type = 'password';
        }
        else{
            passwordInput.type = 'text';
            }
    }
    )};



document.addEventListener('DOMContentLoaded', function(){
    handlePasswordSwitcher();
})

console.log('ik ben geladen');