'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const res = await fetch('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const data = await res.json();
          setError(data.error);
          return;
        }

        const { user } = await res.json();
        setUser(user);
      } catch (error) {
        setError('Something went wrong');
      }
    };

    fetchUser();
  }, [router]);

  return (
    <div>
      <h1>Profile</h1>
      {error && <p>{error}</p>}
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}
