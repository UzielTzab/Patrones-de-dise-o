import React from 'react';
import { useNavigate } from 'react-router-dom';


interface CardPatronesProps {
    name: string;
    description: string;
    route: string;
    icon?: React.ReactNode;
}
const CardPatrones: React.FC<CardPatronesProps> = ({ name, description, route, icon }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(route);
    };

    return (
        <div className="card space-y-4">
            <div className='flex items-center'>
                {icon && <div className="mr-2">{icon}</div>}
                <h2 className="text-xl font-bold">{name}</h2>
            </div>
            <p>{description}</p>
            <button className=" hover:bg-slate-400 bg-yellow-500 text-black px-4 py-2 mt-4" onClick={handleNavigation}>
                Ir a {name}
            </button>
        </div>
    );
};

export default CardPatrones;