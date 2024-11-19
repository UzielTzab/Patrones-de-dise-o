// CounterContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface CounterContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextProps | undefined>(undefined);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  useEffect(() => {
    const interval = setInterval(decrement, 3000);
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};