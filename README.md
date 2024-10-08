# Etch A Sketch Project

A web-based Etch A Sketch game built as part of [The Odin Project](https://www.theodinproject.com) curriculum. This project allows users to draw by hovering over a grid of squares, change the drawing color, and adjust the grid size.

## Demo

You can access a live version of the Etch A Sketch [here](https://champy0527.github.io/etch-a-sketch).

## Features

- Draw on the grid by hovering over the squares.
- Change the color of the pen, including a "random" color option for fun effects.
- Reset the grid to start over.
- Resize the grid for more precise or broader drawings.

## Technologies Used

- **HTML**: Structure of the page.
- **CSS**: Styling for the grid and layout.
- **JavaScript**: Logic for drawing, resetting, changing colors, and resizing the grid.

## Getting Started

To run the Etch A Sketch locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/champy0527/etch-a-sketch.git
    ```
2. Open `index.html` in your preferred browser.

## Usage

- Use your mouse to hover over the grid and draw.
- Select a color by clicking one of the color buttons. The "random" option will create a new random color each time you draw.
- Use the "Reset" button to clear the board.
- Enter a new size in the input box and click "Submit" to change the grid size.

## Code Overview

- **`populateGridBoard(size)`**: Populates the grid with the specified size, creating a dynamic grid structure and adding event listeners for drawing.
- **Color Change Feature**: Users can select from preset colors or opt for a random color, which is generated by the `randomColorPen` function.
- **Reset Feature**: Clears all grid squares and removes the grid, preparing it for a new drawing session.
- **Grid Size Adjustment**: Users can specify a grid size, making it flexible for different levels of drawing precision.

## Lessons Learned

- Practiced DOM manipulation to dynamically create and modify elements.
- Enhanced understanding of CSS Grid for flexible layout.
- Implemented user interactions through JavaScript event listeners.
- Improved JavaScript skills related to handling user input and performing real-time updates.

## Future Improvements

- Implement the ability to draw with different brush sizes.
- Add an eraser tool for more precise corrections.
- Improve responsiveness and add support for touch events to enable drawing on mobile devices.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for any improvements or bug fixes.

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com) for providing the project inspiration and learning resources.
- Various online resources and communities for guidance and support during development.
