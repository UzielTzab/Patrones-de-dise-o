import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {FaCalculator} from 'react-icons/fa';
import ButtonReturnToMenu from "../components/ButtonReturnToMenu";

interface ShippingStrategy {
  calculateCost: (packageValue: number) => number;
}

class StandardShipping implements ShippingStrategy {
  calculateCost(packageValue: number): number {
    return 50; 
  }
}

class ExpressShipping implements ShippingStrategy {
  calculateCost(packageValue: number): number {
    return 100; 
  }
}

class PlaneShipping implements ShippingStrategy {
  calculateCost(packageValue: number): number {
    return packageValue * 0.3; 
  }
}

class LocalPickup implements ShippingStrategy {
  calculateCost(packageValue: number): number {
    return 0; 
  }
}

const shippingStrategies: { [key: string]: ShippingStrategy } = {
  standard: new StandardShipping(),
  express: new ExpressShipping(),
  plane: new PlaneShipping(),
  local: new LocalPickup(),
};

const StrategyPage: React.FC = () => {
  const navigate = useNavigate();
  const [packageValue, setPackageValue] = useState<number>(0);
  const [shippingType, setShippingType] = useState<string>("standard");
  const [totalCost, setTotalCost] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleCalculate = () => {
    if (packageValue <= 0) {
      setErrorMessage("El valor del paquete no puede estar vacío o ser cero.");
      return;
    }

    const shippingStrategy = shippingStrategies[shippingType];
    const cost = shippingStrategy.calculateCost(packageValue);
    setTotalCost(cost + packageValue);
    setErrorMessage("");
  };

  return (
    <div className="flex flex-col items-center p-20 bg-gray-110 min-h-screen">
      {errorMessage && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4">
          {errorMessage}
        </div>
      )}
      <div className=" flex p-5">
        <FaCalculator className="text-4xl text-yellow-500 p-1" />
        <h1 className="text-2xl font-bold mb-6">Calculadora de Envío</h1>
      </div>
      <p className="pl-80 pr-80 text-center mb-10">El formulario pide únicamente el valor del paquete y el tipo de envió a realizar, internamente es mas mantenible a nivel algorítmico, ya que cada tipo de envío cuenta con una clase.</p>
    
      
      <div className="bg-yellow-500 shadow-md rounded-md p-6 w-96">
        <div className="mb-4">
          <label className="block text-yellow-950 font-bold mb-2">Valor del paquete ($):</label>
          <input
            type="number"
            onChange={(e) => setPackageValue(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-yellow-950 font-bold mb-2">Tipo de envío:</label>
          <select
            value={shippingType}
            onChange={(e) => setShippingType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="standard">Estándar ($50)</option>
            <option value="express">Exprés ($100)</option>
            <option value="plane">Internacional (30% adicional)</option>
            <option value="local">Recoger en tienda (Gratis)</option>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black"
        >
          Calcular
        </button>
      </div>
     
      {totalCost > 0 && (
        <div className="mt-6 bg-green-100 text-green-700 px-4 py-2 rounded-md">
          <p>Costo total a pagar: <strong>${totalCost.toFixed(2)}</strong></p>
        </div>
      )}
      <ButtonReturnToMenu/>
    </div>
  );
};

export default StrategyPage;