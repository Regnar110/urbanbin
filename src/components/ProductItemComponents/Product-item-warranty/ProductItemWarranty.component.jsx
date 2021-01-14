import './productitemwarranty.scss'
import warrantybg from '../../../assets/ProductItem/Warranty/warrantybg.jpg'
import warrantyicon from '../../../assets/ProductItem/Warranty/warranty.svg'

const ProductItemWarranty = () => {
    return (
        <div className='warranty-break' style={
            {
                background: `url(${warrantybg}) center center no-repeat fixed`,
                backgroundSize: '100%'
            }}>
            <div className='mask'>
                <img src={warrantyicon} />
                    <p>
                        Lifetime warranty on discharge handles
                    </p>
                <img src={warrantyicon} />
            </div>
        </div>
    )
}

export default ProductItemWarranty;