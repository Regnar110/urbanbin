import HomeSlider from '../../components/Home-page-components/Home-slider/Home-slider.component'
import HomeAbout from '../../components/Home-page-components/Home-about/HomeAbout.component'

const Home = () => {
  return (
    <div id='section' className='app'>
      <HomeSlider />
      <HomeAbout />
    </div>
  );
}

export default Home;
