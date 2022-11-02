import { useEffect, useState } from "react";

const Count = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (counter === 10) {
      alert('Parabéns você contou até 10!');
    }
  }, [counter]);

  return (
    <div>
      <div>
        <p>Count: {counter}</p>
        {counter > 10 && <span>Você ultrapassou 10</span>}
      </div>
      <button
        name="adicionar contador"
        type="button"
        onClick={() => setCounter(counter + 1)}
      >
        Adicionar contador
      </button>
    </div>
  );
};

export default Count;
