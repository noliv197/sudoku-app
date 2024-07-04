
const blocksCoords=[
  ['00','01','02','10','11','12','20','21','22'],
  ['03','04','05','13','14','15','23','24','25'],
  ['06','07','08','16','17','18','26','27','28'],

  ['30','31','32','40','41','42','50','51','52'],
  ['33','34','35','43','44','45','53','54','55'],
  ['36','37','38','46','47','48','56','57','58'],

  ['60','61','62','70','71','72','80','81','82'],
  ['63','64','65','73','74','75','83','84','85'],
  ['66','67','68','76','77','78','86','87','88'],
]




// Generate random number between idx range
function generateRandomNumber(min,max){
  // return  Math.floor( Math.random() * ( idx + 1 ) );
  return  Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get array and shuffles values
function shuffle(arr) {
  // starts from the last element of the array
  for (let i = arr.length - 1; i > 0; i--) {
    //  For each iteration, get an random index
    const j = generateRandomNumber(0,i);
    // swap the elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Check if the number exists on the row, col and corresponding box
function isValid(grid, num, row, col) {
  // Check if the number already exists in the row or column
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === num || grid[i][col] === num) {
      return false;
    }
  }

  // Check if the number exists in the 3x3 box
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }

  return true;
}

function fillGrid(grid) {
  // iterate through each row of the grid.
  for (let row = 0; row < 9; row++) {
    // iterate through each column of the grid.
    for (let col = 0; col < 9; col++) {

      // If the value is 0 continue to fill
      if (grid[row][col] === 0) {

        // shuffle numbers between 1 to 9 to allow randomized grids
        let numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (let num of numbers) {

          // Check if the number placement follow the rules
          if (isValid(grid, num, row, col)) {
            grid[row][col] = num;
            
            // Recursively fill in the rest of the grid
            if (fillGrid(grid)) {
              return true;
            } else {
              // If the recursive call fails, reset the cell
              grid[row][col] = 0;
            }
          }
        }

        return false;
      }
    }
  }

  // If the entire grid is filled, return true
  return true;
}

///////////////////////////////////////////////////////////
export function isValueNumber(value) {
  // Check if the value is a number
  const isNumber = !isNaN(value) && value.trim() !== '';

  return isNumber;
}

export function generateSudokuMap(value=''){
  let grid = [];
  // Generate 9x9 Grid with value provided
  for (let index = 0; index < 9; index++) {
    grid.push(new Array(9).fill(value));
  }
  return grid;
}

export function generateSudokuGrid() {
  // Generate 9x9 Grid with Zeros
  const grid = generateSudokuMap(0);

  // Fill grid with solved sudoku map
  fillGrid(grid);

  // Implement empty some values
  return grid;
}

export function hideCells(grid, count){
  blocksCoords.forEach(block => {
  let randomPositions = shuffle(block).slice(0,count);

  randomPositions.forEach(position => {
    grid[position[0]][position[1]] = '';
  })

  })
  return grid;
}


function checkUniqueArray(srcArray){
  return srcArray.every((value, index) => srcArray.indexOf(value) === index);
}
// Function to validate the board when player has finished
export function validateBoard(){
  let board = [];
  let allValid = true;
  const rows = document.querySelectorAll('tr');
  
  rows.forEach(row => {
    const rowCells = row.children;
    let rowArray = [];
    // Transform element node into array
    Array.prototype.forEach.call(rowCells, (input) => {
      rowArray.push(input.value);
    })
    board.push(rowArray)
    console.log(board)
  })


  for (let row = 0; row < 9; row++) {
    let tmpBlock = [];
    blocksCoords[row].forEach(block=>{
      tmpBlock.push(board[block[0]][block[1]])
    })
    console.log('theses are blocks'+JSON.stringify(tmpBlock))
    if(!checkUniqueArray(tmpBlock)){
      allValid = false;
      break
    }
    if(!checkUniqueArray(board[row])){
      allValid = false;
      break
    }
    let tmpCol = []
    for (let col = 0; col < 9; col++) {
    tmpCol.push(board[col][row])
    }
    console.log('theses are tmpcol'+JSON.stringify(tmpCol))
    
    if(!checkUniqueArray(tmpCol)){
      allValid = false;
      break;
    }
  }
  return allValid
}
document.querySelector('#validate-button').addEventListener('click',()=>{
  const success = document.querySelector('#success');
  const failure = document.querySelector('#failure');
  let allValid = validateBoard();
  if (allValid === true){
  if (success.style.display === 'none' || success.style.display === ''){
      success.style.display = 'block';
  }else{
      success.style.display = 'none';
  }
  }else if(failure.style.display === 'none' || failure.style.display === ''){
    failure.style.display = 'block';
}else{
    failure.style.display = 'none';

  }})
