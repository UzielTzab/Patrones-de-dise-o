import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
interface Command {
  execute(): void;
  undo(): void;
}

class InsertTextCommand implements Command {
  constructor(
    private setText: React.Dispatch<React.SetStateAction<string>>,
    private currentText: string,
    private newText: string
  ) {}

  execute() {
    this.setText(this.currentText + this.newText);
  }

  undo() {
    this.setText(this.currentText);
  }
}

const CommandPage = () => {
    const navigate = useNavigate();
  const [text, setText] = useState("");
  const [history, setHistory] = useState<Command[]>([]);
  const [redoStack, setRedoStack] = useState<Command[]>([]);

  const handleInsertText = (newText: string) => {
    const command = new InsertTextCommand(setText, text, newText);
    command.execute();
    setHistory([...history, command]);
    setRedoStack([]); 
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const lastCommand = history[history.length - 1];
    lastCommand.undo();
    setHistory(history.slice(0, -1));
    setRedoStack([lastCommand, ...redoStack]);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const nextCommand = redoStack[0];
    nextCommand.execute();
    setRedoStack(redoStack.slice(1));
    setHistory([...history, nextCommand]);
  };

  return (
    <div className="p-20">
      <h1> Simulación con command</h1>
      <h1 className="text-2xl  mb-4 pt-10">Editor de Texto</h1>
      <textarea
        value={text}
        readOnly
        className="w-full h-20 p-2 border border-gray-300 rounded mb-4"
      />
      <div className="space-x-2">
        <button
          onClick={() => handleInsertText("Hola ")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Insertar "Hola"
        </button>
        <button
          onClick={() => handleInsertText("Mundo! ")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Insertar "Mundo!"
        </button>
        <button
          onClick={handleUndo}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Deshacer
        </button>
        <button
          onClick={handleRedo}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Rehacer
        </button>
      </div>
      <button
        className="bg-yellow-500 text-black px-4 py-2 mt-4"
        onClick={() => navigate('/')}
      >
        Ir al menú principal
      </button>
    </div>
  );
};

export default CommandPage;
