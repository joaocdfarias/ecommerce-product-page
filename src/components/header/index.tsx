import React from 'react'
import logo from '../../assets/logo.svg'
import cart from '../../assets/icon-cart-1.svg'
import avatar from '../../assets/image-avatar.png'

import { useCount } from '../../contexts/CartContext'
import Modal from '../modal'
import './style.scss'

function Header() {
  const [click, setClick] = React.useState(false)
  const [cartClick, setCartClick] = React.useState(false)

  const handleCartClick = () => {
    return setCartClick(!cartClick)
  }

  const handleClick = () => {
    return setClick(!click)
  }

  const { count } = useCount()

  console.log(count)

  return (
    <header>
      <a href="/">
        <img src={logo} alt="Sneakers Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/collections">Collections</a>
          </li>
          <li>
            <a href="/men">Men</a>
          </li>
          <li>
            <a href="/women">Women</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="userWrapper">
        <ul>
          <img onClick={handleCartClick} width={25} height={25} src={cart} alt="Cart" />
          <span className="cartBadge"> {count} </span>
          <img
            onClick={handleClick}
            width={55}
            height={55}
            src={avatar}
            alt="Avatar"
            className={click ? 'active' : ''}
          />
        </ul>
        {click || cartClick ? <Modal /> : null}
      </nav>
    </header>
  )
}

export default Header
