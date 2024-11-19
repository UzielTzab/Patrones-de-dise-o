import { useCounter } from '../pages/CounterContext';
import { useNavigate } from 'react-router-dom';

function ObserverPage() {
  const { count } = useCounter();
  const navigate = useNavigate(); // Importar y usar el hook useNavigate

  return (
    <div className="p-20">
      <h1>PATRÓN DE DISEÑO OBSERVER</h1>
      <p>El Stock actual es: {count}</p>
      <button
        className="bg-yellow-500 text-black px-4 py-2 mt-4"
        onClick={() => navigate('/observer')}
      >
        Ir a la página principal
      </button>
    </div>
  );
}

export default ObserverPage;