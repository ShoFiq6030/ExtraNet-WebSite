import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services? Our customer service team is available 24/7 to assist you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 mt-1">📞</div>
                <div>
                  <h3 className="font-bold text-lg">Phone Support</h3>
                  <p className="text-gray-600">1-800-ISP-CARE (1-800-477-2273)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 mt-1">✉️</div>
                <div>
                  <h3 className="font-bold text-lg">Email Support</h3>
                  <p className="text-gray-600">support@example-isp.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 mt-1">🏢</div>
                <div>
                  <h3 className="font-bold text-lg">Office Address</h3>
                  <p className="text-gray-600">
                    123 Internet Avenue<br />
                    Tech City, TC 98765
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;