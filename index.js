const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const fs = require('fs');

const rl = readline.createInterface({ input, output });

let a, b, c, x1, x2;

let path = process.argv[2];

function calculate() {
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

  const d = b ** 2 - 4 * a * c;
  if (d < 0) {
    console.log('There are 0 roots');
  } 
  if (d === 0) {
    x1 = -b / (2 * a);
    console.log(`There are 1 roots 
    x1 = ${x1}`);
  }
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log(`There are 2 roots
    x1 = ${x1}
    x2 = ${x2}
    `);
  }
}

function inputA() {
  rl.question('a = ', (answer) => {
    a = Number(answer);
    if (isNaN(a)) {
      console.log(`Error. Expected a valid real number, got ${a} instead`);
      inputA();
    }
    inputB();
  });
}

function inputB() {
  rl.question('b = ', (answer) => {
    b = Number(answer);
    if (isNaN(b)) {
      console.log(`Error. Expected a valid real number, got ${b} instead`);
      inputB();
    }
    inputC();
  });
}

function inputC() {
  rl.question('c = ', (answer) => {
    c = Number(answer);
    if (isNaN(c)) {
      console.log(`Error. Expected a valid real number, got ${c} instead`);
      inputC();
    }
    calculate();
    rl.pause()
  });
}

function readFromFile(path) {
  fs.readFile(path, 'utf8', 
  function(err, contents) {
    if (err) {
      console.log(`file ${path} does not exist`)
      process.exit(1);
    }

    [a, b, c] = contents.split(' ');
    
    a = Number(a);
    if (a === 0) {
      console.log('Error. a cannot be 0');
      process.exit(1);
    }
    b = Number(b);
    c = Number(c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log('invalid file format');
      process.exit(1);
    }

    calculate();
    process.exit(1);
  });
}