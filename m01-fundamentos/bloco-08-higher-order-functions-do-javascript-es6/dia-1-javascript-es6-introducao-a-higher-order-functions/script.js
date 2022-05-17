
// ................... Exercício 1 ...................

const gerarFuncionario = (nomeCompleto) => {
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

