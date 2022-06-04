//      4.2 - JavaScript - Array e loop For

// Exercício 1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log(); 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}  



// Exercício 2 - Some todos os valores contidos no array e imprima o soma;  

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma);



// Exercício 3 - Calcule e imprima a média aritmética dos valores contidos no array;  
// A média aritmética é o soma da soma de todos os elementos divido pelo número total de elementos. 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

let media = soma / numbers.length;
  console.log(media);



// Exercício 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";  

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

let media = soma / numbers.length;

  if (media > 20) {
    console.log('valor maior que 20');
  } else {
    console.log('valor menor ou igual a 20');
  }



// Exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > menorNum) {
    menorNum = numbers[index];
  }
}
console.log(menorNum)



// Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o soma. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";  

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    soma += 1;      
  }
}

if (soma === 0) {
  console.log("nenhum valor ímpar encontrado")
} else {
  console.log(soma)  
}



// Exercício 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorNum) {
    menorNum = numbers[index];
  }
}
console.log(menorNum)



// Exercício 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o soma;

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
    numeros.push(index);
}

console.log(numeros)



// Exercício 9 - Utilizando o array criado no exercício anterior imprima o soma da divisão de cada um dos elementos por 2 . 

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
    numeros.push(index);
}

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
  };

