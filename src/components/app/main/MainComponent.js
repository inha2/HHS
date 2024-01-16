import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MainComponent.css';
import SwiperFirstComponent from '../../app/main/SwiperFirst';
import SwiperMiddle from '../../app/main/SwiperMiddle';
import MainBottom from './MainBottom';
function MainComponent() {
    return (
        <div>
            <SwiperFirstComponent></SwiperFirstComponent>
            <SwiperMiddle></SwiperMiddle>
            <MainBottom></MainBottom>
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
