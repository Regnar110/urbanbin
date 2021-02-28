import './custombutton.scss'
import { withRouter } from 'react-router-dom'

const CustomButton = ({name, buttonUrlLink,method, history, type}) => {

    const handleScrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    return (
        <button className='custom-button' onClick={() => {
            history.push(buttonUrlLink); 
            if(method) {
                method();
            }
            handleScrollToTop();
            }} 
            type={type}>
                {name}
            </button>
    )
}

export default withRouter(CustomButton)