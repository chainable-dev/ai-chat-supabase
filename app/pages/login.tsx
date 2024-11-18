import React from 'react';
import { signInWithGoogle } from '../(auth)/actions';

const LoginPage = () => {
  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        {/* Existing email/password login form */}
        <button type="submit">Login with Email</button>
      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default LoginPage; 