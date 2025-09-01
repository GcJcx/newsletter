import React, { useState, useEffect } from 'react';
import { Mail, Send, Users, Eye } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Subscriber {
  id: string;
  email: string;
  created_at: string;
  subscribed: boolean;
  source: string;
}

export function AdminPanel() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailResult, setEmailResult] = useState<string>('');

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const sendTestEmail = async () => {
    if (!emailSubject || !emailContent) {
      setEmailResult('Please fill in both subject and content');
      return;
    }

    setSendingEmail(true);
    setEmailResult('');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-newsletter`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: emailSubject,
            content: emailContent,
            testEmail: subscribers[0]?.email // Send to first subscriber as test
          }),
        }
      );

      const result = await response.json();
      setEmailResult(JSON.stringify(result, null, 2));
    } catch (error) {
      setEmailResult(`Error: ${error.message}`);
    } finally {
      setSendingEmail(false);
    }
  };

  const sendToAllSubscribers = async () => {
    if (!emailSubject || !emailContent) {
      setEmailResult('Please fill in both subject and content');
      return;
    }

    setSendingEmail(true);
    setEmailResult('');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-newsletter`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: emailSubject,
            content: emailContent
          }),
        }
      );

      const result = await response.json();
      setEmailResult(JSON.stringify(result, null, 2));
    } catch (error) {
      setEmailResult(`Error: ${error.message}`);
    } finally {
      setSendingEmail(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading subscribers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Newsletter Admin</h1>
          <p className="text-gray-600">Manage your newsletter subscribers and send emails</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Subscribers List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Subscribers ({subscribers.length})
                </h2>
              </div>
            </div>
            <div className="p-6">
              {subscribers.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No subscribers yet</p>
              ) : (
                <div className="space-y-4">
                  {subscribers.map((subscriber) => (
                    <div
                      key={subscriber.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{subscriber.email}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(subscriber.created_at).toLocaleDateString()} • {subscriber.source}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            subscriber.subscribed
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {subscriber.subscribed ? 'Active' : 'Unsubscribed'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Email Composer */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-gray-900">Send Newsletter</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Subject
                </label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Enter email subject..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Content
                </label>
                <textarea
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="Write your newsletter content here..."
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div className="space-y-3">
                <button
                  onClick={sendTestEmail}
                  disabled={sendingEmail || !emailSubject || !emailContent || subscribers.length === 0}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  {sendingEmail ? 'Sending...' : 'Send Test Email (First Subscriber)'}
                </button>

                <button
                  onClick={sendToAllSubscribers}
                  disabled={sendingEmail || !emailSubject || !emailContent || subscribers.length === 0}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {sendingEmail ? 'Sending...' : `Send to All ${subscribers.length} Subscribers`}
                </button>
              </div>

              {emailResult && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Result:
                  </label>
                  <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto max-h-64">
                    {emailResult}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}