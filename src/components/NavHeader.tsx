import { useCounter } from "../pages/CounterContext";
import { FaBox } from "react-icons/fa";

function NavHeader() {
  const { count } = useCounter();
    return (
      <header className="bg-black text-yellow-500 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Patrones de diseño con React</h1>
          <nav>
            <ul className="flex space-x-4 ">
              <li className=" flex content-center">
                <FaBox className="  mr-3" />
                <p className="text-yellow-500">Stock: {count}</p>
              </li>
              <li>
                <a
                  href="/"
                  className=" text-yellow-500 transition duration-300"
                >
                  Inicio
                </a>
              </li>
              <li className="relative group">
                <a className="text-yellow-500 transition duration-300">
                  Patrones
                </a>
               
              </li>
           
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default NavHeader;
  