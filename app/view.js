import { generateSudokuMap, generateSudokuGrid } from "./functions.js";

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

export function generateGameTable(){
    // Genarate solved sudoku grid
    let sudokuGrid  = generateSudokuGrid();
    const rows = document.querySelectorAll('tr');

    rows.forEach((row, rowIndex) => {
        const rowCells = row.children;
        // Transform element node into array
        Array.prototype.forEach.call(rowCells, (input, cellIndex) => {
            let num = sudokuGrid[rowIndex][cellIndex]

            if(num >5){ // test
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