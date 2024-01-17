import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'; // swipper-bundle 사용
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import './SwiperFirst.css';

function SwiperFirstComponent() {
    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        // 페이지 로드 후 3초 뒤에 text-overlay를 나타내기 위해 setTimeout 사용
        const timer = setTimeout(() => {
            setIsTextVisible(true);
        }, 2000);

        // 컴포넌트가 언마운트 되거나 다른 상황에서 clearTimeout을 호출하여 메모리 누수 방지
        return () => clearTimeout(timer);
    }, []);
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
                <div className="slide-content">
                    <img src="img/main1.png" alt="Slide 1" />
                    {isTextVisible && (
                        <div className={`text-overlay ${isTextVisible ? 'visible' : ''}`}>
                            <p className="swiper-first-text1">01.09 - 01.18 </p>
                            <p className="swiper-first-text2"> 2024 NEW YEAR SALE </p>
                            <p className="swiper-first-text3"> 신년 맞이 4가지 특별 혜택 </p>
                        </div>
                    )}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-content">
                    <img src="img/main1.png" alt="Slide 1" />
                    {isTextVisible && (
                        <div className={`text-overlay ${isTextVisible ? 'visible' : ''}`}>
                            <p className="swiper-first-text1">01.13 - 03.31 </p>
                            <p className="swiper-first-text2"> DISNEY x NERDY </p>
                            <p className="swiper-first-text3"> 디즈니 100주년 기념 콜라보 컬렉션 </p>
                        </div>
                    )}
                </div>
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
