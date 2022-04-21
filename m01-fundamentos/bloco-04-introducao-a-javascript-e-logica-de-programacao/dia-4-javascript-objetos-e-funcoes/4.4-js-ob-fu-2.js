//      4.2 - JavaScript - Objetos e funções

// Parte II - Funções


// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromeOuNao(ovo){
    for(index in ovo) {
      if(ovo[index] != ovo[(ovo.length - 1) - index]){
        return false;
      }
    }
    return true;
  }
  
  console.log(palindromeOuNao('ovo'));


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

function maiorDoIndice(array) {
    let indiceMaior = 0;
    for (let indice in array) {
      
      if (array[indiceMaior] < array[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
}
  
    console.log(maiorDoIndice([2, 3, 6, 7, 10, 1]));


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 

function menorDoIndice(array) {
    let indiceMenor = 0;
    for (let indice in array) {
      
      if (array[indiceMenor] > array[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
}
  
    console.log(menorDoIndice([2, 4, 6, 7, 10, 0, -3]));


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

function maisCaracteres(nomes) {
  let maisCaracteres = nomes[0];
  for (let indice in nomes) {
    if (maisCaracteres.length < nomes[indice].length) {
        maisCaracteres = nomes[indice];
    }
  }
    return maisCaracteres;
}
  
console.log(maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));



// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 

function maisRepetido(array) {
    let num = {};
  
    for (let index = 0; index < array.length; index += 1) {
      let valor = array[index];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) {
      if (contRepetido < num[prop]) {
        contRepetido = num[prop];
        contNumero = prop;
      }
    }
  
    return contNumero;
}
  
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));




// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N. 

function somaDosNumeros(numeros) {
    let resultado = 0;
    for (let index = 1; index <= numeros; index += 1) {
      resultado = resultado + index;
    }
    return resultado;
  }
  console.log(somaDosNumeros(5));


// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function checkWordEnding(word, wordEnding) {
    word = word.split('');
    wordEnding = wordEnding.split('');
    control = true;
    for (let index = 0; index < wordEnding.length; index += 1) {
      if (word[word.length - wordEnding.length + index] != wordEnding[index]) {
        control = false;
      }
    }
    return control;
}
     
console.log(checkWordEnding('trybe', 'be'));
console.log(checkWordEnding('joaofernando', 'fernan'));
