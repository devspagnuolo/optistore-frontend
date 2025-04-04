'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Seus Produtos</h1>
      <ul className="space-y-2">
        {products.map((p: any) => (
          <li key={p.id} className="border p-4 rounded">{p.name} - R${p.price}</li>
        ))}
      </ul>
    </div>
  );
}
