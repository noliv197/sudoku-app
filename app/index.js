import { generateEmptyTable, generateGameTable, checkInputs } from "./view.js";

generateEmptyTable();

document.querySelector('[data-btn="newGame"]').addEventListener('click', ()=>{
    generateGameTable();
})

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', checkInputs);
});

checkInputs();