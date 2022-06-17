import React from 'react'
import '../Styles/Bottom.css'
import { Data } from './Data'
import { Social } from './Social'

function Bottom() {
  return (
    <div className='Bottom'>
        <Data/>
        <Social/>
    </div>
  )
}

export {Bottom}