import './productitemslider.scss'
import { useState, useEffect } from 'react'
import i1 from '../../../assets/Home/ProductCard/p1.jpg'
import i2 from '../../../assets/Home/ProductCard/p2.jpg'
import i3 from '../../../assets/Home/ProductCard/p3.jpg'

import SimpleImageSlider from "react-simple-image-slider";

const ProductItemSlider = () => {
    const windowWidth = window.innerWidth;
    
    const images = [
        { url: i1 },
        { url: i2 },
        { url: i3 },
    ]

    const [sliderImages, setSliderImages] = useState(images)
    const [sliederWidth, setSliderWidth] = useState('40%')
    const [sliederheight, setSliderHeight] = useState(600)

    useEffect(() => {
        if(windowWidth <= 700) {
            setSliderWidth('100%')
        }
    }, [windowWidth])

    return(
        <div className='product-slider-container'>
         <SimpleImageSlider
                    width={sliederWidth}
                    height={sliederheight}
                    images={sliderImages}
                    showNavs={true}
                    slideDuration={0.3}
                />
        </div>
    )
}

export default ProductItemSlider;