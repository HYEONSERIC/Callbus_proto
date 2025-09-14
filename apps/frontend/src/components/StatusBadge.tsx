'use client';
import { useEffect, useState } from 'react';

type Status = 'ok' | 'error' | 'loading';

export default function StatusBadge() {
  const [status, setStatus] = useState<Status>('loading');
  const [text, setText] = useState('checking...');

  async function check() {
    try {
      const res = await fetch('/api/status', { cache: 'no-store' });
      if (!res.ok) throw new Error(await res.text());
      const data = (await res.json()) as { health?: { status?: 'ok' }, db?: { db?: 'ok' } };
      const ok = data.health?.status === 'ok' && data.db?.db === 'ok';
      setStatus(ok ? 'ok' : 'error');
      setText(ok ? 'API & DB OK' : 'Degraded');
    } catch {
      setStatus('error');
      setText('Error');
    }
  }

  useEffect(() => {
    check();
    const id = setInterval(check, 10000);
    return () => clearInterval(id);
  }, []);

  const color =
    status === 'ok' ? 'bg-green-500' :
    status === 'loading' ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`inline-block w-2.5 h-2.5 rounded-full ${color}`} />
      <span className="text-gray-600">{text}</span>
    </div>
  );
}
