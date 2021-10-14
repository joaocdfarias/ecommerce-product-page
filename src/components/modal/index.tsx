import React from 'react'
import Button from '../button'
import { sneaker } from '../productInfo/mock'

import './style.scss'

const Modal = () => {
  return (
    <div className="modalCart">
      <div className="modalHeader">
        <h3>Cart</h3>
      </div>
      <div className="modalContent">
        {' '}
        {sneaker.map((item) => {
          console.log(item)
        })}{' '}
      </div>
      <Button name="Checkout"></Button>
    </div>
  )
}

export default Modal
