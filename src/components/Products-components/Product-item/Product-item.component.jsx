import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './productitem.scss'
import ProductItemHeader from '../Product-item/ProductItemHeader/ProductItemHeader.component'
import ProductItemSlider from '../../ProductItemComponents/Product-item-slider/ProductItemSlider.component'
import ProductItemColors from '../../ProductItemComponents/Product-item-colors/Product-item-colors.component'
import ProductItemData from '../../ProductItemComponents/Product-item-data/ProductItemData.component'
import ProductItemWarranty from '../../ProductItemComponents/Product-item-warranty/ProductItemWarranty.component'

const ProductItem = () => {

    const productDetails = [
        {
            type: 'Capacity', 
            content: ['Nominal capacity (L) - 120']
        },
        {
            type: 'Dimensions', 
            content: [`width(mm) - 500`, 'height(mm) - 950', 'depth(mm) - 550'] 
        },
        {
            type: 'Mass', 
            content: ['curb weight(kg) ~ 17', 'maximum load weight(kg) ~ 120'],
        },
        {
            type: 'Material and construction', 
            content: ['galvanized steel sheet - fireproof', 'performance standard - EN-840'],
        },
        {
            type: 'Anti-corrosion protection and color', 
            content: ['powder coating with FreiLacke paints', 'RAL color palette'],
        },
        {
           type: 'Stickers', 
           content: ['Custom sticker availables'] 
        }       
    ]

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
                    <ProductItemData productDetails={productDetails}/>
                </div>
            </div>
            <ProductItemWarranty />
        </div>

    )
}

export default ProductItem;