import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Almoço com amigos', 'Dentista', 'Reunião com diretoria', 'Buscar filho na escola'];
const listaDeTarefas = compromissos.map((item) => Task(item));

function App() {
  return <div>
    <ol>
      {listaDeTarefas}
    </ol>
  </div>
}

export default App;
