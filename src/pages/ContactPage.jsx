import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Our support team is ready to help. Get in touch with
            us today!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl text-primary-color mb-4">📞</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+880 1700-000000</p>
            <p className="text-gray-600">Mon - Sun, 9am - 6pm</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl text-primary-color mb-4">✉️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">support@extranet.com</p>
            <p className="text-gray-600">info@extranet.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl text-primary-color mb-4">📍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">123 Tech Street</p>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-color resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-color text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* FAQ */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-semibold text-gray-800 bg-gray-100 p-4 rounded-lg group-open:bg-primary-color group-open:text-white">
                  How do I apply for a connection?
                </summary>
                <p className="mt-2 p-4 text-gray-700">
                  Simply fill out the form on our website or call our customer
                  service team, and we'll guide you through the process.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-semibold text-gray-800 bg-gray-100 p-4 rounded-lg group-open:bg-primary-color group-open:text-white">
                  What is your installation fee?
                </summary>
                <p className="mt-2 p-4 text-gray-700">
                  Installation fees vary based on location. Contact us for a
                  quote in your area.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-semibold text-gray-800 bg-gray-100 p-4 rounded-lg group-open:bg-primary-color group-open:text-white">
                  Can I change my plan anytime?
                </summary>
                <p className="mt-2 p-4 text-gray-700">
                  Yes! You can upgrade or downgrade your plan anytime with no
                  hassle.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-semibold text-gray-800 bg-gray-100 p-4 rounded-lg group-open:bg-primary-color group-open:text-white">
                  Do you offer free trial?
                </summary>
                <p className="mt-2 p-4 text-gray-700">
                  We offer a 7-day trial for new customers so you can experience
                  our service quality.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
