import Footer from '@/components/universal/footer'
import Header from '@/components/universal/header'
import Category from '@/components/shop/category'
import Logos from '@/components/shop/logos'
import Products from '@/components/shop/products'
import React from 'react'
import Ribbon from '@/components/universal/ribbon'

const Shop = () => {
  return (
    <div>
      <Header><Ribbon/></Header>
      <Category/>
      <Products/>
      <Logos/>
      <Footer/>
    </div>
  )
}

export default Shop
