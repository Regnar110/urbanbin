import './footer.scss';
import { withRouter } from 'react-router-dom'
import urbanbinlogo from '../../assets/urbanbin-logo-simple.svg'

const Footer = ({history}) => {
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
                <span onClick={()=>history.push('/')}>HOME</span>
                <span onClick={()=>history.push('/company')}>COMPANY</span>
                <span onClick={()=>history.push('/products')}>PRODUCTS</span>
                <span onClick={()=>history.push('/contact')}>CONTACT US</span>
            </div>
            <div className='under-footer'>
                <span> © URBANBIN - for a clean future 2021 | Developed by MateuszW</span>
            </div>
        </div>
    )
}

export default withRouter(Footer);