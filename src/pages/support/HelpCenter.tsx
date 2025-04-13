import React from 'react';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import PageTransition from '../../components/PageTransition';

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password."
    },
    {
      question: "Can I integrate with existing school systems?",
      answer: "Yes, EduNexus supports integration with most major school management systems through our API. Contact our technical support for integration assistance."
    },
    {
      question: "How secure is my data?",
      answer: "We use industry-standard encryption and security measures to protect your data. All information is stored in secure, encrypted databases with regular backups."
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      available: "24/7 Support"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our support line",
      action: "Call Now",
      available: "Mon-Fri, 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email",
      action: "Send Email",
      available: "Response within 24h"
    }
  ];

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-xl text-gray-600">How can we help you today?</p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          {/* Support Channels */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <channel.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <p className="text-sm text-gray-500 mb-4">{channel.available}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    <HelpCircle className="inline-block h-5 w-5 mr-2 text-blue-600" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What do you need help with?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your issue..."
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HelpCenter;