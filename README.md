# Compiler
Online Code Compiler

An online code compiler that allows users to write, compile, and execute code in multiple programming languages, including JavaScript, Python, C++, and Java.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation and Setup](#installation-and-setup)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Features
- Supports multiple programming languages: JavaScript, Python, C++, and Java.
- Provides an intuitive user interface for code input and output display.
- Handles code compilation and execution on the server side using Node.js.
- Clean and modular code structure with separated HTML, CSS, and JavaScript files.
- Responsive design for better usability on various screen sizes.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Compilers/Interpreters**: 
  - `node` for JavaScript
  - `python3` for Python
  - `g++` for C++
  - `javac` for Java

## Project Structure

online-compiler/ ├── frontend/ │   ├── index.html       # Frontend HTML file │   ├── style.css        # Styling for the frontend │   └── script.js        # JavaScript logic for frontend interactions ├── backend/ │   ├── app.js           # Node.js backend entry point │   ├── routes/ │   │   └── compile.js   # Route for handling compile requests │   └── controllers/ │       └── compilerController.js  # Controller for code compilation and execution └── README.md            # Documentation for the project

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- `gcc` (for C++ compilation)
- `python3` (for Python code execution)
- `javac` (for Java code compilation)
- Git (for version control)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Adityasiig/Compiler.git

2. Navigate to the project directory:
   ```bash
   cd Compiler


3. Install the backend dependencies:
   ```bash
   cd backend
   npm install


4. Start the backend server:
    ```bash
   node app.js


5. Open frontend/index.html in your web browser to access the online compiler.



Usage

1. Open the online compiler in your browser.


2. Select the programming language from the dropdown menu.


3. Write your code in the text area.


4. Click on the Run Code button.


5. The output will be displayed in the designated output area below.



Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.


2. Create a new branch (feature-branch-name).


3. Commit your changes (git commit -m 'Add new feature').


4. Push to the branch (git push origin feature-branch-name).


5. Open a pull request.



License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

If you have any questions or feedback, feel free to reach out:

Email: adityaajaysingh0104@gmail.com

GitHub: https://github.com/Adityasiig
