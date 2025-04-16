import { useState } from 'react';

type ContadorProps = {
  valorInicial: number;
};

export function Contador({ valorInicial }: ContadorProps) {
  const [contador, setContador] = useState(valorInicial);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}