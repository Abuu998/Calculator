// Variables
const symbole = document.getElementsByClassName('symbole');
const numbers = document.getElementsByClassName('number');
const clear = document.getElementById('clear');
const screen = document.getElementById('text');
const results = document.getElementById('results');
const add = document.getElementById('add');
const subst = document.getElementById('subst');
const mult = document.getElementById('mult');
const div = document.getElementById('subst');
const percent = document.getElementById('percent');
const egal = document.getElementById('egal');

const val = screen.value;
console.log(val);

// The clear button
clear.addEventListener('click', () => {
  screen.innerText = '';
})

// for The numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => {
      const text = numbers[i].innerText;
    screen.innerText += text;
  });
}

// Symboles
for (let i = 0; i < symbole.length; i++) {
  symbole[i].addEventListener('click', () => {
    const text = symbole[i].innerText;
      screen.innerText += text;
  });
}

const num1 = Number(screen.innerText);
