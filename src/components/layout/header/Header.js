import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import SwiperComponent from '../../../utils/swiper/SwiperComponent';
function Header() {
    const title = '2024 뉴이어 세일, 최대 70% 할인!';
    return (
        <div>
            <SwiperComponent param={title} />
        </div>
    );
}

export default Header;
