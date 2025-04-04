'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, { name, email, password });
      router.push('/login');
    } catch (err) {
      alert('Erro ao registrar');
    }
  };

  return (
    <div className="flex flex-col gap-4 p-8 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold">Criar conta</h1>
      <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} className="border p-2 rounded" />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded" />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 rounded" />
      <button onClick={handleRegister} className="bg-black text-white p-2 rounded">Cadastrar</button>
    </div>
  );
}
