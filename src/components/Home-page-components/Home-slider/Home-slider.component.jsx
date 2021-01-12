import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './homeslider.scss'
import './slider-animation.css';


const HomeSlider = ({sliderList}) => {

    return (
        <div className='home-slider'>
            <Slider className="slider-wrapper" autoplay={3000}>
                {
                    sliderList.map(({image, text}, index) => {
                        return (
                        <div key={index} className='slide-container'>
                                <img alt='slide' src={image} />
                                <p>{text}</p>
                        </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default HomeSlider