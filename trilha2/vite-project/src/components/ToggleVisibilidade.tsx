import { useState } from 'react';

type ToggleVisibilidadeProps = {
  texto: string;
};

export function ToggleVisibilidade({ texto }: ToggleVisibilidadeProps) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? 'Ocultar' : 'Mostrar'}
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
}