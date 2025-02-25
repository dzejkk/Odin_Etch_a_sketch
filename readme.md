# Odin project - Project - Etch the sketch

## this was tought one, lol ....

### explanation behind the scenes

1. with flex it is not posible to scale boxes evenly
2. you must use JS to calculte width and height of the one box
3. then you must use for loop which will run number of times of number of boxes in your grid

<code>
const cellSize = 960 / size</code>

960 is the fixed width and height of the grid container (in pixels).
This line calculates the size of each individual cell in the grid, based on how many cells you want (size).
Example: If size = 16, it calculates how big each cell should be to fit inside the container:
Copy
Edit
960 / 16 = 60px
So, each cell will be 60px wide and high.

<hr />

<code>
for (let i = 0; i < size * size; i++)</code>

This is a loop that runs for the number of times you need to create cells in the grid.
If size = 16, this loop will run 16 _ 16 = 256 times (for each cell in the grid).
let i = 0; starts the loop at 0.
i < size _ size; means the loop will keep running until it reaches the total number of cells.
i++ increases i by 1 each time, so it loops through each iteration.

### added eraser funcionality
