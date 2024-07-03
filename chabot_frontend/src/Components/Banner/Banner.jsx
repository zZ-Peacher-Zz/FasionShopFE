import React from 'react'
import shoe_img from '../../assets/shoes.png'
import './Banner.css'
import pant_img from '../../assets/pant.png'
import sweater_img from '../../assets/sweater.png'
import model_img from '../../assets/model.png'
import "@fontsource/montserrat/800.css"

const Banner = () => {
  return (
    <div>
        <div className='Banner'>
            <div className='banner-left'>
                <div className='sale-off'>
                    <p>SUMMER SALE OFF</p>
                    <button>Mua ngay</button>
                </div>
                <div className='shoe-img'>
                    <img src={shoe_img} alt="" />
                    <p className='title'>Giày da</p>
                    <p>350.000 VND</p>
                </div>
            </div>

            <div className='banner-center'>
                <img src={model_img} alt="" className='model-img'/>
            </div>

            <div className='banner-right'>
                <div className='sweater-img'>
                    <img src={sweater_img} alt="" />
                    <p className='title'>Sweater</p>
                    <p>200.000 VND</p>
                </div>

                <div className='pant-img'>
                    <img src={pant_img} alt="" />
                    <p className='title'>Quần dài</p>
                    <p>300.000 VND</p>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default Banner
