import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
function Header() {
    const [apparelHoverClassName, setApparelHoverClassName] = useState('header-apparel-content-section');
    const [accHoverClassName, setAccHoverClassName] = useState('header-etc-content-section');
    const [mouseOnFlag, setMouseOnFlag] = useState(0);
    const onMouseOverApparelHandle = () => {
        setAccHoverClassName('header-etc-content-section');
        setApparelHoverClassName('header-apparel-content-section-show');
    };
    const onMouseOverAccHandle = () => {
        setApparelHoverClassName('header-apparel-content-section');
        setAccHoverClassName('header-etc-content-section-show');
    };
    const onMouseOverGhostHandle = () => {
        setAccHoverClassName('header-etc-content-section');
        setApparelHoverClassName('header-apparel-content-section');
    };
    const onMouseLeaveHandle = () => {
        setAccHoverClassName('header-etc-content-section');
        setApparelHoverClassName('header-apparel-content-section');
    };
    const onMouseOverBestHandle = () => {
        setAccHoverClassName('header-etc-content-section');
        setApparelHoverClassName('header-apparel-content-section');
    };

    return (
        <div>
            <div>
                <div className="header-container">
                    <div className="header-logo-section">
                        <img src="img/logo_blank.png" />
                    </div>
                    <div className="header-nav-section">
                        <ul>
                            <li className="nav-ghost">👻</li>
                            <li>
                                <strong onMouseOver={onMouseOverBestHandle}>BEST</strong>
                            </li>
                            <li>
                                <strong onMouseOver={onMouseOverApparelHandle}>APPAREL</strong>
                            </li>
                            <li>
                                <strong onMouseOver={onMouseOverAccHandle}>ACC</strong>
                            </li>
                            <li className="nav-ghost" onMouseOver={onMouseOverGhostHandle}>
                                👻
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
                    <div onMouseLeave={onMouseLeaveHandle} className={apparelHoverClassName}>
                        <ul>
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
                    <div onMouseLeave={onMouseLeaveHandle} className={accHoverClassName}>
                        <ul>
                            <li>전체</li>
                            <li>가방</li>
                            <li>모자</li>
                        </ul>
                    </div>
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
