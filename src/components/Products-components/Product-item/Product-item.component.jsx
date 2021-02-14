import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './productitem.scss'
import ProductItemHeader from '../Product-item/ProductItemHeader/ProductItemHeader.component'
import ProductItemSwiper from '../../ProductItemComponents/Product-item-swiper/ProductItemSwiper'
import ProductItemData from '../../ProductItemComponents/Product-item-data/ProductItemData.component'
import ProductItemWarranty from '../../ProductItemComponents/Product-item-warranty/ProductItemWarranty.component'
import ProductItemDelivery from '../../ProductItemComponents/ProductItemDelivery/ProductItemDelivery.component'
import CustomButton from '../../CustomButton/CustomButton.component'
import ProductItemLoading from '../../ProductItemComponents/ProductItemLoading/ProductItemLoading'


const ProductItem = ({match}) => { 
    const [model, setModel] = useState('')
    const [productDetails , setProductDetails] = useState([])
    const [productImages, setProductImages] = useState([])
    const [productDeliveryImages, setProductDeliveryImages] = useState([])
    const [loading, setLoading] = useState(false)

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
            setLoading(true);
            const response = await fetch(`https://safe-island-97197.herokuapp.com/mgbs`, requestOptions)
            const data = await response.json();
            setProductDetails(data.ProductDetails)
            setModel(data.name)
            setProductImages(data.ProductImages)
            setProductDeliveryImages(data.ProductPack)
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => { // przy zamontowaniu będziemy ściągać dane techniczne konkretnego produktu + zdjęcia standard i zdjęcia techniczne
        handleFetchProductDetails(match.params.productId);
        console.log('zostałem zamontowany i mój produkt to ' + model) // stan się zmienia na bierząca po wejściu z home i w przerzycaniu menu
        
    }, [model, match.params.productId])
    

    return (
        <div className='product-item'>
            <ProductItemHeader productName={model.toUpperCase()}/>
            {
                loading ? (
                    <ProductItemLoading />
                ): 
                (
                    <>
                        <div className='first-row'>
                            <div className='slider-colors'>
                                <ProductItemSwiper productImages={productImages}/>
                            </div>
                            <div className='product-data'>
                                <ProductItemData productDetails={productDetails}/>
                            </div>
                        </div>
                        <ProductItemWarranty />
                        <ProductItemDelivery deliveryImages={productDeliveryImages}/>
                        <div className='go-to-contact'>
                            <p>Are you interested in our products?</p>
                            <CustomButton name={'Contact us'} buttonUrlLink={'/contact'} />
                        </div>
                    </>
                )
            }
        </div>

    )
}

export default withRouter(ProductItem);