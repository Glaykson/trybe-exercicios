
// ................... Exercício 1 ...................

/* const gerarFuncionario = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${email}@trybe.com` };
}

const novoFuncionario = (callback) => {
    const funcionario = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),      
    }
    return funcionario;
  };
  
  console.log(novoFuncionario(gerarFuncionario));

// ................... Exercício 2 ...................

const verificaNum = (meuNum, num) => meuNum === num;
const numSorteado = (meuNum, verifica) => {
  const num = Math.floor(Math.random() * 5) + 1;
  return verifica(meuNum, num) ? 'Parabéns você ganhou!' : 'Tente novamente';
};
console.log(numSorteado(3, verificaNum));
 */
// ................... Exercício 3 ...................

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const comparaRespostas = (respostaCerta, respostaDoAluno) => {
  if (respostaCerta === respostaDoAluno) {
    return 1;
  } if (respostaDoAluno === 'N.A') {
    return 0;
  }
  return -0.5;
};

const contaPontos = (respostasCorretas, respostasDoEstudante, compara) => {
  let contador = 0;
  for (let i = 0; i < respostasCorretas.length; i += 1) {
    const retornaComparacao = compara(respostasCorretas[i], respostasDoEstudante[i]);
    contador += retornaComparacao;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(contaPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaRespostas));

