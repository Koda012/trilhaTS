import { useState } from 'react';

type SaudacaoProps = {
  nomeInicial: string;
};

export function Saudacao({ nomeInicial }: SaudacaoProps) {
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
    </div>
  );
}