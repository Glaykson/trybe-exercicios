// 4.3 - JavaScript - Lógica de Programação e Algoritmos

// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for (index = 10; index > 0; index -= 1) {
  fatorial *= index;  
}
  console.log(fatorial);



// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'glaykson';
let inverter = "";

for (let index = 0; index < word.length; index += 1)
   inverter += word[word.length - 1 - index];

console.log(inverter);


// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index]; 
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}

console.log(maiorPalavra);
console.log(menorPalavra);


// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. 

let maiorNumPrimo = 0;

for (let numAtual = 0; numAtual <= 50; numAtual += 1) {
  let numPrimo = true;
for (let divisorAtual = 2; divisorAtual < numAtual; divisorAtual += 1) {
    if (numAtual % divisorAtual === 0) {
      numPrimo = false;
    }
  }
    if (numPrimo) {
    maiorNumPrimo = numAtual;
    }
}

console.log(maiorNumPrimo);
