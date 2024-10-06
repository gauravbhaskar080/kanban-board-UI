
# Quicksell Frontend Assignment - Kanban Board

## Introduction

This project is an interactive Kanban board application built with React JS. It allows users to visualize and manage tickets dynamically, offering various grouping and sorting options. The application interacts with a provided API to fetch and display ticket data in a user-friendly interface.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

[Link to Demo](https://gb-kanban.vercel.app/)

## Features

- Dynamic Kanban board that adjusts based on user preferences
- Three grouping options:
  - **By Status**
  - **By User**
  - **By Priority**
- Two sorting options:
  - **Priority** (descending order)
  - **Title** (ascending order)
- Responsive and visually appealing design
- State persistence across page reloads

### Priority Levels

- **Urgent** (Priority level 4)
- **High** (Priority level 3)
- **Medium** (Priority level 2)
- **Low** (Priority level 1)
- **No priority** (Priority level 0)

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/gauravbhaskar080/Quicksell-Frontend-Assignment.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Quicksell-Frontend-Assignment
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## Usage

1. Open the application in your web browser.
2. Click the "display" button to view grouping options.
3. Select a grouping option (Status, User, or Priority) to organize the Kanban board.
4. Use the sorting options to arrange tickets by Priority or Title.
5. Interact with the Kanban board to manage and view ticket information.

## File Structure
```bash
Quicksell-Frontend-Assignment/ # Contains the React Project.
│
├── public/                    # Static files (CSS, images, etc.)
│   └── ...                    # Other public files
│
├── src/                       # Main source code
│   ├── Assets/                # Icons, images, etc.
│   │   └── ...                # SVG Icons, etc.
│   │
│   ├── Components/            # Reusable React components
│   │   ├── DisplayCard/       # Card components
│   │   │   └── DisplayCard.js # Card component code
│   │   ├── DisplayList/       # List components
│   │   │   └── DisplayList.js # List of cards
│   │   └── Header/            # Header components
│   │       └── Header.js      # Header code
│   │
│   ├── Pages/                 # Page components
│   │   └── HomePage.js        # Homepage code
│   │
│   ├── Stylesheets/           # CSS for styling components
│   │   ├── DisplayCard.css    # Card styles
│   │   ├── DisplayList.css    # List styles
│   │   ├── Header.css         # Header styles
│   │   └── HomePage.css       # Homepage styles
│   │
│   ├── App.js                 # Main App component
│   ├── index.js               # Entry point of the React app
│   └── index.css              # Global styles
│
├── .gitignore                 # Files/folders to ignore in git
├── package-lock.json          # Dependency lock file
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation

```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the original repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.
