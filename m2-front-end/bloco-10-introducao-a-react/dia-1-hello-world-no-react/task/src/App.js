import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskArray = ['acordar', 'beber água', 'caminhada', 'tomar café com ghii', 'devocional', 'codar', 'almoçar'];

function App() {
  return (
    <div className="App">
      <ol>
      {taskArray.map(item => Task(item))}
      </ol>
    </div>
  );
}

export default App;
