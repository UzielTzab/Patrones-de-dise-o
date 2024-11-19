import React from "react";
import { useNavigate } from "react-router-dom";
import { useCounter } from '../pages/CounterContext';
import { FaChartArea } from 'react-icons/fa';

const CounterPage: React.FC = () => {
  const { count, increment, decrement } = useCounter();
  const navigate = useNavigate();

  return (
    <>
      <div className="p-20">
        <FaChartArea className="text-8xl text-yellow-500" />  
        <h1>SIMULACIÓN DE INVENTARIO</h1>
        <h2>El inventario disminuye su cantidad, mientras el header y footer los observa para mantenerse actualizados.</h2>
        <p className="pt-10 text-2xl">Valor actual: {count} u</p>
        <div className="space-x-4">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button
            className="bg-yellow-500 text-black px-4 py-2 mt-4"
            onClick={() => navigate('/')}
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterPage;