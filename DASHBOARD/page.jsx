'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [dados, setDados] = useState([]);
  const nome = typeof window !== "undefined" ? localStorage.getItem('transportadora') : '';

  useEffect(() => {
    fetch('/api/dados?nome=' + nome)
      .then(res => res.json())
      .then(setDados);
  }, []);

  const handleInput = (linhaIdx, colIdx, value) => {
    const novos = [...dados];
    novos[linhaIdx].editar[colIdx] = value;
    setDados(novos);
  };

  const salvar = async () => {
    await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify({ nome, dados }),
    });
    alert('Salvo com sucesso!');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Carga Zaffari - {nome}</h1>
      {dados.map((linha, idx) => (
        <div key={idx} className="mb-4 border p-2">
          <div className="grid grid-cols-2 gap-2 mb-2">
            {linha.visualizar.map((v, i) => (
              <div key={i} className="bg-gray-100 p-1">{v}</div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {linha.editar.map((e, i) => (
              <input
                key={i}
                className="border p-1"
                value={e}
                onChange={(e) => handleInput(idx, i, e.target.value)}
              />
            ))}
          </div>
        </div>
      ))}
      <button className="bg-green-500 text-white p-2 mt-4" onClick={salvar}>SALVAR</button>
    </div>
  );
}
