import { generateEmptyTable, generateGameTable } from "./view.js";

generateEmptyTable();

document.querySelector('[data-btn="newGame"]').addEventListener('click', ()=>{
    generateGameTable();
})