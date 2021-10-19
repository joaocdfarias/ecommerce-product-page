import React from 'react'
import Button from '../button'
import { sneaker } from '../productInfo/mock'
import img1thumb from '../../assets/image-product-1-thumbnail.jpg'
import iconDelete from '../../assets/icon-delete.svg'
import { useCount } from '../../contexts/CartContext'

import './style.scss'

const Modal = () => {
  let { count,setCount } = useCount()

  return (
    <div className="modalCart">
      <div className="modalHeader">
        <h3>Cart</h3>
      </div>
      {count === 0 ? '' : <div className="modalContent">
        {sneaker.map((item, id) => {
          return (
            <div key={id} className="modalProduct">
              <img className="thumbnail" src={img1thumb} alt="" />
              <div className="productDetails">
                <p> {item.productName} </p>
                <p>
                  {' '}
                  ${item.discountPrice}.00 x {count}{' '}
                  <strong> ${item.discountPrice * count}.00 </strong>{' '}
                </p>
              </div>
              <img onClick={() => setCount(count = 0)} className="iconDelete" src={iconDelete} alt="" />
            </div>
          )
        })}
      </div>}
      <Button name="Checkout"></Button>
    </div>
  )
}

export default Modal
