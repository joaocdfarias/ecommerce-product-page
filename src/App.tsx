import React from 'react'
import Slider from './components/slider'
import ProductInfo from './components/productInfo'

import './components/utils/_container.scss'

const App = () => {
  return (
    <main className="wrapper">
      <Slider />
      <ProductInfo />
    </main>
  )
}

export default App
