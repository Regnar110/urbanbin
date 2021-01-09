import HomeSlider from '../../components/Home-page-components/Home-slider/Home-slider.component'
import HomeAbout from '../../components/Home-page-components/Home-about/HomeAbout.component'
import HomeProducts from '../../components/Home-page-components/HomeProducts/HomeProducts.component'
import HomeQuality from '../../components/Home-page-components/Home-Quality/HomeQuality.component'
import p1 from '../../assets/Home/ProductCard/p1.jpg'
import p2 from '../../assets/Home/ProductCard/p2.jpg' 
import p3 from '../../assets/Home/ProductCard/p3.jpg' 
import p4 from '../../assets/Home/ProductCard/p4.jpg' 

const Home = () => {
  const productList = [
    {
      product: 'MGBS-120L',
      image: p1
    },
    {
      product: 'MGBS-120L',
      image: p2
    },
    {
      product: 'MGBS-120L',
      image: p3
    },
    {
      product: 'MGBS-120L',
      image: p4
    },
    {
      product: 'MGBS-120L',
      image: p2
    },
    {
      product: 'MGBS-120L',
      image: p4
    },
  ]

  return (
    <div id='section' className='app'>
      <HomeSlider />
      <HomeAbout />
      <HomeProducts productList={productList}/>
      <HomeQuality />
    </div>
  );

}

export default Home;
