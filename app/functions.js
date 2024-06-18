export function generateRandomNumber(){
    return Math.floor(Math.random() * 9) + 1;
}


export function generateSudokuMap(value=''){
    return new Array(9).fill(value);
}