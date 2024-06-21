import { generateSudokuMap,generateRandomNumber } from "./functions.js";

function generateInput(value){
    let input = document.createElement('input');
    input.disabled = true;
    input.value = value;
    input.type = 'number';
    input.max = 9;
    input.min = 1;

    return input;
}

export function generateEmptyTable(){
    let table = document.querySelector('table');

    for (let index = 0; index < 9; index++) {
        let rowValues = generateSudokuMap();
        let row = document.createElement('tr');
        rowValues.forEach(value => {
            let input = generateInput(value);
            row.appendChild(input);
        });

        table.appendChild(row);
    }
}

export function generateGameTable(){
    document.querySelectorAll('input').forEach( input => {
        
        let number = generateRandomNumber(); //test
        
        if(number - 1 > 3){
            input.value = number;
            input.setAttribute('disabled', '');
        } else {
            input.value = '';
            input.removeAttribute('disabled');
        }
    })
}