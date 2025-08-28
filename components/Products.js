'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Products = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            description: "This is product 1",
            price: 100
        },
        {
            id: 2,
            name: "Product 2",
            description: "This is product 2",
            price: 200
        },
        {
            id: 3,
            name: "Product 3",
            description: "This is product 3",
            price: 300
        },
        {
            id: 4,
            name: "Product 4",
            description: "This is product 4",
            price: 400
        },
        {
            id: 5,
            name: "Product 5",
            description: "This is product 5",
            price: 500
        },
        {
            id: 6,
            name: "Product 6",
            description: "This is product 6",
            price: 600
        },
        {
            id: 7,
            name: "Product 7",
            description: "This is product 7",
            price: 700
        },
        {
            id: 8,
            name: "Product 8",
            description: "This is product 8",
            price: 800
        },
        {
            id: 9,
            name: "Product 9",
            description: "This is product 9",
            price: 900
        },
        {
            id: 10,
            name: "Product 10",
            description: "This is product 10",
            price: 1000
        },




    ]);


    return (
        <div className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen select-none'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-3xl font-extrabold text-gray-900 mb-6 text-center'>Featured Products</h2>
                <p className='text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10'>Discover our collection of premium products designed for your everyday needs.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>



                {products.map((product) => {
                    return (
                        <div key={product.id} className='group bg-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-xl overflow-hidden md:min-w-72 min-w-100 md:h-auto h-auto flex flex-col' style={{ cursor: 'pointer' }}>
                            <div className='relative h-48 overflow-hidden'>
                                {<Image src={`https://picsum.photos/400/300?random=${product.id + 6}`} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' alt={product.name} width={400} height={300} draggable={false} />}
                                <div className='absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-xs font-medium'>
                                    FEATURED
                                </div>
                            </div>
                            <div className='p-5 flex flex-col flex-grow'>
                                <div className='flex justify-between items-center mb-2'>
                                    <h1 className='text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300'>{product.name}</h1>
                                    <span className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold'>New</span>
                                </div>
                                <div className='flex items-center mb-2'>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className='text-xs text-gray-600 ml-1'>(4.0)</span>
                                </div>
                                <p className='text-gray-600 text-sm mb-4'>{product.description}</p>
                                <div className='mt-auto flex justify-between items-center'>
                                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium flex items-center group-hover:shadow-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Add to Cart
                                    </button>
                                    <div className='flex items-center bg-gray-100 px-2 py-1 rounded-lg'>
                                        <span className='text-xs font-medium text-gray-800 mr-1'>$</span>
                                        <span className='text-sm font-bold text-gray-800'>{product.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Products