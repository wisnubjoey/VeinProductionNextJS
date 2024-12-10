// src/app/test/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getPortfolios } from '@/lib/api/portfolio';

export default function TestPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPortfolios();
        setData(result);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Test API Connection</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}