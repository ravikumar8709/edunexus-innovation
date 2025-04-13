import React from 'react';
import PageTransition from '../../components/PageTransition';

const Terms = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using EduNexus, you agree to be bound by these Terms of Service
                and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-600">
                We grant you a limited, non-exclusive, non-transferable license to access and use
                our platform for educational purposes in accordance with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Use the platform responsibly and ethically</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Continued use of the platform
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Terms;