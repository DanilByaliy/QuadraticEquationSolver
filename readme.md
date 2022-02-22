# Quadratic equations solver

The application can solve quadratic equations. It works in two modes. The first is non-interactive if the user passes the parameter (path to the number file) when starting the program. The second is interactive, if no additional parameter has been provided, then the user is asked to enter 3 values of variables in manual mode.


## Installation


1. Clone the repo:
   ```sh
   git clone https://github.com/DanilByaliy/QuadraticEquationSolver.git
   ```
2. Open project directory and install NPM packages:

   ```sh
   cd QuadraticEquationSolver
   npm install
   ```

3. Start the application:

  Interactive mode:

   ```sh
   node index.js
   ```
  Non-interactive mode:

   ```sh
   node index.js text.txt
   ```


### Non-interactive mode

In non-interactive mode, the application does not interact with the user, but with the file in which the values of variables are specified. To work correctly, you need to transfer the correct file name when starting the program. The file must also be in a clear format. Numbers must be written in one space, and at the end there must be a newline (1 0 0 === 1\s0\s0\n). If the path to the file is specified incorrectly or the file format does not match the one described above, then the program will crash.


### Revert-commit

[Link to this commit](https://github.com/DanilByaliy/QuadraticEquationSolver/commit/7ae284fe4d281a686785c5f22b4f98c1989cc46c)
                      