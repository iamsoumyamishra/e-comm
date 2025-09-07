import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='navbar flex justify-between items-center py-5 px-4 bg-gray-800 text-white'>
        <div>
            <Link href={'/' } className='flex items-center'>
            <span className='text-2xl font-title ml-10 '>Cartify</span>
            </Link>
        </div>
        <div>-+            <ul className='flex gap-10 mr-5'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/cart'}>Cart</Link></li>
                <li><Link href={'/profile'}>Profile</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar