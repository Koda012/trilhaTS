import { useState } from 'react';

export function CriarUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const cadastrarUsuario = async () => {
    if (!nome.trim() || !email.trim()) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    try {
      setMensagem('');
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nome, email }),
      });
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
      setMensagem('Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
    } catch (error) {
      setMensagem((error as Error).message);
    }
  };

  return (
    <div>
      <h1>Criar Novo Usuário</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite o nome"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite o email"
      />
      <button onClick={cadastrarUsuario}>Cadastrar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}