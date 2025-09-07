import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import Slideshow from '@/components/Slideshow'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
    <Slideshow />
    <Products />
    </>
  )
}

export default page