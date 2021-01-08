import test from '../../../assets/test.jpg'
import slide1 from '../../../assets/Home/HomeSlider/slide1.jpg'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './homeslider.scss'
import './slider-animation.css';


const HomeSlider = () => {

    return (
        <div className='home-slider'>
            <Slider className="slider-wrapper" autoplay={4000}>
                <div className='slide-container' style={{
                background:`url(${test}) center center no-repeat`,
                backgroundSize:'cover'
                }}>
                    <p>For a clean future</p>
                </div>

                <div className='slide-container' style={{
                background:`url(${slide1}) center center no-repeat`,
                backgroundSize:'cover'
                }}>
                    <p>
                        Nature-friendly solutions
                    </p>
                </div>
            </Slider>
        </div>

    )
}

export default HomeSlider