# Sudoko App

## About the Project
- **Play the game:** [Sudoku App](https://sudoku-app-olive.vercel.app)
- **Challenge:** develop a sudoku game board that allows the user to play and validate the game at the end;

- **Logic:** 
1. For each new game generate a solved sudoku grid;
    - Every time a new game is requested, the generateGameTable() function will use a 9x9 grid filled with zeros and recursively fill each position checking if the sudoku rules are being followed;
    - This function is called everytime the start new game or the level buttons are clicked;
    - The default difficulty is easy;
2. Hide random positions for each block cell according to the difficulty;
    - Using the solved grid as an input the hideCells() function shuffle the coordinates of each block on the grid and empty the number on that grid position. The number of positions to be hidden is set by the level difficulty;
3. Validate the game;
    - The validateBoard() function gets the user board and recreates it as a grid. Then Each sudoku rule is validated, unique numbers on the rows, columns and cells;
    - The validation will be available when the entire game is filled;
    - Everytime the validate button is clicked the solution is validated and a failure or success message will be displayed;

- **Group**

|Diego Cevallos|Natalia Oliveira|
|------------|----------------|
|<img src="https://github.com/dieceva.png" alt="Erick Palombo" width="75">|<img src="https://github.com/noliv197.png" alt="Natalia Oliveira" width="75">|
|[@dieceva](https://github.com/dieceva)|[@noliv197](https://github.com/noliv197)|
