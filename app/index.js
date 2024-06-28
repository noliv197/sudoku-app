import { generateEmptyTable, generateGameTable, checkInputs, changeDifficulty, validateUserInput } from "./view.js";

generateEmptyTable();

document.querySelector('[data-btn="newGame"]').addEventListener('click', ()=>{
    let levelButton = document.querySelector('button.selected')
    switch(levelButton.name){
        case 'easy':
            generateGameTable(5);
            break;
        case 'medium':
            generateGameTable(6);
            break;
        case 'hard':
            generateGameTable(7);
            break;
    }
})

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', checkInputs);
    input.addEventListener('keypress', (e) => validateUserInput(e))
});

document.querySelectorAll('button.btn-level').forEach(button =>{
    button.addEventListener('click', (e) => changeDifficulty(e))
})