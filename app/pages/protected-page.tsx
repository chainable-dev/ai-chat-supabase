import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from '@/lib/supabase/server';

const ProtectedPage = () => {
    const router = useRouter();
    const session = getSession();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  if (!session) {
    return <p>Loading...</p>;
  }

  return <div>Welcome to the protected page!</div>;
};

export default ProtectedPage; 