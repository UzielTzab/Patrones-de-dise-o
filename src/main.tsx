import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';

import App from './App';
import CounterPage from './pages/ObserverPage';
import { CounterProvider } from './logic/CounterContext';
import NavHeader from './components/NavHeader';
import StrategyPage from './pages/StrategyPage';
import CommandPage from './pages/CommandPage';
import FooterMain from './components/FooterMain';
import { SingletonPattern } from './pages/SingletonPage';
import StructurePage from './pages/BridgePage';
import ObserverPage from './pages/ObserverPage';
import BridgePage from './pages/BridgePage';

function RouteComponent() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
        <Route path='/' element={
          <motion.div
            className="min-h-screen flex flex-col w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <App />
          </motion.div>
        } />
        <Route path='/observer' element={
          <motion.div
            className="min-h-screen flex flex-col w-full"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: -1000 }}
          >
            <ObserverPage />
          </motion.div>
        } />
        <Route path='/strategy' element={
          <motion.div
            className="min-h-screen flex flex-col w-full"
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <StrategyPage />
          </motion.div>
        } />
         <Route path='/command' element={
          <motion.div
            className="min-h-screen flex flex-col w-full"
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <CommandPage />
          </motion.div>
        } />
          
         <Route path='/singleton' element={
          <motion.div
            className="min-h-screen flex flex-col w-full"
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <SingletonPattern />
          </motion.div>
        } />
         <Route path='/bridge' element={
          <motion.div
            className="min-h-screen flex flex-col w-full"
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <BridgePage />
          </motion.div>
        } />
      </Routes>
      
    </AnimatePresence>
  );
}

function Main() {
  return (
    <Router>
      <CounterProvider>
        <NavHeader />
        <RouteComponent />
        <FooterMain />
      </CounterProvider>
    </Router>
  );
}

const root = document.getElementById('root');
if (root) {
  const rootElement = createRoot(root);

  rootElement.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
} else {
  console.error("El elemento con id 'root' no fue encontrado en el DOM.");
}