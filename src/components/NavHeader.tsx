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
              <li className="relative group">
              <a className="text-yellow-500 transition duration-300">
                Team
              </a>
              <ul className="absolute hidden group-hover:block bg-black text-yellow-500 shadow-md mt-2">
                <li>
                  <a href="/team/member1" className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition duration-300">
                    Uziel Alejandro Tzab Puc
                  </a>
                </li>
                <li>
                  <a href="/team/member2" className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition duration-300">
                    Jonathan Obrian
                  </a>
                </li>
                <li>
                  <a href="/team/member3" className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition duration-300">
                    Cristian Abán
                  </a>
                </li>
              </ul>
            </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default NavHeader;
  