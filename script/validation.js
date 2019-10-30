
let email = {},
    password = {},
    singInButton;

const addErrors = function(formField){
    formFieldfield.classList.add('has-error');
}

const removeErrors = function(formField){
    formField.field.classList.remove('has-error')
}

const doubleCheckEmail = function(e)
{
    if(isValidEmailAddress(e.target.value)){
        removeErrors(email);
        email.input.removeEventListener('input', doubleCheckEmail)
    }else{
        const typeInput = e.target.value;
        if(isEmpty(typeInput)){
            email.errorMessage.innerHTML = 'This filed is required';
        }else{
            email.errorMessage.innerHTML ='the email is wrong'
        }
    }
}

const enableListeners = function(){
    email.input.addEventListener('blur', function(e){
        console.log(e.target.value);

    const typeInput = e.target.value;
    if(!isValidEmailAddress(typeInput)){
            if(isEmpty(typeInput)){
                email.errorMessage.innerHTML = 'this field is required';
            }else{
                email.errorMessage.innerHTML = 'the emailadress is wrong';
            }
            addErrors(email);

            //na fout blijven in de gaten houden
            email.input.addEventListener('input', doubleCheckEmail);
            //tijdens het typen checken


    }
    })

    password.input.addEventListener('blur', function(e){
        console.log(e.target.value);
    })

    singInButton.addEventListener('click', function(){
        console.log('Clicked the button');
    })
};

const isValidEmailPassword = function(password){
    return password.length >2;
}


const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

const getDOMElements = function() {
    email.field = document.querySelector('.js-username-field');
    email.input = document.querySelector('.js-username-input');
    email.errorMessage = document.querySelector('.js-username-error-message');

    password.field = document.querySelector('.js-password-field');
    password.input = document.querySelector('.js-password-input');
    password.errorMessage = document.querySelector('.js-password-error-message');
}

singInButton = document.querySelector('js-sign-in-button');
console.log(email, password, singInButton)

document.addEventListener('DOMContentLoaded',function(){
    //console.info('DOM in ready to roll...')
    getDOMElements();
});



