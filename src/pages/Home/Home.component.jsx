import HomeSlider from '../../components/Home-page-components/Home-slider/Home-slider.component'
import HomeAbout from '../../components/Home-page-components/Home-about/HomeAbout.component'
import HomeProducts from '../../components/Home-page-components/HomeProducts/HomeProducts.component'
import HomeQuality from '../../components/Home-page-components/Home-Quality/HomeQuality.component'
import HomeAboutProducts from '../../components/Home-page-components/Home-about-products/HomeAboutProducts'

import p1 from '../../assets/Home/ProductCard/120.jpg'
import p2 from '../../assets/Home/ProductCard/p2.jpg' 
import p3 from '../../assets/Home/ProductCard/p3.jpg' 
import p4 from '../../assets/Home/ProductCard/1100.jpg'
import slide1 from '../../assets/Company/bg.jpg'
import slide2 from '../../assets/Home/HomeSlider/slide2.jpg'
import slide3 from '../../assets/Home/HomeSlider/slide3.jpg'


const Home = () => {
  
  const productList = [
    {
      product: 'MGBS-120L',
      UrlLink: 'mgbs-120l',
      image: p1
    },
    {
      product: 'MGBS-240L',
      UrlLink: 'mgbs-240l',
      image: p2
    },
    {
      product: 'MGBS-660L',
      UrlLink: 'mgbs-700l',
      image: p3
    },
    {
      product: 'MGBS-1100L',
      UrlLink: 'mgbs-1100l',
      image: p4
    },
    {
      product: 'MGBS-2200L',
      UrlLink: 'mgbs-2500l',
      image: p2
    },
    {
      product: 'STREET BINS',
      UrlLink: 'street-bin',
      image: p4
    },
  ]

  const sliderList = [
    {
      image: slide1,
      text: 'A new quality on the market of producers of metal waste containers'
    },
    {
      image: slide2,
      text: 'Nature-friendly products'
    },
    {
      image: slide3,
      text: 'For a clean future'
    }
  ]

  return (
    <div id='section' className='app'>
      <HomeSlider  sliderList={sliderList}/>
      <HomeAbout />
      <HomeProducts productList={productList}/>
      <HomeAboutProducts />
      <HomeQuality />

    </div>
  );

}

export default Home;
