
const cart = document.querySelector('.cart');
console.log(cart.classList.contains('cart'));



 function toggleButton(selector) {
const button = document.querySelector(selector);
if (!button.classList.contains('is-toggled')) {

    // Before turning this button ON, check if there's
    // already a button that's turned ON and turn it OFF.
    turnOffPreviousButton();

    button.classList.add('is-toggled');
} else {
    button.classList.remove('is-toggled');
}
}

function turnOffPreviousButton() {
const previousButton = document.querySelector('.is-toggled');
if (previousButton) {
    previousButton.classList.remove('is-toggled');
}
}

    
    function totoggle() {
        const jsbutton = document.querySelector('.js-button');
        if (!jsbutton.classList.contains('is-toggled')){
            jsbutton.classList.add('is-toggled')
        }else {
            jsbutton.classList.remove('is-toggled')
        }
    }
    function totoggle2() {
        const jsbutton = document.querySelector('.js2-button');
        if (!jsbutton.classList.contains('is-toggled')){
            jsbutton.classList.add('is-toggled')
        }else {
            jsbutton.classList.remove('is-toggled')
        }
    }
    function totoggle3() {
        const jsbutton = document.querySelector('.js3-button');
        if (!jsbutton.classList.contains('is-toggled')){
            jsbutton.classList.add('is-toggled')
        }else {
            jsbutton.classList.remove('is-toggled')
        }
    }


    function calculate(){
        const cost = document.querySelector('.cost');
        const errormsg = document.querySelector('.errormsg')
        let finalcost = Number(cost.value)
        if (finalcost < 0) {
            errormsg.innerHTML = 'Error: cost cannot be less than $0'
        } else {
            if (finalcost < 40) {
                finalcost += 10
                errormsg.innerHTML = `$${finalcost}`
            }else {
                errormsg.innerHTM = ''
                errormsg.innerHTML = `$${finalcost}`
            }
        }
    }
