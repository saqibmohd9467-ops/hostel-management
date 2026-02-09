import React from 'react'

const Footer = () => {
  return (
    <div>
           <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-semibold">
              Verma Heights
            </h3>
            <p className="mt-2 text-sm">
              Comfortable & secure hostel living with smart management.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Facilities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">Contact</h4>
            <p className="text-sm">Email: support@vermaheights.com</p>
            <p className="text-sm mt-1">Phone: +91 98765 43210</p>
          </div>

        </div>

        <div className="text-center text-sm border-t border-slate-700 py-4">
          © {new Date().getFullYear()} Verma Heights. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer