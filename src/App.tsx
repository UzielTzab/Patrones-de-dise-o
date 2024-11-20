
import CardPatrones from './components/CardPatrones';
import { FaEye, FaBox, FaChartBar, FaChalkboardTeacher, FaAcquisitionsIncorporated } from 'react-icons/fa';

function App() {

  const patrones = [
    { name: 'Observer', description: 'Simulación de un Stock en disminución que es escuchada por otros componentes', route: '/observer', icon: <FaEye size={24} color="cyan" /> },
    { name: 'Singleton', description: 'Simulación de singleton ', route: '/singleton', icon: <FaBox size={24} color="green" /> },
    { name: 'Strategy', description: 'Simulación de tipo de envío deseado', route: '/strategy', icon: <FaChartBar size={24} color="yellow" /> },
    { name: 'Command', description: 'Simulación de deshacer y rehacer cambios', route: '/command', icon: <FaChalkboardTeacher size={24} color="red" /> },
    { name: 'Bridge', description: 'Simulación de like y dislike', route: '/bridge', icon: <FaAcquisitionsIncorporated size={24} color="pink" /> },

  ];

  return (
    <div className="p-20">
      <h1>Catálogo de patrones de diseño</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-20">
        {patrones.map((patron, index) => (
          <CardPatrones
            key={index}
            name={patron.name}
            description={patron.description}
            route={patron.route}
            icon={patron.icon} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;