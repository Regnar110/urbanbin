import './productcard.scss'
const ProductCard = ({name, image}) => {
    return(
        <div className='product-card' style={{
            background: `url(${image}) center center no-repeat`,
            backgroundSize: 'cover'
        }}>
            <div className='hover-mask' />
            <div className='card-hidden-footer'><div>CLICK AND CHECK</div></div>
            <div className='card-footer'>{name}</div>
        </div>
    )
}

export default ProductCard