import redArrow_Left from '../images/red-arrow-left.png'
import redArrow_Right from '../images/red-arrow-right.png'
import closePopup from '../images/popup_close.png'
import './modal.css'
import { modal__3 } from '../data'
import { useState } from 'react'


const Modal__3 = ({open , onClose}) => {

  const[index, setIndex] = useState(0)
    const {image} = modal__3[index];
  
    const prevModal__3Handler = () => {
      setIndex(prev => prev -1);
  
      if(index <= 0){
        setIndex(modal__3.length - 1);
      }
    }
    const nextModal__3Handler = () => {
      setIndex(prev => prev +1);
  
      if(index >= modal__3.length -1){
        setIndex(0);
      }
    }

    if(!open) return null
  return (

    <div className='overlay'>
      <div className="modalContainer">
        <img src={redArrow_Left} className='redArrow_Left' onClick={prevModal__3Handler} />
        <img src={image} className='popUp-Img' />
       <img src={redArrow_Right} className='redArrow_Right' onClick={nextModal__3Handler} />
        <img src={closePopup} className='closePopup' onClick={onClose} />

      </div>
      
    </div>
  )
}

export default Modal__3