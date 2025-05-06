'use client';

import React, { useState } from 'react';

export default function Home() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [erro, setErro] = useState('');

  const senhasValidas: { [key: string]: string } = {
    TSG: 'TSG1010',
    TRANSPIO: 'TRANSPIO2020',
    TOMASI: 'TOMASI3030',
    CATTO: 'CATTO4040',
    DARCHEL: 'DARCHEL5050',
  };

  const handleLogin = () => {
    const nomeFormatado = nome.trim().toUpperCase();
    const senhaDigitada = senha.trim();

    if (senhasValidas[nomeFormatado] && senhasValidas[nomeFormatado] === senhaDigitada) {
      setAutenticado(true);
      setErro('');
    } else {
      setErro('Nome ou senha incorretos.');
      setAutenticado(false);
    }
  };

  if (!autenticado) {
    return (
      <div style={{ padding: 20, fontFamily: 'Arial', backgroundColor: 'black', minHeight: '100vh' }}>
        <h1>Carga Zaffari</h1>

        <label>Nome da Transportadora:</label><br />
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ padding: 5, marginBottom: 10, width: 300, color: 'white', backgroundColor: 'black', border: '1px solid white',borderRadius: 5 }}
        /><br /><br />

        <label>Senha:</label><br />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ padding: 5, marginBottom: 10, width: 300, color: 'white', backgroundColor: 'black', border: '1px solid white',borderRadius: 5 }}
        /><br /><br />

        <button onClick={handleLogin} style={{ padding: 10 }}>Entrar</button>
        {erro && <p style={{ color: 'white' }}>{erro}</p>}
      </div>
    );
  }

  // Se autenticado, mostra mensagem por enquanto (depois colocamos os dados da planilha)
  return (
    <div style={{ padding: 20 }}>
      <h2>Bem-vindo, {nome.toUpperCase()}!</h2>
      <p>Você está autenticado. Em breve, os dados da sua programação de carga serão exibidos aqui.</p>
    </div>
  );
}
