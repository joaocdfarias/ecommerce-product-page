import React from 'react'
import { imgMock } from './mock'
import './style.scss'

const Slider = () => {
  const [product, setProduct] = React.useState(0)

  function changeProduct(index: any) {
    setProduct(index)
  }

  return (
    <>
      <div className="imgWrapper">
        <div className="selectedImage">
          {imgMock.map((data, index) => {
            return (
              <img
                src={data.imgSrc}
                alt={'Imagem do produto ' + data.id}
                key={data.id}
                draggable="false"
                className={product === index ? 'selected' : 'hide'}
              />
            )
          })}
        </div>
        <div className="imgSelect">
          {imgMock.map((data, index) => {
            return (
              <img
                onClick={() => changeProduct(index)}
                src={data.imgThumb}
                alt={'Imagem do produto ' + data.id}
                key={data.id}
                draggable="false"
                className={product === index ? 'selected' : ''}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Slider
