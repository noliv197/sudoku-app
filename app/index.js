import { generateEmptyTable, generateGameTable } from "./view.js";

generateEmptyTable();

document.querySelector('[data-btn="newGame"]').addEventListener('click', ()=>{
    generateGameTable();
})


function isValid(value) {
    // Check if the value is a number
    const isNumber = !isNaN(value) && value.trim() !== '';

    return isNumber
}

function checkInputs() {
    // Select all input elements with the class 'input-field'
    const inputs = document.querySelectorAll('input');
        let allValid = true;

        // Loop through the inputs and check if they all have valid values
        inputs.forEach(input => {
            if (!isValid(input.value)) {
                allValid = false;
            }
        });
     
    const validateButton = document.querySelector('#validate-button');


            if (allValid) {
                validateButton.disabled = false;
            } else {
                validateButton.disabled = true;
            }
        
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', checkInputs);
});

checkInputs()



// console.log(document.querySelector("#validate-button").removeAttribute('disabled'))

// document.querySelector('[data-btn="validate]').addEventListener('click', ()=>{
    


// })