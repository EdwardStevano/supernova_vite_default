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
            <h1 className=''>HELLO TEAM SUPERNOVA </h1>
            <small className='text-px10'>Tsy de be reasaka fa ty ny bprojet par defaut tsika... Io lery eh. Miasotra amin'ny fiaraha miasa</small>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta reprehenderit, quidem voluptate tempore quae animi facilis minus dolore illo et ab nostrum omnis repudiandae laudantium accusamus nemo sed perferendis exercitationem.</p>
        </div>   
    </div>
  )
}

export default Banner
