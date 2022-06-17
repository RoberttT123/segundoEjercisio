import React from 'react'
import Linkedin from '../Assets/Linkedin.png'
import Instagram from '../Assets/Instagram.png'
import '../Styles/Social.css'
function Social() {
  return (
    <div className='Social'>
        <img src={Linkedin} alt='Linkedin'/>
        <span>
            Yaretas24
        </span>
        <img src={Instagram} alt='Instagram'/>
        <span>
            Yaretas24
        </span>
    </div>
  )
}

export  {Social}