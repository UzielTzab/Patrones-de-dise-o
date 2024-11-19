
import CardPatrones from './components/CardPatrones';
import { FaEye, FaBox, FaChartBar, FaBath, FaChalkboardTeacher, FaAcquisitionsIncorporated } from 'react-icons/fa';

function App() {

  const patrones = [
    { name: 'Observer', description: 'Simulación de un Stock en disminución que es escuchada por otros componentes', route: '/observer', icon: <FaEye size={24} color="cyan" /> },
    { name: 'Singleton', description: 'Descripción del Patrón 2', route: '/singleton', icon: <FaBox size={24} color="green" /> },
    { name: 'Strategy', description: 'Simulación de tipo de envío deseado', route: '/strategy', icon: <FaChartBar size={24} color="yellow" /> },
    { name: 'Command', description: 'Simulación de deshacer y rehacer cambios', route: '/command', icon: <FaChalkboardTeacher size={24} color="red" /> },
    { name: 'Patrón 5', description: 'Descripción del Patrón 5', route: '/about/pattern5', icon: <FaEye size={24} color="pink" /> },
    { name: 'Patrón 6', description: 'Descripción del Patrón 6', route: '/about/pattern6', icon: <FaAcquisitionsIncorporated size={24} color="purple" /> },
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
            icon={patron.icon} // Asegúrate de pasar el icono aquí
          />
        ))}
      </div>
    </div>
  );
}

export default App;