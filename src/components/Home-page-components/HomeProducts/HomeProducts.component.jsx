import './homeproducts.scss'
import '../Home-header/HomeHeader.component'
import HomeHeader from '../Home-header/HomeHeader.component';
import ProductCard from '../Product-Card/ProductCard.component'

const HomeProducts = ({productList}) => {
    return (
        <div className='home-products'>
        <HomeHeader header={'Products'}/>
            <div className='home-products-content'>
                <div className='product-cards'>
                    {
                        productList.map(({product, image}, index) => {
                            return <ProductCard key={index} name={product} image={image} />
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default HomeProducts;