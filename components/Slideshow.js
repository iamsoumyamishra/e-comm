'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Slide1 from '../public/slideshow/slide1.png'

const Slideshow = () => {

    const [idx, setIdx] = useState(1);
    const [images, setImages] = useState([
        {
            img: Slide1,
            title: "Slide 1",
            desc: "This is the first slide",
            link: "https://www.google.com",
            id: 1
        },
        {
            img: "https://picsum.photos/400/300?random=2",
            title: "Slide 2",
            desc: "This is the second slide",
            link: "https://www.google.com",
            id: 2
        },
        {
            img: "https://picsum.photos/400/300?random=3",
            title: "Slide 3",
            desc: "This is the third slide",
            link: "https://www.google.com",
            id: 3
        }
    ]);

    useEffect(() =>{
        const interval = setInterval(() => {
            idx === 3 ? setIdx(1) : setIdx(idx + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [idx]);
  return (
    <div className="bg-gray-600 relative w-full max-h-128 h-128 overflow-hidden flex items-center justify-center">
        <div className="slideshow w-full">
            {images.map((image) => {
                return(
                    <div 
                        className={`slide absolute w-full transition-all duration-500 ease-in-out ${
                            image.id === idx ? "scale-100 opacity-100" : " opacity-0 scale-0"
                        }`} 
                        key={image.id}
                    >
                        <Image 
                            draggable={false} 
                            className='object-cover h-128 w-full' 
                            src={image.img} 
                            alt={image.title} 
                            width={400} 
                            height={512} 
                        />
                    </div>
                )
            })}
            <button onClick={() => idx === 1 ? setIdx(3) : setIdx(idx - 1)} className='cursor-pointer absolute top-1/2 left-1/32 -translate-y-1/2 text-3xl text-white bg-black/50 hover:bg-black/70 p-2 rounded-full'>{'<'}</button>
            <button onClick={() => idx === 3 ? setIdx(1) : setIdx(idx + 1)} className='cursor-pointer absolute top-1/2 right-1/32 -translate-y-1/2 text-3xl text-white bg-black/50 hover:bg-black/70 p-2 rounded-full'>{'>'}</button>
        </div>
    </div>
  )
}

export default Slideshow