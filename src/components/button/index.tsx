import React from 'react'
import './style.scss'
import cartIcon from '../../assets/icon-cart.svg'

interface ButtonI {
  name: string
  hasIcon: boolean
}

const Button = ({ name, hasIcon }: ButtonI) => {
  return (
    <button>
      {' '}
      <span>
        {' '}
        <img src={hasIcon ? cartIcon : undefined} alt="" />{' '}
      </span>{' '}
      {name}
    </button>
  )
}

export default Button
