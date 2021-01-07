import './App.scss';
import {Switch, Route} from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation.component'
import About from '../pages/About/About.component'
import Home from '../pages/Home/Home.component'
import Contact from '../pages/Contact/Contact.component'
import Products from '../pages/Products/Products.component'

const App = () => {
  return (
    <div className='App'>
    <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/products' component={Products} />
      </Switch>
    </div>
  );
}

export default App;
