import { generateEmptyTable, generateGameTable } from "./view.js";

generateEmptyTable();

document.querySelector('[data-btn="newGame"]').addEventListener('click', ()=>{
    let table = document.querySelectorAll('input');
    for(let input of table){
        input.removeAttribute('disabled');
        
    }
console.log(document.querySelectorAll('input'));



    generateGameTable();
})