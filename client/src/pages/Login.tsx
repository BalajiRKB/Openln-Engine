import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBackendUrl } from '../utils/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();



  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authSuccess = urlParams.get('authSuccess');
    const newUser = urlParams.get('newUser');
    const error = urlParams.get('error');

    function getCookie(name: string): string | undefined {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    }

    const tokenFromCookie = getCookie('tempAuthToken');

    if (authSuccess === 'true' && tokenFromCookie) {
      localStorage.setItem('token', tokenFromCookie);
      window.history.replaceState({}, document.title, window.location.pathname);
      document.cookie = 'tempAuthToken=; Max-Age=0; path=/;';
      if (newUser === 'true') {
        navigate('/onboarding/goal');
      } else {
        navigate('/dashboard');
      }
    } else if (error) {
      setError(error === 'ServerError' ? 'Authentication server error' : error);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const backendUrl = getBackendUrl();
      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-800">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 flex flex-col items-center w-full max-w-sm">
        <img src="/logo1.png" alt="Open In" className="h-16 mb-6" />
        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-gray-300 mb-8">Sign in to continue to Open ln</p>

        {error && (
          <div className="w-full bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form className="w-full flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
          <input
            type="email"
            className="rounded-lg px-4 py-2 bg-white/80 text-black placeholder-gray-500 focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            className="rounded-lg px-4 py-2 bg-white/80 text-black placeholder-gray-500 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-all duration-200 disabled:opacity-70"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-gray-300 text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-300 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
