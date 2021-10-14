import React from 'react'
import './style.scss'
import cartIcon from '../../assets/icon-cart.svg'

interface ButtonI {
  name: string
  hasIcon: boolean
  onClick?: (count: any) => void
}

const Button = ({ name, hasIcon, onClick }: ButtonI) => {
  return (
    <button {...{ onClick }}>
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
