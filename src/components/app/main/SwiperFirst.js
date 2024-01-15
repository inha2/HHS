import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'; // swipper-bundle 사용
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import './SwiperFirst.css';
function SwiperFirstComponent() {
    return (
        <Swiper
            slidesPerView={1}
            pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
            }}
            loop={true}
            modules={[Pagination, Navigation, HashNavigation]}
            className="mySwiper"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src="img/main1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/main1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/main1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/main1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/main1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/main1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/main1.png" />
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperFirstComponent;
