"use client"

import React , { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function SliderPicture({PICTURES}) {
    const [current, setCurrent] = useState(0);
    const length = PICTURES.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [current, length]);
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(PICTURES) || PICTURES.length <= 0) {
        return null;
    }

    // slider will be here with arrows inside picture

    return (
        <section className="relative">
            <ArrowBackIosNewIcon className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer font-bold" onClick={prevSlide} fontSize='large' />
            <ArrowForwardIosIcon className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer" onClick={nextSlide} fontSize='large' />
            {PICTURES.map((slide, index) => {
                return (
                    <div className={index === current ? 'transition duration-1000 ease-in-out opacity-100' : 'transition duration-1000 ease-in-out opacity-0'} key={index}>
                        {index === current && (
                            <img src={slide.src} alt={slide.alt} className="w-full h-[40rem] object-cover" />
                        )}
                    </div>
                );
            }
            )}
        </section>
    );
}
