import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-50 pt-20 pb-10 px-6 md:px-20 relative overflow-hidden text-gray-700">
      {/* Footer Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-4">Prabhu Pariwar</h3>
          <p>Helping individuals on their journey to a centered, calm life.</p>
          <button className="mt-4 px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>

        {/* Inspiration */}
        <div>
          <h4 className="font-semibold mb-2">Inspiration</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Online Videos</li>
            <li>Wellness Blog</li>
            <li>Affirmations</li>
            <li>Ideas for caregivers</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Instructors</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact Info</h4>
          <p>123 Zen Street</p>
          <p>Peaceville, US</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@serenityyoga.com</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-purple-600">🌐</a>
            <a href="#" className="hover:text-purple-600">📘</a>
            <a href="#" className="hover:text-purple-600">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Prabhu Pariwar. All rights reserved.
      </div>
    </div>
  );
}
