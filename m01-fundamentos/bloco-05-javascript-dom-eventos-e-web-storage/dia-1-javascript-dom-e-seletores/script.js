const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const urgente = document.getElementsByClassName('emergency-tasks')[0];
urgente.style.backgroundColor = 'rgb(249, 219, 94)';

const urgenteTopo = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < urgenteTopo.length; index += 1) {
  urgenteTopo[index].style.backgroundColor = 'red';
}

const naoUrgente = document.querySelector('.no-emergency-tasks');
naoUrgente.style.backgroundColor = 'rgb(255, 159, 132)';

const naoUrgenteTopo = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < naoUrgenteTopo.length; index += 1) {
  naoUrgenteTopo[index].style.backgroundColor = 'blue';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';





//'rgb(255, 159, 132)';

//'rgb(249, 219, 94)';