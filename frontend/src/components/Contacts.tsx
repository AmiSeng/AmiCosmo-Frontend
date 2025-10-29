import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-20 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Have any questions, feedback, or partnership ideas? We’d love to hear
          from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
              <Mail className="text-pink-400 w-6 h-6" />
              <p className="text-gray-300 text-lg">support@amicosmo.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-pink-400 w-6 h-6" />
              <p className="text-gray-300 text-lg">+1 234 567 890</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-pink-400 w-6 h-6" />
              <p className="text-gray-300 text-lg">Addis Ababa, Ethiopia</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block font-semibold text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-200 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
