
const geradorFuncionario = (nomeCompleto) => {
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
  
  console.log(novoFuncionario(geradorFuncionario));
