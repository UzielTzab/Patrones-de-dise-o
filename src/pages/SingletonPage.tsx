import { useState, useEffect } from "react";
import ConfigService from "../logic/SingletonLogic";
import ButtonReturnToMenu from "../components/ButtonReturnToMenu";

export function SingletonPattern() {
  const [settings, setSettings] = useState<Record<string, string | number | boolean>>({});
  const [newKey, setNewKey] = useState<string>("");
  const [newValue, setNewValue] = useState<string>("");

  useEffect(() => {
    const config = ConfigService.getInstance();
    setSettings(config.getAllSettings());
  }, []);

  const updateSetting = (key: string, value: string | number | boolean) => {
    const config = ConfigService.getInstance();
    config.setSetting(key, value);
    setSettings(config.getAllSettings());
  };

  const addNewSetting = () => {
    if (newKey && newValue) {
      updateSetting(newKey, isNaN(Number(newValue)) ? newValue : Number(newValue));
      setNewKey("");
      setNewValue("");
    }
  };

  return (
    <>
     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Patrón Singleton en React</h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-4">Valor de la configuración:</h2>
        <ul className="bg-gray-50 rounded-lg shadow-inner p-4 mb-6">
          {Object.entries(settings).map(([key, value]) => (
            <li key={key} className="flex justify-between border-b py-2 text-sm text-gray-700">
              <span className="font-medium">{key}</span>
              <span className="text-gray-500">{String(value)}</span>
            </li>
          ))}
          {Object.keys(settings).length === 0 && (
            <p className="text-center text-gray-400">Configuraciones no encontradas.</p>
          )}
        </ul>
        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">Actualizar o añadir configuraciones</h3>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Llave"
              className="border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
            />
            <input
              type="text"
              placeholder="Valor"
              className="border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
            <button
              onClick={addNewSetting}
              className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Añadir/Actualizar configuración
            </button>
          </div>
        </div>
      </div>
      <ButtonReturnToMenu/>
    </div>
   
    </>
   
  );
};