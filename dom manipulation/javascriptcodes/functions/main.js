const numbox = document.getElementById('numbox')
const submit = document.getElementById('submit')
let textbox = document.getElementById('textbox')



submit.addEventListener('click', () => {
    // let num = parseInt(numbox.value) 
    let num = numbox.value
    if (num > 50) {
        textbox.innerText = num + " is greater than 50"
    }else if(num > 25 && num < 50) {
        textbox.innerText = num + " is greater than 25"
    }else {
        textbox.innerText = num + " is less than 25"
    }
})