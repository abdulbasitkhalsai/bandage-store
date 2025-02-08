'use client'

import BreadCrumbs from '@/components/universal/breadcrumbs'
import { usePathname } from 'next/navigation'

import React from 'react'

const Blog = () => {
  const router = usePathname()
  console.log(router)
  return (
    <div>
      <BreadCrumbs/>
    </div>
  )
}

export default Blog
