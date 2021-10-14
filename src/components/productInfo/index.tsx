import React from 'react'
import Button from '../button'
import Counter from '../counter'

import { sneaker } from './mock'

import { useCount } from '../../contexts/CartContext'

import './style.scss'

const ProductInfo = () => {
  const [counter, setCounter] = React.useState(0)
  const { setCount } = useCount()

  return (
    <>
      {sneaker.map((item) => {
        return (
          <div className="productInfo">
            <span className="brand"> {item.brand} </span>
            <h2 className="productName"> {item.productName} </h2>
            <p className="productDescription">{item.description}</p>
            <div className="pricesWrapper">
              <p>
                ${item.discountPrice}.00{' '}
                <span className="discount">{item.discout}%</span>
              </p>
              <p>
                <s>${item.initialPrice}.00</s>
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
      })}
    </>
  )
}

export default ProductInfo
