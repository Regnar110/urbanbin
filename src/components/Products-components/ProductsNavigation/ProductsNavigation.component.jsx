import './productNavigation.scss'
import arrow from '../../../assets/Products/ProductsNavigation/arrow.svg'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'

const ProductNavigation = ({history, productChange}) => {

    const productList = [
        {
            product: 'MGBS-120L',
            UrlLink: 'mgbs-120l'
        },
        {
            product: 'MGBS-240L',
            UrlLink: 'mgbs-240l'
        },
        {
            product: 'MGBS-660L',
            UrlLink: 'mgbs-660l'
        },
        {
            product: 'MGBS-1100L',
            UrlLink: 'mgbs-1100l'
        },
        {
            product: 'MGBS-2200L',
            UrlLink: 'mgbs-2200l'
            
        },
        {
            product: 'Street Bins',
            UrlLink: 'street-bin'
        }


    ]

    const [isMenuOpen, changeMenuStatus] = useState(false)

    const handleMenuOpen = () => {
        !isMenuOpen ? changeMenuStatus(true) : changeMenuStatus(false);
    }

    const handleMenuClose = () => {
        changeMenuStatus(false)
    }

    return (
        <nav className='products-navigation'>
            <div className='opening-button'>
                <div onClick={handleMenuOpen}>
                    <img alt='arrow' className={`${isMenuOpen ? 'rotate': ''}`} src={arrow}/>
                    {isMenuOpen ? 'Chose your product' : 'Click to see products'}
                </div>
            </div>
            <div className={`${isMenuOpen ? 'open' : ''} navigation-drop`}>
                <ul>
                    {
                        productList.map(({product, UrlLink}, index) => {
                            return <li key={index} className={`${isMenuOpen ? 'appear': ''} product`} onClick={(() => {history.push('/products/'+UrlLink); handleMenuClose();})}>
                                {product}

                            </li>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(ProductNavigation);