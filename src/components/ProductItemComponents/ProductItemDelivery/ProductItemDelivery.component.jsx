import './productitemdelivery.scss'
import delivery from '../../../assets/ProductItem/Delivery/delivery.svg'
import testdelivery from '../../../assets/Home/ProductCard/120.jpg'
const ProductItemDelivery = ({ deliveryImages }) => {
    return (
        <div className='delivery-container'>
            <img alt='delivery' src={delivery} />
            <span>
                Fast and safe delivery
            </span>
            <div className='delivery-images'>
                {
                    deliveryImages.map((deliveryImg, index)=> {
                        return <img className='delivery-img' key={index} src={deliveryImg} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductItemDelivery