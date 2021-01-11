import './custombutton.scss'
import { withRouter } from 'react-router-dom'

const CustomButton = ({name, buttonUrlLink,method, history, type}) => {
    return (
        <button className='custom-button' onClick={() => {
            history.push(buttonUrlLink); 
            if(method) {
                method();
            }
            }} 
            type={type}>
                {name}
            </button>
    )
}

export default withRouter(CustomButton)