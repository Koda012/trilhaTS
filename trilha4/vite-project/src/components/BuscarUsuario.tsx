import { useState } from 'react';

export function BuscarUsuario() {
  const [id, setId] = useState('');
  const [usuario, setUsuario] = useState<{ name: string; email: string } | null>(null);
  const [erro, setErro] = useState('');

  const buscarUsuario = async () => {
    if (!id.trim()) {
      setErro('Por favor, insira um ID válido.');
      return;
    }

    try {
      setErro('');
      setUsuario(null);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }
      const data = await response.json();
      setUsuario({ name: data.name, email: data.email });
    } catch (error) {
      setErro((error as Error).message);
    }
  };

  return (
    <div>
      <h1>Buscar Usuário</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID do usuário"
      />
      <button onClick={buscarUsuario}>Buscar</button>
      {usuario && (
        <div>
          <h2>Nome: {usuario.name}</h2>
          <p>Email: {usuario.email}</p>
        </div>
      )}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
}