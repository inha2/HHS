import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MainComponent.css';
import SwiperFirstComponent from '../../app/main/SwiperFirst';
import SwiperMiddle from '../../app/main/SwiperMiddle';
import MainBottom from './MainBottom';
import SwiperComponent from '../../../utils/swiper/SwiperComponent';

function MainComponent() {
    const topTitle = '2024 뉴이어 세일, 최대 70% 할인!';

    const bottomTitle = '안뇽!';

    return (
        <div>
            <SwiperComponent param={topTitle} />
            <SwiperFirstComponent></SwiperFirstComponent>
            <SwiperMiddle></SwiperMiddle>
            <MainBottom></MainBottom>
            <SwiperComponent param={bottomTitle} />
            {/* 스와이프 펄스트 
              </SwipeFirst/>
            스와이프 미들
            <SwipeMiddle/>
            <SwipeBottom/>
            스와이프 바텀  */}
        </div>
    );
}

export default MainComponent;
