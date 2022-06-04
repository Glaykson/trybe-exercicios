function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListitemDia = document.createElement('li');
      dayListitemDia.innerHTML = days;
  
      weekDaysList.appendChild(dayListitemDia);
    };
  };
  
  createDaysOfTheWeek();
  
  //................................. Exercício 1 ................................. 

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


  function criarDiasDoMes() {
    let listaDosDias = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let dia = dezDaysList[index];
      let itemDia = document.createElement('li');
  
      if (dia === 24 | dia === 31) {
        itemDia.className = 'day holiday';
        itemDia.innerHTML = dia;
        listaDosDias.appendChild(itemDia);
      } else if (dia === 4 | dia === 11 | dia === 18) {
        itemDia.className = 'day friday';
        itemDia.innerHTML = dia;
        listaDosDias.appendChild(itemDia);
      } else if (dia === 25) {
        itemDia.className = 'day holiday friday';
        itemDia.innerHTML = dia;
        listaDosDias.appendChild(itemDia);
      } else {
        itemDia.innerHTML = dia;
        itemDia.className = 'day';
        listaDosDias.appendChild(itemDia);
      }
    };
  };

  criarDiasDoMes();


//................................. Exercício 2 .................................   

function criarBotaoFeriados(nomeDoBotao) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let novoBotao = document.createElement('button');
  let idBotao = "btn-holiday" 
  novoBotao.innerHTML = nomeDoBotao;
  novoBotao.id = idBotao;
  buttonsContainer.appendChild(novoBotao); 
}

criarBotaoFeriados('Feriados');


//................................. Exercício 3 .................................   

function diasFeriados() {
  let botaoFeriados = document.querySelector('#btn-holiday');
  let feriados = document.querySelectorAll('.holiday')
  let corInicial = 'rgb(238,238,238)';
  let novaCor = 'rgb(218, 170, 154)';
    
  botaoFeriados.addEventListener('click', function() {
    for (let index = 0; index < feriados.length; index += 1) {
      if (feriados[index].style.backgroundColor === novaCor) {
        feriados[index].style.backgroundColor = corInicial;
      } else {
        feriados[index].style.backgroundColor = novaCor;
      }
    }
  })
};
  
diasFeriados();


//................................. Exercício 4 .................................   

function criarBotaoSexta(sexta) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let botaoSexta = document.createElement('button');
    let idBotaoSexta = "btn-friday" 
    botaoSexta.innerHTML = sexta;
    botaoSexta.id = idBotaoSexta;
    buttonsContainer.appendChild(botaoSexta); 
  }
  
  criarBotaoSexta('Sexta-feira')


//................................. Exercício 5 .................................   

function diasDeSexta(arraySextas) {
    let buscarBotaoSexta = document.querySelector('#btn-friday');
    let sextas = document.getElementsByClassName('friday');
    let novoTextoSexta = 'Sextou!';
  
    buscarBotaoSexta.addEventListener('click', function() {
    for (let index = 0; index < sextas.length; index += 1) {
      if (sextas[index].innerHTML !== novoTextoSexta) {
          sextas[index].innerHTML = novoTextoSexta;
      } else {
          sextas[index].innerHTML = arraySextas[index];
        }
      }
    })
  };
  
  let sextasDeDezembro = [ 4, 11, 18, 25 ];
  diasDeSexta(sextasDeDezembro);


//................................. Exercício 6 .................................   

function mouseNoDia() {
    let dias = document.querySelector('#days');
  
    dias.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function tirarMouse() {
    let dias = document.querySelector('#days');
  
    dias.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  mouseNoDia();
  tirarMouse();


//................................. Exercício 7 .................................   

function novaTarefa(texto) {

    let minhasTarefas = document.querySelector('.my-tasks');
    let tarefa = document.createElement('span');
  
    tarefa.innerHTML = texto;
    minhasTarefas.appendChild(tarefa);
  };
  
  novaTarefa('Projeto Pixels Art');

//................................. Exercício 8 .................................   

function novaCorTarefa(color) {

  let minhaTarefa = document.querySelector('.my-tasks');
  let novaTarefa = document.createElement('div');

  novaTarefa.className = 'task';
  novaTarefa.style.backgroundColor = color;
  minhaTarefa.appendChild(novaTarefa);
};

novaCorTarefa('green');

    
//................................. Exercício 9 .................................   

function classeTarefa() {
    let clicarTarefa = document.getElementsByClassName('task selected');
    let umaTarefa = document.querySelector('.task');
  
    umaTarefa.addEventListener('click', function(event) {
      if (clicarTarefa.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  classeTarefa();


//................................. Exercício 10 .................................   

function corDoDia() {
  let clicarTarefa = document.getElementsByClassName('task selected');
  let dias = document.querySelector('#days');
  let maisTarefa = document.querySelector('.task');
  let corTarefa = maisTarefa.style.backgroundColor;
  
  dias.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (clicarTarefa.length > 0 && eventTargetColor !== corTarefa) {
      let color = clicarTarefa[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === corTarefa && clicarTarefa.length !== 0) {
      event.target.style.color = 'rgb(119,1b19,119)';
    }
  });
};

corDoDia();

//................................. Bônus .................................   

function adNovaTarefa() {
  let chamarEntrada = document.querySelector('#task-input');
  let adBotaoEntrada = document.querySelector('#btn-add');
  let chamarListaTarefas = document.querySelector('.task-list');

  adBotaoEntrada.addEventListener('click', function() {
    if (chamarEntrada.value.length > 0) {
      let novaLista = document.createElement('li');
      novaLista.innerText = chamarEntrada.value;

      chamarListaTarefas.appendChild(novaLista);
      chamarEntrada.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  chamarEntrada.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && chamarEntrada.value.length > 0) {
      let novaLista = document.createElement('li');
      novaLista.innerText = chamarEntrada.value;
     
      chamarListaTarefas.appendChild(novaLista);
      chamarEntrada.value = '';
    }
  });
};

adNovaTarefa();

