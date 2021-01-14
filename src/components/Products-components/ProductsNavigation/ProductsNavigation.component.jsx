import './productNavigation.scss'
import arrow from '../../../assets/Products/ProductsNavigation/arrow.svg'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'

const ProductNavigation = ({history}) => {

    const productList = [
        {
            product: 'MGBS-120L',
            UrlLink: '/products/mgbs-120l'
        },
        {
            product: 'MGBS-240L',
            UrlLink: '/products/mgbs-240l'
        },
        {
            product: 'MGBS-700L',
            UrlLink: '/products/mgbs-700l'
        },
        {
            product: 'MGBS-1100L',
            UrlLink: '/products/mgbs-1100l'
        },
        {
            product: 'MGBS-2500L',
            UrlLink: '/products/mgbs-2500l'
            
        },
        {
            product: 'Street Bins',
            UrlLink: '/products/street-bin'
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
                            return <li key={index} className={`${isMenuOpen ? 'appear': ''} product`} onClick={(() => {history.push(UrlLink); handleMenuClose();})}>
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