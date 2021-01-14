import {Switch, Route, withRouter} from 'react-router-dom';
import { useEffect } from 'react'
import './products.scss'
import ProductItem from '../../components/Products-components/Product-item/Product-item.component'
import ProductMain from '../../components/Products-components/Product-main/ProductMain.component'
import SiteHeader from '../../components/SitesHeader/SiteHeader.component'
import ProductNavigation from '../../components/Products-components/ProductsNavigation/ProductsNavigation.component'

const Products = ({match}) => {

  useEffect(() => {
  }, [match.params])
  
  return (
    <div id='section' className='products'>
    <SiteHeader siteHeader={'PRODUCTS'}/>
    <ProductNavigation />
      <Switch>
        <Route exact path={`${match.url}`}>
          <ProductMain />
        </Route>
        <Route exact path={`${match.url}/:productId`}>
          <ProductItem />
        </Route>
      </Switch>

    </div>
  );
}

export default withRouter(Products);
