import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to login');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-md flex flex-col items-center animate-fade-in">
       <div className="flex flex-col items-center mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Admin Logo"
            className="w-16 h-16 rounded-full shadow-lg border-4 border-white/40 mb-3 bg-white/60"
          />
          <h2 className="text-3xl font-extrabold text-white drop-shadow-lg tracking-tight text-center">
            Admin Dashboard
          </h2>
          <p className="mt-2 text-base text-white/80 text-center">
            Sign in to your account
          </p>
        </div>
        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-100/80 p-3 text-center text-red-700 font-medium shadow">
              {error}
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-lg border-0 py-2 px-4 bg-white/70 text-gray-900 shadow-inner focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-200 placeholder:text-gray-400 text-base"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-white/90 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-lg border-0 py-2 px-4 bg-white/70 text-gray-900 shadow-inner focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-200 placeholder:text-gray-400 text-base"
              placeholder="••••••••"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-lg font-bold text-white shadow-lg hover:scale-105 hover:from-pink-500 hover:to-indigo-500 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-6 text-xs text-white/70 text-center">
          <span>Demo: <b>admin@example.com</b> / <b>admin123</b></span>
        </div>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
} 