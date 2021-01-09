import './productcard.scss'
import { withRouter } from "react-router-dom";

const ProductCard = ({name, image, UrlLink, history}) => {
    return(
        <div className='product-card' onClick={() => history.push(`${UrlLink}`)} style={{
            background: `url(${image}) center center no-repeat`,
            backgroundSize: 'cover'
        }}>
            <div className='hover-mask' />
            <div className='card-hidden-footer'><div>CLICK AND CHECK</div></div>
            <div className='card-footer'>{name}</div>
        </div>
    )
}

export default withRouter(ProductCard)