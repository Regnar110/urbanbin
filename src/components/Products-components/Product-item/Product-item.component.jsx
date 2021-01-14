import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './productitem.scss'
import ProductItemHeader from '../Product-item/ProductItemHeader/ProductItemHeader.component'
import ProductItemSlider from '../../ProductItemComponents/Product-item-slider/ProductItemSlider.component'
import ProductItemColors from '../../ProductItemComponents/Product-item-colors/Product-item-colors.component'
import ProductItemData from '../../ProductItemComponents/Product-item-data/ProductItemData.component'
import ProductItemWarranty from '../../ProductItemComponents/Product-item-warranty/ProductItemWarranty.component'

const ProductItem = () => {

    const [currentProduct, changeProduct] = useState([])

    let { productId } = useParams();

    const handleColorClick = color => {
        console.log(`wybrany kolor to ${color}`)
    }

    return (
        <div className='product-item'>
            <ProductItemHeader productName={productId.toUpperCase()}/>
            <div className='first-row'>
                <div className='slider-colors'>
                    <ProductItemColors handleColorClick={handleColorClick}/>
                    <ProductItemSlider /> 
                </div>
                <div className='product-data'>
                    <ProductItemData />
                </div>
            </div>
            <ProductItemWarranty />
        </div>

    )
}

export default ProductItem;