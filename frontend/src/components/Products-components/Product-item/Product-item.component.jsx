import { useParams, withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './productitem.scss'
import ProductItemHeader from '../Product-item/ProductItemHeader/ProductItemHeader.component'
import ProductItemSlider from '../../ProductItemComponents/Product-item-slider/ProductItemSlider.component'
import ProductItemColors from '../../ProductItemComponents/Product-item-colors/Product-item-colors.component'
import ProductItemData from '../../ProductItemComponents/Product-item-data/ProductItemData.component'
import ProductItemWarranty from '../../ProductItemComponents/Product-item-warranty/ProductItemWarranty.component'


const ProductItem = ({match}) => {
    let { productId } = useParams();

    const [model, setModel] = useState('')
    const [modelColor, setModelColor] = useState('standard')
    const [productDetails , setProductDetails] = useState([])

    const handleFetchProductDetails = async (currentProduct) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
                body: JSON.stringify({
                    model: currentProduct
                  }),
            redirect: 'follow'
          };
        try {
            const response = await fetch(`https://clamsy-treodot20202020.herokuapp.com/mgbs`, requestOptions)
            const data = await response.json();
            console.log(data)
            setProductDetails(data.ProductDetails)

        } catch(err) {

            console.log(err)

        }

    }

    useEffect(() => { // przy zamontowaniu będziemy ściągać dane techniczne konkretnego produktu + zdjęcia standard i zdjęcia techniczne
        setModel(match.params.productId);
        handleFetchProductDetails(match.params.productId);
        console.log('zostałem zamontowany i mój produkt to ' + match.params.productId+ 'a mój kolor to '+  modelColor) // stan się zmienia na bierząca po wejściu z home i w przerzycaniu menu
        
    }, [model, match.params.productId, modelColor])
    

    const handleColorClick = color => { // na kliknięcie koloru będziemy ściągać zdjęcia z bazy
        setModelColor(color)
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