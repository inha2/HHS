import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';
import SwiperComponent from '../../../utils/swiper/SwiperComponent';

function Footer() {
    const title = 'I LOVE YOU';
    return (
        <div>
            <SwiperComponent param={title} />
        </div>
    );
}

export default Footer;
