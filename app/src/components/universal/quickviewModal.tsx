
'use client';

import { IProductProp } from '@/interfaces';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface QuickViewModalProps {
  product: IProductProp;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 cursor-none"
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
      onClick={onClose}
    >
      {/* Custom Cursor Outside Modal */}
      {showCursor && (
        <div
          className="absolute w-10 h-10 flex items-center justify-center bg-white text-black text-lg font-bold rounded-full pointer-events-none shadow-lg"
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          ✖
        </div>
      )}
      {/* Modal Container (Normal Cursor Inside) */}
      <div
        className="bg-white rounded-lg shadow-lg relative w-fit max-w-[1000px] h-[500px] p-6 flex flex-col lg:flex-row gap-6 cursor-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6 text-gray-500" />
        </button>

        {/* Left Side (Image) */}
        <div className="lg:w-1/2 h-full flex justify-center rounded-md overflow-hidden">
          <Image
            className="w-full h-full object-cover overflow-hidden rounded-md"
            src={product.imageUrl || '/images/ProdCard-1.png'}
            alt={product.title}
            width={500}
            height={500}
          />
        </div>

        {/* Right Side (Content) */}
        <div className="lg:w-1/2 h-full flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p
              className="text-sm text-gray-700 flex-grow overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 6,
              }}
            >
              {product.description}
            </p>
            <span className="block text-lg font-bold text-green-600">
              Price: ${product.price}
            </span>
          </div>

          {/* Buttons at Bottom */}
          <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
            <button className="cta-button">
              Add to Cart
            </button>
            <Link href={`/products/${product.slug.current}`} passHref>
              <button className="border border-gray-300 py-2 px-4 rounded-md text-gray-600">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
