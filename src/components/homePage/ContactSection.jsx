import React, { useState } from "react";

export default function ContactSection() {
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
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? Our support team is ready to help. Contact us today!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl text-primary-color mb-4">📞</div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-300">+880 1407-020485</p>
            <p className="text-gray-400 text-sm"></p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl text-primary-color mb-4">✉️</div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-300">support@extranet.com</p>
            <p className="text-gray-400 text-sm">info@extranet.com</p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl text-primary-color mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Address</h3>
            <p className="text-gray-300">Ovijan-60, Collage Gate</p>
            <p className="text-gray-400 text-sm">Gazipur, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-primary-color"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-primary-color"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-primary-color"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-primary-color resize-none"
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
      </div>
    </section>
  );
}
