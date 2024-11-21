import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useCounter } from "../logic/CounterContext";
const FooterMain: React.FC = () => {
    const { count } = useCounter();
    return (
        <footer className="bg-black text-white py-8">
            <div className="pl-10 flex mx-auto text-center space-x-10">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold">Equipo de Desarrollo</h2>
                    <ul className="list-none mt-2">
                        <li>Tzab Puc Uziel Alejandro</li>
                        <li>Obrian Guerrero Jonathan Andrez</li>
                        <li>Aban Tzab Cristian Emanuel</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-bold">Síguenos en</h2>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
                <div>
                    <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
                </div>
                <div>
                <p className="text-center text-green-500  ">Stock: {count}</p>
            </div>

            </div>
           
        </footer>
    );
};

export default FooterMain;