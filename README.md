# Carbon Tracing Simulator

This project is a React-based web application designed to visualize labeled carbons in different steps of the Tricarboxylic Acid (TCA) cycle. The application leverages the Ruffle player to display `.swf` files, making it suitable for visualizing old Flash-based animations.

## Features
- Dynamic layout adjusting to mobile or desktop viewports.
- Visualizes SWF content related to the TCA cycle.
- Displays the current Frames Per Second (FPS) and Browser Information in the footer.

## Installation and Setup

1. **Prerequisites**:
   - Ensure you have [Node.js](https://nodejs.org/) installed (version 12 or above recommended).

2. **Clone the repository**:

    ```bash
    git clone https://github.com/Oct4Pie/carbon-tracing.git
    cd carbon-tracing-simulator
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Run the application**:

    ```bash
    npm start
    ```

5. The application should now be running on `http://localhost:3000/`.

## Usage

1. **Desktop**: Two `.swf` visualizations will be displayed in succession.
2. **Mobile**: The two `.swf` visualizations will be available through a swipeable carousel.

## File Structure

- `App.js`: Contains the main application logic, layout, and structure.
- `App.css`: Contains styling related to the application.
- `SWF/`: Directory containing `.swf` files for the visualization. Currently, it includes `c0.swf` and `c1.swf`.

## Dependencies

- [React](https://reactjs.org/): A JavaScript library for UI
- [MUI (previously Material-UI)](https://mui.com/): React UI framework.
- [Ruffle](https://ruffle.rs/): A Flash Player emulator built in Rust, for rendering `.swf` files.
- [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel): A responsive carousel component for React.

## Contributing

Please read the CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to the repository.

## Acknowledgements

- Thanks to the [Ruffle project](https://ruffle.rs/) for making it possible to run old Flash-based simulations in modern browsers without Flash Player.

---
