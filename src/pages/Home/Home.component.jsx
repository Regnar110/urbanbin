import HomeSlider from '../../components/Home-page-components/Home-slider/Home-slider.component'
import HomeAbout from '../../components/Home-page-components/Home-about/HomeAbout.component'
import HomeProducts from '../../components/Home-page-components/HomeProducts/HomeProducts.component'
import HomeQuality from '../../components/Home-page-components/Home-Quality/HomeQuality.component'
import p1 from '../../assets/Home/ProductCard/p1.jpg'
import p2 from '../../assets/Home/ProductCard/p2.jpg' 
import p3 from '../../assets/Home/ProductCard/p3.jpg' 
import p4 from '../../assets/Home/ProductCard/p4.jpg'
import slide1 from '../../assets/Home/HomeSlider/slide1.jpg'
import slide2 from '../../assets/Home/HomeSlider/slide2.jpg'
import slide3 from '../../assets/Home/HomeSlider/slide3.jpg'


const Home = () => {
  
  const productList = [
    {
      product: 'MGBS-120L',
      UrlLink: '/products/mgbs120l',
      image: p1
    },
    {
      product: 'MGBS-240L',
      UrlLink: '/products/mgbs240l',
      image: p2
    },
    {
      product: 'MGBS-700L',
      UrlLink: '/products/mgbs700l',
      image: p3
    },
    {
      product: 'MGBS-1100L',
      UrlLink: '/products/mgbs1100l',
      image: p4
    },
    {
      product: 'MGBS-2500L',
      UrlLink: '/products/mgbs2500l',
      image: p2
    },
    {
      product: 'STREET BINS',
      UrlLink: '/products/street-bin',
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
      <HomeQuality />
    </div>
  );

}

export default Home;
