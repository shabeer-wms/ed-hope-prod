import React, { useState, useEffect } from 'react';
import { account } from '../lib/appwrite';
import { Eye, EyeOff } from 'lucide-react';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        // Middleware: If session exists, redirect to dashboard
        account.get().then(() => {
            localStorage.setItem('admin-auth', 'true'); 
            window.location.href = '/admin';
        }).catch(() => {
            // No session, stay on login
        });
    }, []);

    async function login(email: string, password: string) {
        setError('');
        setLoading(true);
        try {
            // Try to log out any active session first
            await account.deleteSession('current');
        } catch (err) {
            // Ignore error if no session exists
        }
        try {
            await account.createEmailPasswordSession(email, password);
            localStorage.setItem('admin-auth', 'true');
            window.location.href = '/admin';
        } catch (err: any) {
            setError(err?.message || 'Login failed');
        }
        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-primary-100 to-accent-100">
            <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md border border-primary-200">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-primary-900 text-3xl font-bold mb-2">Admin Login</h2>
                    <p className="text-primary-700 text-sm">Sign in to access the dashboard</p>
                </div>
                {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
                <form onSubmit={e => e.preventDefault()} className="space-y-6">
                    <div>
                        <label className="block text-primary-800 mb-2" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full p-3 rounded bg-primary-50 text-primary-900 border border-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-primary-800 mb-2" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full p-3 rounded bg-primary-50 text-primary-900 border border-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
                                autoComplete="current-password"
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3 text-primary-400 hover:text-primary-600"
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="w-full bg-accent-500 text-white py-3 rounded font-semibold hover:bg-accent-600 transition disabled:opacity-50"
                        onClick={() => login(email, password)}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
