import React from 'react'
import { imgMock } from './mock'
import './style.scss'

const Slider = () => {
  const [product, setProduct] = React.useState(0)

  function changeProduct(index: any) {
    setProduct(index)
  }

  return (
    <div className="imgWrapper">
      {imgMock.map((data, index) => {
        return (
          <img
            onClick={() => changeProduct(index)}
            src={data.imgThumb}
            alt={'Imagem do produto ' + data.id}
            key={data.id}
            className={product === index ? 'selected' : ''}
          />
        )
      })}
    </div>
  )
}

export default Slider
