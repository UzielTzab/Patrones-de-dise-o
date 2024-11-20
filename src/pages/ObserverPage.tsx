import React from "react";
import { useCounter } from './CounterContext';
import { FaChartArea } from 'react-icons/fa';
import ButtonReturnToMenu from "../components/ButtonReturnToMenu";

const ObserverPage: React.FC = () => {
  const { count, increment, decrement } = useCounter();

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
         <ButtonReturnToMenu/>
        </div>
      </div>
    </>
  );
};

export default ObserverPage;