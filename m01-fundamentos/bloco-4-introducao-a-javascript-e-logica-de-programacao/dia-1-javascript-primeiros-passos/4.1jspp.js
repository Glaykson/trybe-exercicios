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


// exercício - 07

const nota = 45;

if (nota < 0 || nota > 100) {
  console.log('Erro: nota inesistente');
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}


// exercício - 08


const a = 4;
const b = 9;
const c = 11;

let par = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  par = true;
};
console.log(par);



// exercício - 09


const a = 4;
const b = 10;
const c = 20;

let impar = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  impar = true;
};
console.log(impar);


// exercício - 10


const custoDoProduto = 5;
const valorDeVenda = 7.5;

if (custoDoProduto >= 0 && valorDeVenda >= 0) {
  const custoTotalDoProduto = custoDoProduto * 1.2;
  const lucro = (valorDeVenda - custoTotalDoProduto) * 1000;
  console.log(lucro);
} else {
  console.log("Erro: os valores não podem ser negativos");
}


// exercício - 11

let inss;
let ir;

let salarioBruto = 3500;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = salarioBruto + 570.88;
}


let salarioLiquido = salarioBruto - inss;

if (salarioLiquido <= 1903.98) {
  ir = 0;
} else if (salarioLiquido <= 2826.65) {
  ir = (salarioLiquido * 0.075) - 142.80;
} else if (salarioLiquido <= 3751.05) {
  ir = (salarioLiquido * 0.15) - 354.80;
} else if (salarioLiquido <= 4664.68) {
  ir = (salarioLiquido * 0.225) - 636.13;
} else {
  ir = (salarioLiquido * 0.275) - 869.36;
};

console.log('Salario Líquido: ' + (salarioLiquido - ir));







