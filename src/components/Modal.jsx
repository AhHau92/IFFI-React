import React from 'react'
import redArrow_Left from '../images/red-arrow-left.png'
import redArrow_Right from '../images/red-arrow-right.png'
import closePopup from '../images/popup_close.png'
import './modal.css'
import { modal } from '../data'
import { useState } from 'react'

const Modal = ({open , onClose}) => {

    const[index, setIndex] = useState(0)
    const {image} = modal[index];
  
    const prevModalHandler = () => {
      setIndex(prev => prev -1);
  
      if(index <= 0){
        setIndex(modal.length - 1);
      }
    }
    const nextModalHandler = () => {
      setIndex(prev => prev +1);
  
      if(index >= modal.length -1){
        setIndex(0);
      }
    }

    if(!open) return null

  return (
    <div className='overlay'>
      <div className="modalContainer">
        <img alt='redArrowLeft' src={redArrow_Left} className='redArrow_Left' onClick={prevModalHandler} />
        <img alt='Popupimg' src={image} className='popUp-Img' />
       <img alt='redArrowRight' src={redArrow_Right} className='redArrow_Right' onClick={nextModalHandler} />
        <img alt='closepopup' src={closePopup} className='closePopup' onClick={onClose} />

      </div>
      
    </div>
  )
}

export default Modal