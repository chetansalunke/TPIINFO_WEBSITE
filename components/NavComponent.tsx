import React, { useRef, useState } from 'react';
import useOnClickOutside from './useOnClickOutside';
import Link from 'next/link';

const navData = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function NavComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="sticky top-0 z-50 w-full py-3 text-xl font-bold drop-shadow-xl flex-1 transition-colors duration-500 bg-transparent backdrop-blur-md">
      <div className="px-6 flex justify-between items-center">
        
        <div>
          <h1 className="font-jostBold text-4xl text-[#3E3FD8]">TPiINFO</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="sm:flex justify-between hidden space-x-6">
          {navData.map((n, index) => (
            <Link key={index} href={n.href} passHref>
              <a className="text-xl text-gray-700 hover:text-[#3E3FD8] transition-colors duration-300">{n.name}</a>
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setModalOpen(!isModalOpen)}
            className="flex items-center space-x-2"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-0.5 bg-gray-800 transition-all duration-300" />
            <div className="w-6 h-0.5 bg-gray-800 transition-all duration-300" />
            <div className="w-6 h-0.5 bg-gray-800 transition-all duration-300" />
          </button>
        </div>
        <div>
          
        <button className="relative z-0 rounded-full bg-blue-500 px-10 py-3 text-white font-semibold transition-all ease-in-out duration-300 group">
         
          <span className="absolute left-0 top-0 -z-10 h-full w-0 rounded-full bg-blue-700 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 group-hover:rounded-full" />
        
          Sign Up
        </button>
      
        </div>
      </div>

      {/* Mobile Menu */}
      {isModalOpen && (
        <div
          ref={ref}
          className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-lg p-6 sm:hidden transition-all duration-300"
        >
          {navData.map((n, index) => (
            <Link key={index} href={n.href} passHref>
              <a className="block text-xl font-medium text-gray-700 hover:text-[#3E3FD8] py-3">
                {n.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
