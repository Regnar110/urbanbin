import './productitemheader.scss'

const ProductItemHeader = ({ productName }) => {
    return(
        <div className='product-item-header'>
            <div>{productName}</div>
            <div className='underline'/>
        </div>
    )
    
}

export default ProductItemHeader;