import React ,{useState}from 'react'
import './user.scss'

const Popup = () => {
    const[popup,setPopup]=useState(false)
    const showPopup=()=>{
        setPopup(!popup)
    }
  return (
    <div className='popup'>
       
        <div className='backdrop' onClick='closePopup'></div>
        <button type='button' onClick={showPopup}>Show Popup</button>
        <div className='card' style={(display=popup?'block':'none')}>
            <h1>Popup</h1>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>


        </div>
    </div>
  )
}

export default Popup