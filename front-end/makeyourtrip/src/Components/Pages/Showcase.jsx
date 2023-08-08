import { Card, CardContent } from '@mui/material'
import trvlr from '../../images/trvr.png'
import './Showcase.css'
import React from 'react'

const Showcase =() => {
  return (
    <div className='container' style={{height:'80vh'}}>
                    <p className='packhead'>Testimonals</p>

        <div className='Circle2'>
                    <img src={trvlr} alt="" className='image2' />
                </div>
    </div>
  )
}

export default Showcase