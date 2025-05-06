'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem('transportadora', name.toUpperCase());
    router.push('/dashboard');
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Carga Zaffari - Login</h1>
      <input
        placeholder="Nome da transportadora"
        className="w-full p-2 border mb-2"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="w-full p-2 border mb-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 text-white p-2 w-full" onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
}
