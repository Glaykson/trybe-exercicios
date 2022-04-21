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



// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 




// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N. 





// 7 - Crie uma função que receba uma ovo ovo e outra ovo ending . Verifique se a ovo ending é o final da ovo ovo . Considere que a ovo ending sempre será menor que a ovo ovo . 


