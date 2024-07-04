import { generateSudokuMap, generateSudokuGrid, isValueNumber, hideCells, validateBoard } from "./functions.js";

// Create Default Input Element
function generateInput(value){
    let input = document.createElement('input');
    input.disabled = true;
    input.value = value;
    input.type = 'number';
    input.max = 9;
    input.min = 1;

    return input;
}

export function checkInputs() {
    // Select all input elements with the class 'input-field'
    const inputs = document.querySelectorAll('input');
        let allValid = true;

        // Loop through the inputs and check if they all have valid values
        inputs.forEach(input => {
            if (!isValueNumber(input.value)) {
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

export function validateUserInput(event){
    if(event.keyCode < 49 || event.keyCode > 57){
        event.preventDefault();
    } else if(event.target.value){
        event.target.value = '';
    }
}

export function changeDifficulty(event){
    document.querySelector('button.selected').classList.remove('selected');
    event.target.classList.add('selected');
    switch(event.target.name){
        case 'easy':
            generateGameTable(3);
            break;
        case 'medium':
            generateGameTable(4);
            break;
        case 'hard':
            generateGameTable(5);
            break;
    }
}

// Generate Default Table to Start Application
export function generateEmptyTable(){
    let table = document.querySelector('table');
    // Generate 9x9 Grid with empty values
    let emptySudokuGrid = generateSudokuMap();

    emptySudokuGrid.forEach(row => {
        //Create Tr Element for each grid row
        let tableRow = document.createElement('tr');
        row.forEach(value => {
            // Create input element for each row column
            let input = generateInput(value);
            tableRow.appendChild(input);
        });
    
        table.appendChild(tableRow);
    });
}

export function generateGameTable(difficulty){
    document.querySelectorAll('h2').forEach(message =>{
        message.style.display = 'none';
    })
    document.querySelector('#validate-button').setAttribute('disabled','')
    // Genarate solved sudoku grid :D
    let sudokuGrid  = generateSudokuGrid();
    sudokuGrid = hideCells(sudokuGrid,difficulty);
    const rows = document.querySelectorAll('tr');

    rows.forEach((row, rowIndex) => {
        const rowCells = row.children;
        // Transform element node into array
        Array.prototype.forEach.call(rowCells, (input, cellIndex) => {
            let num = sudokuGrid[rowIndex][cellIndex]

            if(num){ // test
                // if value exists set input value and disable input 
                input.value = num;
                input.setAttribute('disabled', '');
            } else {
                // if value does not exist clear input value and enable input 
                input.value = '';
                input.removeAttribute('disabled');
            }
        });
      });
}


  
  
 