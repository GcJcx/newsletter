import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

function App() {
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

          {/* MailerLite Embedded Form */}
          <div className="ml-embedded" data-form="0WPiC"></div>
                  <div className="ml-form-successContent">
                    <h4 className="text-white text-xl font-semibold mb-2">Thank you!</h4>
                    <p className="text-purple-200">You have successfully joined our subscriber list.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-purple-300 text-sm">
            No spam, ever. Unsubscribe with one click.
          </p>
        </div>
      </div>

      {/* MailerLite Success Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          function ml_webform_success_30465305() {
            var $ = ml_jQuery || jQuery;
            $('.ml-subscribe-form-30465305 .row-success').show();
            $('.ml-subscribe-form-30465305 .row-form').hide();
          }
        `
      }} />
    </div>
  );
}

export default App;