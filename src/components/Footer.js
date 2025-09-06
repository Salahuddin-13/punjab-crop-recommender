import React from "react";
import { Leaf, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

// --- Smart Footer Component for Punjab Agriculture ---

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="text-green-500 w-8 h-8" />
              <span className="text-2xl font-bold text-white">Punjab Agriculture</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering the farmers of India's granary with smart technology, real-time data, and actionable insights for a prosperous future.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/crops" className="hover:text-green-400 transition-colors">AI Crop Recommender</a></li>
              <li><a href="/weather" className="hover:text-green-400 transition-colors">Weather Forecast</a></li>
              <li><a href="/resources" className="hover:text-green-400 transition-colors">Resource Hub</a></li>
              <li><a href="/profile" className="hover:text-green-400 transition-colors">My Profile</a></li>
            </ul>
          </div>

          {/* Column 3: Key Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wider">Key Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.pau.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Punjab Agricultural University</a></li>
              <li><a href="http://mandiboard.punjab.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Punjab Mandi Board</a></li>
              <li><a href="https://agri.punjab.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Dept. of Agriculture, Punjab</a></li>
              <li><a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">PM-KISAN Scheme</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wider">Connect With Us</h3>
            <p className="mb-4">Get the latest updates and connect with our community.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="mailto:contact@punjabagri.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

        </div>

        {/* Credit Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Punjab Smart Farming Portal. All rights reserved.
          </p>
           <p className="text-gray-500 text-xs mt-2">
             Made with ♥ by <span className="font-semibold text-green-500">Salahuddin</span>
           </p>
        </div>
      </div>
    </footer>
  );
}