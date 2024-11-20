import { useNavigate } from "react-router-dom";

function  ButtonReturnToMenu ()
{
    const navigate = useNavigate();

    return(
        <>
            <button
                className="bg-yellow-500 text-black px-4 py-2 mt-4"
                onClick={() => navigate('/')}
            >
                Ir al menú principal
            </button>
        </>
    );
}

export default ButtonReturnToMenu;

