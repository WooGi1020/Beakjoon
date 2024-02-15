import { useState } from 'react'
import './Viewer.css'

export default function Viewer({count}) {

  return(
    <div className='Viewer'>
      <div>현재 카운트</div>
      <h1 className='count'>{count}</h1>
    </div>
  )
}