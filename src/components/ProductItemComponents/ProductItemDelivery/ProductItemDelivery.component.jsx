import './productitemdelivery.scss'
import delivery from '../../../assets/ProductItem/Delivery/delivery.svg'
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
                        return <img alt='delivery' className='delivery-img' key={index} src={deliveryImg} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductItemDelivery