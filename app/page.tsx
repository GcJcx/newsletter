'use client';

import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Loader2, X } from 'lucide-react';

function HomePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

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
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.toLowerCase().trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setMessage('Check your inbox! We\'ve sent you a confirmation email.');
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
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
          {status === 'success' ? (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                You're All Set!
              </h2>
              <p className="text-green-200 leading-relaxed">
                {message}
              </p>
            </div>
          ) : (
            <>
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
                    disabled={status === 'loading'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform ${
                    status === 'loading'
                      ? 'bg-purple-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:scale-105 hover:shadow-lg'
                  } disabled:transform-none disabled:hover:scale-100`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                    <span>
                      {status === 'loading' ? 'Subscribing...' : 'Notify Me'}
                    </span>
                  </div>
                </button>
              </form>

              {/* Error Messages */}
              {status === 'error' && message && (
                <div className="mt-4 p-4 rounded-xl flex items-center space-x-2 bg-red-500/20 border border-red-400/30">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-200">
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
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-purple-300 text-sm">
            No spam, ever. Unsubscribe with one click.
          </p>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-4">
          <div className="flex justify-center space-x-6 text-xs text-purple-400">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-purple-200 transition-colors underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-purple-200 transition-colors underline"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  At TradixAI, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you interact with our website, newsletter, trading tools, and courses.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Email addresses when you sign up for our newsletter to receive updates about TradixAI's trading software, signals, and educational content.</li>
                  <li>Account and payment details if you later subscribe to our products.</li>
                  <li>Technical data such as IP address, browser type, and website usage (via cookies or analytics tools).</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. How We Use Your Information</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>To send you newsletters, product updates, early-access invitations, and promotions.</li>
                  <li>To notify you when our trading software and courses are available.</li>
                  <li>To improve our platform and personalize your experience.</li>
                  <li>To comply with legal and regulatory requirements.</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. Data Sharing</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>We will never sell your personal information to third parties.</li>
                  <li>We may share limited information with trusted providers (e.g., email services, analytics, and payment processors) strictly to operate our services.</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4. Data Retention</h3>
                <p className="mb-4">
                  Email addresses collected for the newsletter will be stored securely until you unsubscribe or request deletion.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">5. Security</h3>
                <p className="mb-4">
                  We use industry-standard safeguards to protect your data but cannot guarantee absolute security.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">6. Your Rights</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>You can unsubscribe from our newsletter at any time.</li>
                  <li>You can request access, correction, or deletion of your personal data by contacting us.</li>
                </ul>

                <p className="mt-6 font-medium">
                  By signing up for our newsletter, you consent to the collection and use of your email address in accordance with this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Welcome to TradixAI. By using our website, newsletter, trading tools, and courses, you agree to the following terms:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. Services</h3>
                <p className="mb-4">
                  TradixAI provides crypto trading signals, semi-autonomous trading bots, and educational content on cryptocurrency. Our newsletter is used to keep subscribers informed of updates, promotions, and product launches.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. No Financial Advice</h3>
                <p className="mb-4">
                  TradixAI is not a licensed financial advisor. All trading signals, strategies, and educational materials are provided "as-is" without guarantees. You are solely responsible for your trading decisions.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. Risks</h3>
                <p className="mb-4">
                  Cryptocurrency trading is highly volatile and may result in significant financial losses. You understand and accept these risks before using our services.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4. User Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>You must be of legal age in your jurisdiction.</li>
                  <li>You are responsible for complying with all applicable laws and regulations.</li>
                  <li>You agree not to misuse our services, attempt to hack, or reverse-engineer our tools.</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">5. Limitation of Liability</h3>
                <p className="mb-4">
                  TradixAI is not liable for any financial losses, damages, or consequences resulting from the use of our trading signals, bots, or educational content.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">6. Changes to Terms</h3>
                <p className="mb-4">
                  We reserve the right to update these Terms of Service at any time. Continued use of our services indicates acceptance of any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;