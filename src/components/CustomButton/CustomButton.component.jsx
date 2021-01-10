import './custombutton.scss'
import { withRouter } from 'react-router-dom'

const CustomButton = ({name, buttonUrlLink, history, type}) => {
    return (
        <button className='custom-button' onClick={()=>history.push(buttonUrlLink)} type={type}>{name}</button>
    )
}

export default withRouter(CustomButton)