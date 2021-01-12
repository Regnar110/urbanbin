import { useEffect } from 'react';
import './navigation.scss'
import {Link} from 'react-router-dom'
import UrbanBinLogo from '../../assets/urbanbin-logo.svg'

const Navigation = ({ navType }) => {
    
    const routesArray = [
        {
            path: '/',
            route: 'HOME'
        },
        {
            path: '/company',
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
    
    const handleScrollChange = () => {
        let position = document.querySelector('body').getBoundingClientRect();
        const navbar = document.querySelector('.navigation')
        position.y < -1 ?
            navbar.style.height='100px'
        :
            navbar.style.height='0px'
    }

    const handleScrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(()=> {
        if(navType==='large'){ // dodane z powodu tego, że komponent nie dopuszczał do wyrenderowania małego paska nawigacyjnego bo próbował odpalić funkcję handleScrollChange. NavType to argument przekazany z App który zawiera 'large' lub 'small' - w zależności jaki pasek powinien zostać wyświetlony
           window.addEventListener('scroll', handleScrollChange) 
        }
        return () => {
            window.removeEventListener('scroll', handleScrollChange)
        }
    }, [navType])

    return (
        <nav className='navigation'>
            <div className='urbanbin-logo'>
                <Link to='/'><img id='logo' alt='company-logo' src={UrbanBinLogo} /></Link>
            </div>
            <div className='navigation-routes'>
                {
                    routesArray.map(({path, route, routeFirst}, index) => {
                        return(
                            <div key={index} className='nav-route'>
                                <Link to={path}>
                                    <div className='route-content' onClick={handleScrollToTop}>
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