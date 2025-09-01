import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export function TestEmailButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const sendTestEmail = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-test`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (result.success) {
        setMessage(`✅ ${result.message}`);
        setIsSuccess(true);
      } else {
        setMessage(`❌ ${result.error}`);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Test email error:', error);
      setMessage('❌ Failed to send test email. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={sendTestEmail}
        disabled={isLoading}
        className="flex items-center gap-2 px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {isLoading ? 'Sending...' : 'Send Test Email'}
      </button>
      
      {message && (
        <div className={`mt-3 p-3 rounded-xl text-sm max-w-xs ${
          isSuccess 
            ? 'bg-green-500/20 border border-green-400/30 text-green-200' 
            : 'bg-red-500/20 border border-red-400/30 text-red-200'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}