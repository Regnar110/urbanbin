import ProductItemLoading from '../ProductItemLoading/ProductItemLoading'
import './productnotfound.scss'
import notfound from '../../../assets/ProductItem/NotFound/question.svg'

const ProductNotFound = () => { 
    return (
        <div className='product-not-found'>
            <p>We couldn't find the product you were looking for...</p>
            <p>Please try again or report it to us.</p>
            <img src={notfound} />
        </div>
    )
}

export default ProductNotFound;