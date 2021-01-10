import {Switch, Route, Link} from 'react-router-dom';
import './products.scss'
import ProductItem from '../../components/Products-components/Product-item/Product-item.component'
import ProductMain from '../../components/Products-components/Product-main/ProductMain.component'
import SiteHeader from '../../components/SitesHeader/SiteHeader.component'

const Products = (props) => {
  const {match} = props;
  console.log(match)
  return (
    <div id='section' className='products'>
    <SiteHeader siteHeader={'PRODUCTS'}/>
      <Link to={`${match.url}/mgs220`}>Product Mgs220</Link>
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

export default Products;
