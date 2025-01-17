import Category from '@/components/shop/category'
import Logos from '@/components/shop/logos'
import Products from '@/components/shop/products'
import React from 'react'
const Shop = () => {
  return (
    <div>
      {/* <Header><Ribbon/></Header> */}
      <Category/>
      <Products/>
      <Logos/>
    </div>
  )
}

export default Shop
