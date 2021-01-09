import './custombutton.scss'
import { withRouter } from 'react-router-dom'

const CustomButton = ({name, buttonUrlLink, history}) => {
    return (
        <div className='custom-button' onClick={()=>history.push(buttonUrlLink)}>{name}</div>
    )
}

export default withRouter(CustomButton)