import { useEffect } from 'react';
import './navigation.scss'
import {Link} from 'react-router-dom'
import UrbanBinLogo from '../../assets/urbanbin-logo.svg'

const Navigation = () => {
    
    const routesArray = [
        {
            path: '/',
            route: 'HOME'
        },
        {
            path: '/about',
            route: 'ABOUT'
        },
        {
            path: '/products',
            route: 'PRODUCTS'
        },
        {
            path: '/contact',
            route: 'CONTACT'
        }
    ]
    
    const handleScrollChange = () => {
        let position = document.querySelector('body').getBoundingClientRect();
        const navbar = document.querySelector('.navigation')
        position.y < -1 ?
            navbar.style.height='85px'
        :
            navbar.style.height='115px'
    }
    
    useEffect(()=> {
        window.addEventListener('scroll', handleScrollChange)
        return () => {
            console.log('event-listener clearing')
            window.removeEventListener('scroll', handleScrollChange)
        }
    }, [])

    return (
        <nav className='navigation'>
            <div className='urbanbin-logo'>
                <Link to='/'><img id='logo' alt='company-logo' src={UrbanBinLogo} /></Link>
            </div>
            <div className='navigation-routes'>
                {
                    routesArray.map(({path, route}) => {
                        return(
                            <div className='nav-route'>
                                <Link to={path}>
                                    <div className='route-content'>
                                       {route}
                                    </div>
                                    <div className='underline'/>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Navigation;