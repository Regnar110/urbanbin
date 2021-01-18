import './homeproducts.scss'
import '../Home-header/HomeHeader.component'

import HomeHeader from '../Home-header/HomeHeader.component';
import ProductCard from '../Product-Card/ProductCard.component'
import CustomButton from '../../CustomButton/CustomButton.component'

const HomeProducts = ({productList}) => {
    return (
        <div className='home-products'>
        <HomeHeader header={'Products'}/>
            <div className='home-products-content'>
                <div className='product-cards'>
                    {
                        productList.map(({product, image, UrlLink}, index) => {
                            return <ProductCard key={index} name={product} image={image} UrlLink={UrlLink}/>
                        })
                    }
                </div>
                
            </div>
            <CustomButton name={'Products'} buttonUrlLink={'/products'}/>
        </div>
    )
}

export default HomeProducts;