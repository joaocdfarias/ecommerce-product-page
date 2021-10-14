import React from 'react'
import cartIcon from '../../assets/icon-cart.svg'

import './style.scss'

interface ButtonI {
  name: string
  hasIcon?: boolean
  onClick?: (count: any) => void
}

const Button = ({ name, hasIcon, onClick }: ButtonI) => {
  return (
    <button {...{ onClick }}>
      {hasIcon ? <img src={hasIcon ? cartIcon : undefined} alt="" /> : ''}{' '}
      {name}
    </button>
  )
}

export default Button
