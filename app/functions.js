// Generate random number between idx range
function generateRandomNumber(idx){
  return  Math.floor( Math.random() * ( idx + 1 ) );
}

// Get array and shuffles values
function shuffle(arr) {
  // starts from the last element of the array
  for (let i = arr.length - 1; i > 0; i--) {
    //  For each iteration, get an random index
    const j = generateRandomNumber(i);
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
