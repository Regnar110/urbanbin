import './productitemslider.scss'
import { useState, useEffect } from 'react'
import i1 from '../../../assets/newphoto.jpg'
import i2 from '../../../assets/Home/ProductCard/p2.jpg'
import i3 from '../../../assets/Home/ProductCard/p3.jpg'

import SimpleImageSlider from "react-simple-image-slider";

const ProductItemSlider = ({modelColor}) => {
    const windowWidth = window.innerWidth;
    
    const images = [
        { url: i1 },
        { url: i2 },
        { url: i3 },
    ]

    const [sliderImages] = useState(images)
    const [sliederWidth, setSliderWidth] = useState('40%')

    useEffect(() => {
        console.log('slajder zamontowny') // przy zmianie koloru slajder sie re-renderuje.
        if(windowWidth <= 800) {
            setSliderWidth('100%')
        }
    }, [windowWidth, modelColor])

    return(
        <div className='product-slider-container'>
         <SimpleImageSlider
                    width={sliederWidth}
                    height={600}
                    images={sliderImages}
                    showNavs={true}
                    slideDuration={0.3}
        />
                {modelColor}
        </div>
    )
}

export default ProductItemSlider;