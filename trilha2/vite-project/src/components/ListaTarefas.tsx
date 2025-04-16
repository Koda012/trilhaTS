import { useState } from 'react';

type ListaTarefasProps = {
  tarefasIniciais: string[];
};

export function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}