"use client"

import React, { useState } from 'react';

interface ClientGalleryProps {
    images: string[];
    title: string;
}

export default function ClientGallery({ images, title }: ClientGalleryProps) {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div>
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                <img 
                    src={images[currentImage]} 
                    alt={`${title} - Image ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`relative overflow-hidden rounded-lg aspect-video border-2 transition-all duration-300 ${
                                currentImage === index 
                                    ? 'border-[--main-color] opacity-100 scale-105' 
                                    : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                        >
                            <img 
                                src={image} 
                                alt={`${title} thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}