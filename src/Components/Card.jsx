import React from 'react'
import '../Styles/Card.css'
import { Top } from './Top'
import { Bottom } from './Bottom'
function Card() {
  return (
    <div className='card'>
        <Top/>
        <Bottom/>
    </div>
  )
}

export {Card}