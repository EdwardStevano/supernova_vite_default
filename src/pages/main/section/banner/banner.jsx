import React from 'react'

// Style importations
import './banner.scss'

// Assest import
import SuperLogo from '@assets/branding/supernova/logo512.png'

function Banner() {
  return (
    <div className='default-style'>
        <div>
            <img src={SuperLogo} alt="Supernova logo" width={'250px'}/>
            <h1>HELLO TEAM SUPERNOVA </h1>
            <small>Tsy de be reasaka fa ty ny bprojet par defaut tsika... Io lery eh. Miasotra amin'ny fiaraha miasa</small>
        </div>   
    </div>
  )
}

export default Banner
