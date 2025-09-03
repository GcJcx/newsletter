import React, { useState } from 'react';
import { Zap } from 'lucide-react';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Create a hidden iframe to submit the form without leaving the page
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Create a form that targets the iframe
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://assets.mailerlite.com/jsonp/1776947/forms/164564835870180810/subscribe';
      form.target = iframe.name = 'hidden-form-' + Date.now();
      
      // Add the email field
      const emailField = document.createElement('input');
      emailField.type = 'email';
      emailField.name = 'fields[email]';
      emailField.value = email;
      form.appendChild(emailField);
      
      // Add required hidden fields
      const mlSubmit = document.createElement('input');
      mlSubmit.type = 'hidden';
      mlSubmit.name = 'ml-submit';
      mlSubmit.value = '1';
      form.appendChild(mlSubmit);
      
      document.body.appendChild(form);
      form.submit();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-800/20"></div>
      
      {/* TradixAI Logo - Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <span className="text-white font-semibold text-lg">TradixAI</span>
      </div>

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

          {isSubmitted ? (
            <div className="text-center">
              <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">Thank you!</h3>
                <p className="text-green-200">You have successfully joined our subscriber list.</p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail('');
                }}
                className="text-purple-300 hover:text-white transition-colors duration-200 underline"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Joining...' : 'Get Early Access'}
              </button>
            </form>
          )}
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