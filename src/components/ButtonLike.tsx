import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  otherText?: string; // Hacer que otherText sea opcional
  update: (value: number) => void; // Asegurarse de que update sea una función
}

export const ButtonLike: React.FC<ButtonProps> = ({ text, otherText = 'dislike', update }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isActive, setActive] = useState(true);
  const navigate = useNavigate();
  const newText = isFollowing ? otherText : text;

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleClickCounter = () => {
    if (isActive) {
      update(1);
      setActive(false);
    } else {
      update(-1);
      setActive(true);
    }
  };

  const activar = () => {
    handleClick();
    handleClickCounter();
  };

  return (
    <>
     <button className="pushable" onClick={activar}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{newText}</span>
    </button>
     w
    </>
   
    
  );
};