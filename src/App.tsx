import React, { useState } from 'react';
import { Zap, Settings } from 'lucide-react';
import { supabase } from './lib/supabase';
import { AdminPanel } from './components/AdminPanel';

function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return <AdminPanel />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted with email:', email);
    console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      console.log('Attempting to insert email:', email.toLowerCase().trim());
      
      const { error } = await supabase
        .from('newsletter_signups')
        .insert([
          {
            email: email.toLowerCase().trim(),
            source: 'coming_soon_page'
          }
        ]);

      console.log('Supabase response error:', error);

      if (error) {
        if (error.code === '23505') {
          // Duplicate email
          setMessage('You\'re already signed up! Thanks for your interest.');
          setIsSuccess(true);
        } else {
          console.error('Supabase error details:', error);
          throw error;
        }
      } else {
        console.log('Email successfully inserted!');
        setMessage('Thanks for signing up! We\'ll notify you when we launch.');
        setIsSuccess(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Something went wrong. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-800/20"></div>
      
      {/* TradixAI Logo - Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <span className="text-white font-semibold text-lg">TradixAI</span>
      </div>

      {/* Admin Button - Top Right */}
      <button
        onClick={() => setShowAdmin(true)}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all"
      >
        <Settings className="w-4 h-4" />
        Admin
      </button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Something Amazing
          </h1>
          <p className="text-purple-200 text-lg">
            Is Coming Soon
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Get Early Access
            </h2>
            <p className="text-purple-200 leading-relaxed">
              Be the first to know when we launch. Join our newsletter for exclusive updates and early bird access.
            </p>
          </div>

          {/* Email Form - Placeholder for now */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full py-4 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
            >
              {isLoading ? 'Signing up...' : 'Get Early Access'}
            </button>
          </form>

          {/* Success/Error Message */}
          {message && (
            <div className={`mt-4 p-4 rounded-2xl text-center ${
              isSuccess 
                ? 'bg-green-500/20 border border-green-400/30 text-green-200' 
                : 'bg-red-500/20 border border-red-400/30 text-red-200'
            }`}>
              {message}
            </div>
          )}

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-purple-300 text-sm">
              Join <span className="font-semibold text-white">2,847</span> others waiting for launch
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-purple-300 text-sm">
            No spam, ever. Unsubscribe with one click.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;