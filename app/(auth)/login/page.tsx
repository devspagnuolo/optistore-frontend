'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (err) {
      alert('Login inválido');
    }
  };

  return (
    <div className="flex flex-col gap-4 p-8 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold">Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded" />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 rounded" />
      <button onClick={handleLogin} className="bg-black text-white p-2 rounded">Entrar</button>
    </div>
  );
}
