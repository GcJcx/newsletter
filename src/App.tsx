import React, { useEffect } from 'react';
import { Zap } from 'lucide-react';

function App() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('fields[email]') as string;
    
    if (!email) return;
    
    try {
      // Submit to MailerLite
      const response = await fetch('https://assets.mailerlite.com/jsonp/1776947/forms/164564835870180810/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Required for cross-origin requests
      });
      
      // Show success message
      const successDiv = document.querySelector('.ml-form-successBody') as HTMLElement;
      const formDiv = document.querySelector('.row-form') as HTMLElement;
      
      if (successDiv && formDiv) {
        formDiv.style.display = 'none';
        successDiv.style.display = 'block';
      }
    } catch (error) {
      console.error('Subscription error:', error);
      // You could add error handling here
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

          {/* MailerLite Embedded Form */}
          <div id="mlb2-30465305" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-30465305">
            <div className="ml-form-align-center">
              <div className="ml-form-embedWrapper embedForm">
                <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                  <form className="ml-block-form" onSubmit={handleSubmit} data-code="" method="post">
                    <div className="ml-form-formContent">
                      <div className="ml-form-fieldRow ml-last-item">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input 
                            aria-label="email" 
                            aria-required="true" 
                            type="email" 
                            className="form-control" 
                            name="fields[email]" 
                            placeholder="Enter your email address" 
                            autoComplete="email"
                          />
                        </div>
                      </div>
                    </div>
                    <input type="hidden" name="ml-submit" value="1" />
                    <div className="ml-form-embedSubmit">
                      <button type="submit" className="primary">Get Early Access</button>
                      <button disabled style={{display: 'none'}} type="button" className="loading">
                        <div className="ml-form-embedSubmitLoad"></div>
                        <span className="sr-only">Loading...</span>
                      </button>
                    </div>
                    <input type="hidden" name="anticsrf" value="true" />
                  </form>
                </div>
                <div className="ml-form-successBody row-success" style={{display: 'none'}}>
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