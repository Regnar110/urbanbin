import { useState } from 'react'
import Modal from 'react-modal';
import './productitemmodal.scss'

const ProductItemModal = ({image, text}) => {

    const [modalIsOpen, setIsOpen] = useState(false)

    const customStyles = {
        content : { 
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
       

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return(
        <div>
            <button className='button-modal' onClick={handleOpenModal}>{text}</button>
            <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
                <div className='modal-content'>
                    <img alt='modal-img' className='modal-img' src={image} />
                    <button className='button-modal' onClick={handleCloseModal}>Close</button>
                </div>

            </Modal>
        </div>
    )
}

export default ProductItemModal;