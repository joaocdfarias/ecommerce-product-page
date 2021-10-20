import React from 'react'
import { imgMock } from './mock'

import closeIcon from '../../assets/icon-close.svg'

import './style.scss'

const Slider = () => {
  const [product, setProduct] = React.useState(0)
  const [lightboxProduct, setLightboxProduct] = React.useState(0)
  const [lightbox, setLightbox] = React.useState(false)

  function changeProduct(index: any) {
    setProduct(index)
  }

  function changeLightboxProduct(index: any) {
    setLightboxProduct(index)
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
                onClick={() => setLightbox(!lightbox)}
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
      {lightbox ? <div className="backdrop">
        <div className="imgWrapper lightboxWrapper">
          <div className="selectedImage lightboxImg">
          <img onClick={() => setLightbox(!lightbox)} className="closeIcon" src={closeIcon} alt="" />
          {imgMock.map((data, index) => {
            return (
              
              <img
                src={data.imgSrc}
                alt={'Imagem do produto ' + data.id}
                key={data.id}
                draggable="false"
                className={lightboxProduct === index ? 'selected' : 'hide'}
              />
            )
          })}
          </div>
          <div className="imgSelect lighboxImgSelect">
          {imgMock.map((data, index) => {
            return (
              <img
                onClick={() => changeLightboxProduct(index)}
                src={data.imgThumb}
                alt={'Imagem do produto ' + data.id}
                key={data.id}
                draggable="false"
                className={lightboxProduct === index ? 'selected' : ''}
              />
            )
          })}
        </div>
</div>
      </div> : ''}
    </>
  )
}

export default Slider
