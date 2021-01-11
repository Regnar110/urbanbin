import { useState, useEffect } from 'react'
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation.component'
import SidePopUpBar from '../components/Side-popup-bar/SidePopUp.component'
import MobileNavigation from '../components/MobileNavigation/MobileNavigation.component'
import Company from '../pages/Company/Company.component'
import Home from '../pages/Home/Home.component'
import Contact from '../pages/Contact/Contact.component'
import Products from '../pages/Products/Products.component'
import Footer from '../components/Footer/Footer.component'

const App = () => {

  const [navType, setNav] = useState('');

  const windowW= window.innerWidth;

  const changeNavBar = () => { // change nav-bar when resizing window
    const navBarRender = window.matchMedia("(max-width: 890px)")
      navBarRender.matches ? setNav('small') : setNav('large');
  }

  useEffect(() => { // check if window width is less or equal 621px and do action depending on this data
    alert('Dodałem zawartość do strony Company. Dodałem też kilka animacji, któe uruchamiają się kiedy ktoś będzie widział animowany element(animacje wejścia)')
    window.addEventListener('resize', changeNavBar);
    windowW <= 890 ?
      setNav('small')
      :
      setNav('large')

      return () => {
        window.removeEventListener('resize', changeNavBar)
      }
  }, [windowW])

  return (
    <div id='app' className='App'>
      {
        navType === 'large' ? <Navigation navType={navType}/> : <MobileNavigation />
      }
      <SidePopUpBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/company' component={Company} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/products' component={Products} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
