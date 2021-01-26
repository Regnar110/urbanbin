import './productitemswiper.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductItemSwiper = ({ productImages }) => {

    return(
        <div className='product-item-swiper'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                scrollbar={{ draggable: true }}
            >
            {
                productImages.length >= 1 ? 
                    (
                        productImages.map((imageUrl, index) => {
                            return <SwiperSlide key={index}><img alt='item' src={imageUrl}/></SwiperSlide>
                        })
                    )
                    :
                    (
                        <SwiperSlide>There is no images to display</SwiperSlide>
                    )
            }
                
            </Swiper>
        </div>
    )
}

export default ProductItemSwiper;