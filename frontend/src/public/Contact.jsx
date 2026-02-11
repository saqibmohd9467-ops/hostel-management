import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
        <Header/>
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side - Contact Info */}
        <div className="bg-blue-600 text-white p-10">
          <h2 className="text-3xl font-bold mb-6">Contact Hostel Admin</h2>
          <p className="mb-6 text-blue-100">
            Have questions about room availability, fees, or facilities? 
            Reach out to us anytime.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">📍 Address</h4>
              <p className="text-blue-100">
                ABC Hostel, Near City Center, Your City
              </p>
            </div>

            <div>
              <h4 className="font-semibold">📞 Phone</h4>
              <p className="text-blue-100">+91 98765 43210</p>
            </div>

            <div>
              <h4 className="font-semibold">📧 Email</h4>
              <p className="text-blue-100">admin@abchostel.com</p>
            </div>

            <div>
              <h4 className="font-semibold">🕒 Office Hours</h4>
              <p className="text-blue-100">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
