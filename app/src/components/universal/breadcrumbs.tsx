'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname(); // Gets the current path (e.g., '/home/shop/product')
  const pathSegments = pathname.split('/').filter((segment) => segment); // Split into segments and remove empty parts
console.log(pathSegments);
  return (
    <nav aria-label="Breadcrumb" className='bg-[#FAFAFA] py-6'>
      <ol className="wrapper flex items-center space-x-2 gap-[30px] leading-6 text-sm">
        {/* Home Link */}
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>

        {/* Dynamic Breadcrumb Links */}
        {pathSegments.map((segment, index) => {
          const segmentPath = '/' + pathSegments.slice(0, index + 1).join('/'); // Rebuild path up to current segment
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={segment} className="flex items-center space-x-2">
              <span className="text-gray-500">/</span>
              {isLast ? (
                <span className="text-gray-500">{decodeURIComponent(segment)}</span> // Current segment (non-clickable)
              ) : (
                <Link href={segmentPath} className="text-blue-500 hover:underline">
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
