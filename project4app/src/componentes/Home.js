import React from 'react'
import LeftArrow from './assest/icons/left-arrow.png'
import RightArrow from './assest/icons/right-arrow.png'
import Product from './Product'
import ShowItems from './ShowItems'


export default function Home() {
  const slider = {
    width: '1200px',
    height: '550px',
    margin: 'auto',
    position: 'relative',

  }
  const nsSlider = {
    width: '100%',
    height: '100%',
    position: 'relative'

  }
  const item = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: '1s ease-in-out'

  }

  const sliderRight = {
    position: 'absolute',
    right: '-1px',
    top: '50%',
    backgroundColor: 'transparent',
    marginTop: '-20px',
    border: 'none',
    padding: '10px',
    zIndex: '5',
    opacity: '0.4'



  }
  const sliderLeft = {
    position: 'absolute',
    left: '-1px',
    top: '50%',
    marginTop: '-20px',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '10px',
    zIndex: '5',
    opacity: '0.4'

  }
  const img = {
    filter: 'invert(1)',
    width: '30px',
    height: '35px',
    opacity: '0.4'
  }
  const dottt = {
    width: '150px',
    height: 'auto',
    position: 'absolute',
    right: '50%',
    top:'615px',
    marginRight: '-75px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',


  }
  const itemD = {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: 'rgba(38, 59, 179, 0.769)',
  }

  const overlay = {
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'

  }



  function RightArrow1() {
    let item = document.querySelectorAll('.item')
    let itemActive = document.querySelectorAll('.dot')
    let activedot = 0
    let activeIndex = 0

    for (let i = 0; i < itemActive.length; i++) {
      if (itemActive[i].classList.contains('active')) {
        activedot = i
      }
      itemActive[i].classList.remove('active')
    }

    if (activedot == itemActive.length - 1) {
      activedot = 0
      itemActive[activedot].classList.add('active')
    } else {
      itemActive[activedot + 1].classList.add('active')
    }


    for (let i = 0; i < item.length; i++) {
      if (item[i].classList.contains('active')) {
        activeIndex = i
      }
      item[i].classList.remove('active')

    }

    if (activeIndex == item.length - 1) {
      activeIndex = 0


      item[activeIndex].classList.add('active')

    } else {
      item[activeIndex + 1].classList.add('active')
    }


  }


  function LeftArrow1() {
    let item = document.querySelectorAll('.item')
    let itemActive = document.querySelectorAll('.dot')
    let activedot = 0
    let activeIndex = 0


    for (let i = 0; i < itemActive.length; i++) {
      if (itemActive[i].classList.contains('active')) {
        activedot = i
      }
      itemActive[i].classList.remove('active')
    }

    if (activedot == 0) {
      activedot = itemActive.length - 1
      itemActive[activedot].classList.add('active')
    } else {
      itemActive[activedot - 1].classList.add('active')
    }

    for (let i = 0; i < item.length; i++) {
      if (item[i].classList.contains('active')) {
        activeIndex = i
      }
      item[i].classList.remove('active')

    }

    if (activeIndex == 0) {
      activeIndex = item.length - 1

      item[activeIndex].classList.add('active')

    } else {
      item[activeIndex - 1].classList.add('active')
    }

  }



  return (

    <>


      <div className='container-fluid'>
        <div className=' slider' style={slider}>
          <div className='ns-slider' style={nsSlider}>
            <div className='item bg1 active' style={item}>
              <div className='overlay' style={overlay}>
                <h3>

                </h3>

              </div>
            </div>
            <div className='item bg2' style={item}>
            <div className='overlay' style={overlay}>
                <h3>

                </h3>

              </div>
            </div>
            <div className='item bg3 ' style={item}>
            <div className='overlay' style={overlay}>
                <h3>

                </h3>

              </div>
            </div>
            <div className='item bg4' style={item}>
            <div className='overlay' style={overlay}>
                <h3>

                </h3>

              </div>
            </div>


          </div>
          <button className='sliderRight' style={sliderRight} onClick={RightArrow1}>
            <img src={RightArrow} style={img} />
          </button>
          <button className='sliderLeft' style={sliderLeft} onClick={LeftArrow1}>
            <img src={LeftArrow} style={img} />
          </button>
        </div>

        <div className='dottt mt-3' style={dottt}>
          <div className='dot active' style={itemD}></div>
          <div className='dot ' style={itemD}></div>
          <div className='dot' style={itemD}></div>
          <div className='dot' style={itemD}></div>

        </div>
      </div>

      <Product />

    <ShowItems/>


    </>
  )
}
