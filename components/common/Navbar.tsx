"use client";

import Image from "next/image";
import Button from "../UI/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full h-auto bg-bgwhite-40 flex items-center justify-center shadow-md">
        <div className="w-full px-4 sm:px-8 lg:pr-30 lg:pl-30 py-4 flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="BROOKS MM INTERNATIONAL" 
                width={166} 
                height={80}
                className="w-32 h-auto lg:w-40"
              />
            </div>

            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex gap-12 py-2">
                <Link href="/" className="text-textblack-100 hover:text-primary-100 transition-colors font-family-primary text-[16px] duration-200">Home</Link>
                <Link href="/about" className="text-textblack-100 hover:text-primary-100 transition-colors font-family-primary text-[16px] duration-200">About Us</Link>
                <Link href="/fabrics" className="text-textblack-100 hover:text-primary-100 transition-colors font-family-primary text-[16px] duration-200">Contact Us</Link>
                <Link href="/contact" className="text-textblack-100 hover:text-primary-100 transition-colors font-family-primary text-[16px] duration-200">Preferences</Link>
              </div>
              <Button text="Join Waitlist" variant="primary" className="text-bgwhite-100 font-family-primary" />
            </div>

            {/* Hamburger Menu Button - visible on mobile */}
            <button 
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`bg-primary-100 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
              <span className={`bg-primary-100 block h-0.5 w-6 rounded-sm my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-primary-100 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay and Sidebar */}
      <div className={`
        fixed inset-0 z-50 transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {/* Backdrop - closes menu when clicked */}
        <div 
          className="absolute inset-0 bg-textblack-100 bg-opacity-50"
          onClick={closeMenu}
        ></div>

        {/* Sidebar */}
        <div className={`
          absolute right-0 top-0 h-full w-80 bg-bgwhite-100 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button 
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center text-textblack-100 hover:text-primary-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-8 py-6 flex flex-col space-y-8">
            <Link 
              href="/" 
              className="font-primary text-textblack-100 text-lg hover:text-primary-100 transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="font-primary text-textblack-100 text-lg hover:text-primary-100 transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              href="/fabrics" 
              className="font-primary text-textblack-100 text-lg hover:text-primary-100 transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <Link 
              href="/contact" 
              className="font-primary text-textblack-100 text-lg hover:text-primary-100 transition-colors duration-200 py-2"
              onClick={closeMenu}
            >
              Preferences
            </Link>
            
            {/* Join Waitlist Button in Mobile Menu */}
            <div className="pt-8">
              <Button 
                text="Join Waitlist" 
                variant="primary" 
                className="w-full justify-center text-textblack-100"
                onClick={closeMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}