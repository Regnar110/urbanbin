import './company.scss'
import background from '../../assets/Home/HomeSlider/slide1.jpg'
import tree from '../../assets/Company/tree.svg'


const Company = () => {
    return (
      <div id='section' className='company'>
        <div className='company-start-image' style={{
          background: `url(${background}) center center no-repeat`,
          backgroundSize:`cover`
        }}>
          <div className='background-image-mask'>
            <div className='image-text'>
              <p id='line-one'>We create a new quality in the waste management industry.</p>
              <span id='line-two'>We care about the <span>FUTURE</span> and <span>ENVIRONMENTAL</span> protection</span>
            </div>
          </div>
        </div>
        <div className='company-content'>
          <div className='tree-svg'>
            <img alt='tree' src={tree} />
          </div>
          <div className='tree-side-text'>
            <div className='mission'>
              <h2>Our mission</h2>
              ...is to think about the future, protect the environment by influencing customer behavior.
              Convincing users to use characteristic metal containers for individual waste fractions.
              Creating containers compatible with all unloading devices on the Polish as well as foreign municipal market
            </div>
            <div className='target'>
              <h2>Our target</h2>
                Continuous development, improvement of production processes, taking a stable and friendly position on the market of manufacturers of waste containers. We want our products to reach the widest possible range of customers, so that we can together take care of the environment in which we live using non-flammable, easy to recycle waste containers.
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Company;
  