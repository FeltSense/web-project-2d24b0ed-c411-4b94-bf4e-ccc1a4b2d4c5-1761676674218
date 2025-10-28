'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-slate-900">Harrytos</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
          Home
        </a>
        <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
          Services
        </a>
        <a href="#pricing" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
          Pricing
        </a>
        <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
          Contact
        </a>
      </div>

      <div className="hidden md:flex items-center">
        <a href="#contact" className="bg-slate-900 text-white px-6 py-2 rounded-md font-medium hover:bg-slate-800 transition-colors">
          Get Started
        </a>
      </div>

      <div className="md:hidden">
        <button className="text-slate-700 hover:text-slate-900">
          <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}