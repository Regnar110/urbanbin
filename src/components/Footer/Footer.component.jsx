import './footer.scss';
import { withRouter } from 'react-router-dom'
import urbanbinlogo from '../../assets/urbanbin-logo-simple.svg'

const Footer = ({history}) => {

    const handleScrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img alt='footer' src={urbanbinlogo} />
                <p>
                    Manufacturer of metal waste containers since 2017
                </p>
            </div>
            <h2>Shortcuts</h2>
            <div className='footer-content'>
                <span onClick={()=>{history.push('/'); handleScrollToTop();}}>HOME</span>
                <span onClick={()=>{history.push('/company'); handleScrollToTop();}}>COMPANY</span>
                <span onClick={()=>{history.push('/products'); handleScrollToTop();}}>PRODUCTS</span>
                <span onClick={()=>{history.push('/contact'); handleScrollToTop();}}>CONTACT US</span>
            </div>
            <div className='under-footer'>
                <span> © URBANBIN - for a clean future 2021</span>
            </div>
        </div>
    )
}

export default withRouter(Footer);