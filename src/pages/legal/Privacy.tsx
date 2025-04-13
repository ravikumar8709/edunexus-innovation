import React from 'react';
import PageTransition from '../../components/PageTransition';

const Privacy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600">
                At EduNexus, we take your privacy seriously. This privacy policy describes how we collect,
                use, and protect your personal information when you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Account information (name, email, institution)</li>
                <li>Usage data and analytics</li>
                <li>Technical information about your device and browser</li>
                <li>Communications with our support team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the collected information to provide and improve our services, communicate with you,
                and ensure the security of your account. We never sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our privacy policy, please contact our privacy team
                at privacy@edunexus.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Privacy;