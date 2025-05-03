"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ClientGalleryProps {
    images: string[];
    title: string;
}

export default function ClientGallery({ images, title }: ClientGalleryProps) {
    const [activeImage, setActiveImage] = useState(0);
    
    return (
        <div>
            {/* Main Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={images[activeImage]}
                            alt={`${title} screenshot ${activeImage + 1}`}
                            fill
                            className="object-cover"
                            priority={activeImage === 0}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Thumbnail Grid */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 md:gap-3">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                activeImage === index 
                                    ? 'border-[--main-color] opacity-100 scale-100' 
                                    : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                        >
                            <Image
                                src={image}
                                alt={`${title} thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}