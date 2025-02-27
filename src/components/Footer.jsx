import React from 'react'
import Logo from '../assets/logo no bg.png'

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-[#D9D9D9]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="w-20 h-20" />
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-gray-200 w-full dark:border-gray-700 lg:my-8" />

        {/* Copyright Text */}
        <span className="block text-sm text-gray-500 text-center dark:text-[#252525]">
          © 2025 Kerwin Cortina. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
