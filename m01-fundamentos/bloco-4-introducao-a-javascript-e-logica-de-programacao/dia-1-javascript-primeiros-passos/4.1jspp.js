// exercício - 01

const a = 20;
const b = 10;

console.log("soma: " + (a + b));
console.log("subtração: " + (a - b));
console.log("multiplicação: " + (a * b));
console.log("divisão: " + (a / b));
console.log("módulo: " + (a % b));


// exercício - 02

const x = 5;
const y = 15;

if (x > y) {
    console.log("'x' é maior que 'y'");
} else {
    console.log("'y' é maior que 'x'");
}


// exercício - 03

const a = 5;
const b = 20;
const c = 10;

if (a > b && a > c) {
  console.log('O maior número é: ' + a);
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b);
} else {
  console.log('O maior número é: ' + c);
}


// exercício - 04

const numero = 15;

if (numero > 0) {
  console.log('positive');
} else if (numero < 0) {
  console.log('negative');
} else {
  console.log('zero');
}


// exercício - 05

const anguloA = 70;
const anguloB = 50;
const anguloC = 60;

let somaDosAngulos = anguloA + anguloB + anguloC;

let angulosTodosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosTodosPositivos) {
  if (somaDosAngulos === 180) {
    console.log(true); 
  } else {
  console.log(false);
  };
  } else {
  console.log('Angulo inválido');
}


// exercício - 06

let pecaDoXadrez = 'Rei';

switch (pecaDoXadrez.toLowerCase()) {
  case 'rei': console.log('Rei -> Em qualquer direção, apenas uma casa por vez');
    break;
  case 'rainha': console.log('Rainha -> Em qualquer direção e quantas casas desejar, desde que estejam livres');
    break;
  case 'torre': console.log('Torre -> Em linha reta na vertical e na horizontal, quantas casas quiser');
    break;
  case 'bispo': console.log('Bispo -> Na diagonal, quantas casas quiser');
    break;
  case 'cavalo': console.log('Cavalo -> Movimenta-se em L, sendo uma casa na vertical e duas na horizontal ou o contrario');
    break;
  case 'peão': console.log('Peão -> Sempre para frente, no primeiro movimento duas casas, depois apenas uma por vez');
    break;
  default: console.log('Erro: peça inválida')
}