import './requestconfirm.scss';
import { useEffect } from 'react'

const RequestConfirm = ({title}) => {

    useEffect(() => {
        const element = document.querySelector('.request-confirm');
        const popUp = setTimeout(() => {
            element.style.transition = '1s ease'
            element.style.opacity = '1';
            element.style.transform = 'translateY(180px)'
        },100)

        return () => {
            clearTimeout(popUp)
        }
    }, [])

    return (
        <div className='request-confirm'>{title}</div>
    )
    
}

export default RequestConfirm