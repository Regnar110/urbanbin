import { useParams, withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './productitem.scss'
import ProductItemHeader from '../Product-item/ProductItemHeader/ProductItemHeader.component'
import ProductItemSlider from '../../ProductItemComponents/Product-item-slider/ProductItemSlider.component'
import ProductItemColors from '../../ProductItemComponents/Product-item-colors/Product-item-colors.component'
import ProductItemData from '../../ProductItemComponents/Product-item-data/ProductItemData.component'
import ProductItemWarranty from '../../ProductItemComponents/Product-item-warranty/ProductItemWarranty.component'
import p1 from '../../../assets/Home/ProductCard/p1.jpg'
import p2 from '../../../assets/Home/ProductCard/p2.jpg'
import p3 from '../../../assets/Home/ProductCard/p3.jpg'


const ProductItem = ({match}) => {
    let { productId } = useParams();

    const productDetails = [
        {   
            type: 'Capacity', 
            content: ['Nominal capacity (L) - 120']
        },
        {
            type: 'Dimensions', 
            content: [`width(mm) - 500`, 'height(mm) - 950', 'depth(mm) - 550'] ,
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
        },
        {
            type: 'Colors', 
            content: ['Colors possible to choose from the list next to the photo'] 
        },
        {
            button: [
                {
                    text: 'See material certificate',
                    image: p1
                },
                {
                    text: 'See standard certificate',
                    image: p2
                },
                {
                    text: 'See technical drawing',
                    image: p3
                },
            ]
        }         
    ]
    const [model, setModel] = useState()
    const [modelColor, setModelColor] = useState('standard')

    useEffect(() => {
        console.log('zostałem zamontowany i mój produkt to ' + match.params.productId+ 'a mój kolor to '+  modelColor) // stan się zmienia na bierząca po wejściu z home i w przerzycaniu menu
        setModel(match.params.productId)
    }, [match.params.productId])
    

    const handleColorClick = color => {
        setModelColor(color)
        console.log(model)
        console.log(modelColor)
        console.log(`wybrany kolor to ${color}`)
    }

    return (
        <div className='product-item'>
            <ProductItemHeader productName={productId.toUpperCase()}/>
            <div className='first-row'>
                <div className='slider-colors'>
                    <ProductItemColors handleColorClick={handleColorClick}/>
                    <ProductItemSlider modelColor={modelColor} /> 
                </div>
                <div className='product-data'>
                    <ProductItemData productDetails={productDetails}/>
                </div>
            </div>
            <ProductItemWarranty />
        </div>

    )
}

export default withRouter(ProductItem);