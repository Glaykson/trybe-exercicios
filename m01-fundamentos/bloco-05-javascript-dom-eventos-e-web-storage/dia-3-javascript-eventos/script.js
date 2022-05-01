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

