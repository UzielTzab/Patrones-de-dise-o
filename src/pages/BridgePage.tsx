import { CardProfile } from "../components/CardProfile";
import { ButtonLike } from "../components/ButtonLike";
import { useState } from "react";
import ButtonReturnToMenu from "../components/ButtonReturnToMenu";

function BridgePage() {
  const [count, setCount] = useState(0);
  const result = (value: number) => {
    setCount((prev) => prev + value);
  };

  return (
    <>
    <div className="p-20 space-x-10  justify-center">
      <CardProfile userName="Cristian" numberLikes={count} numberFollows={count} />
      <ButtonLike text={"Me gusta"} update={result} />
      <ButtonReturnToMenu/>
    </div>
     
    </>
  );
}

export default BridgePage;