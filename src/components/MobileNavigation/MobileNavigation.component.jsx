import { useState } from 'react'
import { fallDown as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './burgerLibStyles.scss'
import './mobilenavigation.scss'
import UrbanBinLogo from '../../assets/urbanbin-logo.svg'

const MobileNavigation = () => {

    const [menuStatus, setMenuStatus] = useState(false)

    const handleMenuOpen = () => {
        setMenuStatus(true)
    }

    const handleMenuClose = () => {
        if(menuStatus){
            setMenuStatus(false)
        }    

    }

    const routesArray = [
        {
            path: '/',
            route: 'HOME'
        },
        {
            path: '/about',
            route: 'COMPANY'
        },
        {
            path: '/products',
            route: 'PRODUCTS'
        },
        {
            path: '/contact',
            route: 'CONTACT US'
        }
    ]

    return (
            <Menu onOpen={handleMenuOpen} onClose={handleMenuClose} isOpen={menuStatus} pageWrapId={ "section" } outerContainerId={ "app" } itemListClassName={ "item-list" } right width={'280px'}>
                <nav id='nav-wrapper'>
                    <div className='small-logo'>
                        <img src={UrbanBinLogo} alt='inner-menu-company-logo'/>
                    </div>
                    <div className='items-wrapper'>
                        {
                            routesArray.map(({path, route}, index) => {
                                return <div key={index} className="menu-item"><Link className='link' onClick={handleMenuClose} to={path}>{route}<div className='underline'/></Link></div>
                            })
                        }
                    </div>
                </nav>
            </Menu>
    )
}

export default MobileNavigation