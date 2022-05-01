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

  