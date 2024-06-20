import { generateSudokuMap,generateRandomNumber } from "./functions.js";

function generateInput(value){
    let input = document.createElement('input');
    input.disabled = false;
    input.value = value;

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

}