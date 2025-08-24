import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from './lib/supabase';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    try {
      // Insert email into Supabase
      const { error } = await supabase
        .from('newsletter_signups')
        .insert([
          { 
            email: email.toLowerCase().trim(),
            source: 'coming_soon_page'
          }
        ]);

      if (error) {
        // Handle duplicate email error gracefully
        if (error.code === '23505') {
          setStatus('success');
          setMessage('You\'re already subscribed! Thanks for your interest.');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage('Thank you! You\'ve been added to our newsletter.');
      }
      
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const resetStatus = () => {
    if (status === 'error') {
      setStatus('idle');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-800/20"></div>
      
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
            <Mail className="w-8 h-8 text-white" />
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  resetStatus();
                }}
                placeholder="Enter your email address"
                className={`w-full px-4 py-4 bg-white/20 backdrop-blur-sm border rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  status === 'error' 
                    ? 'border-red-400 focus:ring-red-400' 
                    : 'border-white/30 focus:ring-purple-400 focus:border-purple-400'
                }`}
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform ${
                status === 'success'
                  ? 'bg-green-500 hover:bg-green-600'
                  : status === 'loading'
                  ? 'bg-purple-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:scale-105 hover:shadow-lg'
              } disabled:transform-none disabled:hover:scale-100`}
            >
              <div className="flex items-center justify-center space-x-2">
                {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === 'success' && <Check className="w-5 h-5" />}
                <span>
                  {status === 'loading' 
                    ? 'Subscribing...' 
                    : status === 'success' 
                    ? 'Subscribed!' 
                    : 'Notify Me'
                  }
                </span>
              </div>
            </button>
          </form>

          {/* Status Messages */}
          {message && (
            <div className={`mt-4 p-4 rounded-xl flex items-center space-x-2 ${
              status === 'success' 
                ? 'bg-green-500/20 border border-green-400/30' 
                : 'bg-red-500/20 border border-red-400/30'
            }`}>
              {status === 'success' ? (
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              )}
              <p className={`text-sm ${
                status === 'success' ? 'text-green-200' : 'text-red-200'
              }`}>
                {message}
              </p>
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
        <div className="text-center mt-8">
          <p className="text-purple-300 text-sm">
            No spam, ever. Unsubscribe with one click.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;