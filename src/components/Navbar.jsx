import React, { useState, useMemo } from 'react';
import { FaHome, FaListAlt, FaQuoteLeft, FaUtensils, FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Importing Font Awesome icons

const Navbar = () => {
  // Move useState inside the component
  const [isOpen, setIsOpen] = useState(false);

  // Move useMemo inside the component
  const MenuItems = useMemo(
    () => [
      { icon: <FaHome />, text: 'Home' },
      { icon: <FaUtensils />, text: 'Services' },
      { icon: <FaListAlt />, text: 'Menu' },
      { icon: <FaQuoteLeft />, text: 'Reviews' },
    ],
    []
  );

  return (
    <nav className='fixed top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg rounded-full px-4 py-2 w-[95%] md:w-[90%] max-w-7xl flex items-center justify-between backdrop-blur-md border border-white/20 z-50'>
      {/* Logo */}
      <div className='flex items-center space-x-2'>
        <div className='p-2 bg-white/20 rounded-full backdrop-blur-sm'>
          <FaUtensils className='text-xl text-white animate-pulse' />
        </div>
        <h1 className='text-xl font-pacifico lg:text-2xl font-bold text-black'>
          Essence Desserts <span className='text-red-800 ml-2'>Hub</span>
        </h1>
      </div>

      {/* Center Navigation */}
      <div className='hidden md:flex space-x-6'>
        {MenuItems.map((item, index) => (
          <button
            key={index}
            className='group flex items-center space-x-2 text-black hover:text-pink-500 transition-all duration-300 focus:outline-none'
          >
            <span className='text-lg transition-transform group-hover:scale-125 text-red-500'>
              {item.icon}
            </span>
            <span className='text-base font-semibold group-hover:underline decoration-2 underline-offset-4'>
              {item.text}
            </span>
          </button>
        ))}
      </div>

      {/* Right Navigation */}
      <div className='flex items-center space-x-3'>
        {/* Search Input */}
        <div className='relative hidden sm:block'>
          <input
            type='text'
            placeholder='Search...'
            className='w-32 md:w-40 lg:w-48 border border-gray-300 rounded-full py-1 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500'
          />
          <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:scale-110 transition-transform text-base' />
        </div>

        {/* Cart & Login Buttons */}
        <button className='p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all focus:outline-none'>
          <FaShoppingCart className='text-lg text-white' />
        </button>
        <button className='hidden sm:flex items-center bg-gradient-to-br from-pink-400 to-red-500 px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all focus:outline-none'>
          <span className='font-semibold text-white text-sm lg:text-base'>Login</span>
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'
          className='md:hidden p-2 text-white hover:text-pink-300 transition-all focus:outline-none'
        >
          {isOpen ? <FaTimes className='text-xl' /> : <FaBars className='text-xl' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-pink-400 to-red-500 rounded-2xl shadow-xl mt-3 mx-4 transition-all duration-300 transform ${
          isOpen ? 'opacity-100 visible scale-105' : 'opacity-0 invisible scale-95'
        }`}
      >
        <div className='p-4 space-y-4'>
          {MenuItems.map((item, index) => (
            <button
              key={index}
              className='w-full flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-xl transition-all focus:outline-none'
            >
              <span className='text-xl'>{item.icon}</span>
              <span className='text-lg'>{item.text}</span>
            </button>
          ))}

          {/* Mobile Search Input */}
          <div className='sm:hidden'>
            <div className='flex items-center bg-white/20 rounded-full px-3 w-full'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full bg-transparent border-0 text-white py-1 flex-1 focus:outline-none text-sm'
              />
              <FaSearch className='text-white/80' />
            </div>
          </div>

          {/* Mobile Login Button */}
          <button className='w-full sm:hidden flex items-center justify-center space-x-2 bg-gradient-to-br from-pink-400 to-red-500 px-4 py-2 rounded-full hover:shadow-lg transition-all focus:outline-none'>
            <FaUser className='text-white' />
            <span className='font-semibold text-white text-base'>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;