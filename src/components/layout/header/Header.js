import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import SwiperComponent from '../../../utils/swiper/SwiperComponent';
function Header() {
    const title = '2024 뉴이어 세일, 최대 70% 할인!';
    const [isApparelHoverd, setIsApparelHoverd] = useState(false);
    const [apparelHoverdClassName, setApparelHoverdClassName] = useState('header-apparel-content-section');
    const [accHoverdClassName, setAccHoverdClassName] = useState('header-etc-content-section');
    const onMouseOverApparelHandle = () => {
        setAccHoverdClassName('header-etc-content-section');
        setApparelHoverdClassName('header-apparel-content-section-show');
    };
    const onMouseOverAccHandle = () => {
        setApparelHoverdClassName('header-apparel-content-section');
        setAccHoverdClassName('header-etc-content-section-show');
    };
    const onMouseOutHandle = () => {
        console.log('bye');
    };
    return (
        <div>
            <SwiperComponent param={title} />
            <div className="header-container">
                <div className="header-logo-section">
                    <img src="img/logo_blank.png" />
                </div>
                <div className="header-nav-section">
                    <ul>
                        <li>
                            <strong>BEST</strong>
                        </li>
                        <li>
                            <strong onMouseOver={onMouseOverApparelHandle}>APPAREL</strong>
                        </li>
                        <li>
                            <strong onMouseOver={onMouseOverAccHandle}>ACC</strong>
                        </li>
                    </ul>
                </div>
                <div className="header-accont-section">
                    <ul>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                </div>
            </div>
            <div className="header-nav-content-container">
                <div className={apparelHoverdClassName}>
                    <ul onMouseOut={onMouseOutHandle}>
                        <li>상의</li>
                        <li>티셔츠</li>
                        <li>트랙탑</li>
                        <li>스웻셔츠</li>
                        <li>후드</li>
                        <li>스웨터/가디건</li>
                    </ul>
                    <ul>
                        <li>하의</li>
                        <li>트랙팬츠</li>
                        <li>우븐팬츠</li>
                        <li>스웻팬츠</li>
                        <li>반바지/스커트</li>
                        <li>레깅스</li>
                    </ul>
                </div>
                <div className={accHoverdClassName}>
                    <ul>
                        <li>전체</li>
                        <li>가방</li>
                        <li>모자</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
// cart-container->cart-logo-section->cart-logo-section-0img-wrap-

// <div className="cart-container">
//     <div className="cart-logo-section">
//         <image className="cart-logo-section-img-wrap">
//             ogo</image>
//     </div>
//     <div className="cart-nav-sction"></div>
//     <div className="cart-accout-section"></div>
// </div>;
