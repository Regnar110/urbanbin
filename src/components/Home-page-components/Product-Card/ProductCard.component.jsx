import './productcard.scss'
import { withRouter } from "react-router-dom";

const ProductCard = ({name, image, UrlLink, history}) => {

    const handleScrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <div className='product-card' onClick={() => {history.push(`products/${UrlLink}`); handleScrollToTop();}} style={{
            background: `url(${image}) center center no-repeat`,
            backgroundSize: 'contain'
        }}>
            <div className='hover-mask' />
            <div className='card-hidden-footer'><div>CLICK AND CHECK</div></div>
            <div className='card-footer'>{name}</div>
        </div>
    )
}

export default withRouter(ProductCard)