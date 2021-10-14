import React from 'react'
import Slider from './components/slider'
import ProductInfo from './components/productInfo'

import CartProvider from './contexts/CartContext'

import Header from './components/header'

import './components/utils/_container.scss'

const App = () => {
  return (
    <CartProvider>
      <Header />
      <main className="wrapper">
        <Slider />
        <ProductInfo />
      </main>
    </CartProvider>
  )
}

export default App
