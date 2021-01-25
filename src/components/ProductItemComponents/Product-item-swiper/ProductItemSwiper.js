import './productitemswiper.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

import i1 from '../../../assets/newphoto.jpg'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductItemSwiper = () => {
    return(
        <div className='product-item-swiper'>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img src={i1}/></SwiperSlide>
                <SwiperSlide><img src={i1}/></SwiperSlide>
                <SwiperSlide><img src={i1}/></SwiperSlide>
                <SwiperSlide><img src={i1}/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductItemSwiper;