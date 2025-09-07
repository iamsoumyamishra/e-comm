'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 shadow-md transition-all duration-300 backdrop-blur-sm bg-white/90'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo and Brand */}
          <div className='flex items-center'>
            <Link href={'/'} className='flex items-center space-x-2 group'>
              <div className='w-8 h-8 relative transition-transform duration-300 group-hover:scale-110'>
                <Image 
                  src='/logo.png' 
                  alt='Logo' 
                  width={32} 
                  height={32} 
                  className='text-blue-600 rounded-full transition-transform duration-500 group-hover:rotate-12'
                />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500'>
                {/* {process.env.NEXT_PUBLIC_APP_TITLE || 'Title'} */}
                {process.env.NEXT_PUBLIC_APP_TITLE || 'Tvastra'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            <Link href={'/'} className='group px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 relative'>
              Home
              <span className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 transition-all duration-300'></span>
            </Link>
            <Link href={'/shop'} className='group px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 relative'>
              Shop
              <span className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 transition-all duration-300'></span>
            </Link>
            <Link href={'/categories'} className='group px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 relative'>
              Categories
              <span className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 transition-all duration-300'></span>
            </Link>
            <Link href={'/deals'} className='group px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 relative'>
              Deals
              <span className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 transition-all duration-300'></span>
            </Link>
          </div>

          {/* Right side icons */}
          <div className='hidden md:flex items-center space-x-4'>
            <div className='relative group'>
              <input 
                type='text' 
                placeholder='Search products...' 
                className='w-40 lg:w-60 px-4 py-1.5 pr-8 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-300 placeholder-gray-400 text-sm'
              />
              <button className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <Link href={'/cart'} className='relative p-2 rounded-full hover:bg-blue-50 transition-all duration-200 group'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className='absolute top-0 right-0 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full transform transition-transform duration-200 group-hover:scale-110 group-hover:bg-blue-700'>3</span>
            </Link>
            
            <Link href={'/profile'} className='p-2 rounded-full hover:bg-blue-50 transition-all duration-200 group'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
            >
              <span className='sr-only'>Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden bg-white shadow-lg rounded-b-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none hidden'}`}>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link href={'/'} className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'>
              Home
            </Link>
            <Link href={'/shop'} className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'>
              Shop
            </Link>
            <Link href={'/categories'} className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'>
              Categories
            </Link>
            <Link href={'/deals'} className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'>
              Deals
            </Link>
          </div>
          <div className='pt-4 pb-3 border-t border-gray-200'>
            <div className='flex items-center px-5'>
              <div className='flex-shrink-0'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className='ml-3'>
                <div className='text-base font-medium text-gray-800'>Guest User</div>
                <div className='text-sm font-medium text-gray-500'>guest@example.com</div>
              </div>
            </div>
            <div className='mt-3 px-2 space-y-1'>
              <Link href={'/profile'} className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'>
                Your Profile
              </Link>
              <Link href={'/orders'} className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'>
                Orders
              </Link>
              <Link href={'/cart'} className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'>
                Shopping Cart
              </Link>
              <button className='w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'>
                Sign out
              </button>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar