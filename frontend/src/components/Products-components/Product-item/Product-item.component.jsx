import { useParams, withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './productitem.scss'
import ProductItemHeader from '../Product-item/ProductItemHeader/ProductItemHeader.component'
import ProductItemSlider from '../../ProductItemComponents/Product-item-slider/ProductItemSlider.component'
import ProductItemData from '../../ProductItemComponents/Product-item-data/ProductItemData.component'
import ProductItemWarranty from '../../ProductItemComponents/Product-item-warranty/ProductItemWarranty.component'
import ProductItemDelivery from '../../ProductItemComponents/ProductItemDelivery/ProductItemDelivery.component'
import CustomButton from '../../CustomButton/CustomButton.component'


const ProductItem = ({match}) => {
    let { productId } = useParams();

    const [model, setModel] = useState('')
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
            const response = await fetch(`https://afternoon-oasis-07191.herokuapp.com/mgbs`, requestOptions)
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
        console.log('zostałem zamontowany i mój produkt to ' + match.params.productId) // stan się zmienia na bierząca po wejściu z home i w przerzycaniu menu
        
    }, [model, match.params.productId])
    

    return (
        <div className='product-item'>
            <ProductItemHeader productName={productId.toUpperCase()}/>
            <div className='first-row'>
                <div className='slider-colors'>
                    <ProductItemSlider /> 
                </div>
                <div className='product-data'>
                    <ProductItemData productDetails={productDetails}/>
                </div>
            </div>
            <ProductItemWarranty />
            <ProductItemDelivery />
            <div className='go-to-contact'>
                <p>Are you interested in our products?</p>
                <CustomButton name={'Contact us'} buttonUrlLink={'/contact'} />
            </div>
        </div>

    )
}

export default withRouter(ProductItem);