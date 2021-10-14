import React from 'react'
import Button from '../button'
import Counter from '../counter'

import { useCount } from '../../contexts/CartContext'

import './style.scss'

const ProductInfo = () => {
  const [counter, setCounter] = React.useState(0)
  const { setCount } = useCount()

  return (
    <div className="productInfo">
      <span className="brand">Sneaker Company</span>
      <h2 className="productName">Fall Limited Edition Sneakers</h2>
      <p className="productDescription">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll whithstand everything the
        weather can offer.
      </p>
      <div className="pricesWrapper">
        <p>
          $125.00 <span className="discount">50%</span>
        </p>
        <p>
          <s>$250.00</s>
        </p>
      </div>
      <div className="buttonWrapper">
        <Counter count={counter} setCount={setCounter} />
        <Button
          onClick={() => setCount(counter)}
          hasIcon
          name="Add to cart"
        ></Button>
      </div>
    </div>
  )
}

export default ProductInfo
