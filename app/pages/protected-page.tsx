import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '@supabase/auth-helpers-react';

const ProtectedPage = () => {
  const router = useRouter();
  const session = useSession();

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