import './productitemdelivery.scss'
import delivery from '../../../assets/ProductItem/Delivery/delivery.svg'
import testdelivery from '../../../assets/Home/ProductCard/p1.jpg'
const ProductItemDelivery = () => {
    return (
        <div className='delivery-container'>
            <img alt='delivery' src={delivery} />
            <span>
                Fast and safe delivery
            </span>
            <div className='delivery-images'>
                <div className='delivery' style={{
                    background: `url(${testdelivery}) center center no-repeat`,
                    backgroundSize: 'cover'
                }}/>
                <div className='delivery' style={{
                    background: `url(${testdelivery}) center center no-repeat`,
                    backgroundSize: 'cover'
                }}/>
            </div>
        </div>
    )
}

export default ProductItemDelivery