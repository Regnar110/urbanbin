import './custombutton.scss'
import Zoom from 'react-reveal/Zoom';
import { withRouter } from 'react-router-dom'

const CustomButton = ({name, buttonUrlLink,method, history, type}) => {
    return (
        <Zoom>
        <button className='custom-button' onClick={() => {
            history.push(buttonUrlLink); 
            if(method) {
                method();
            }
            }} 
            type={type}>
                {name}
            </button>
        </Zoom>
    )
}

export default withRouter(CustomButton)