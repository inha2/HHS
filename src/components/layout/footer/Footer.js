import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-logo-section">
                    <img src="img/logo_blank.png" />
                    <p className="footer-bold-black-font">주식회사 HHS</p>
                    <p>대표이사 : 김병훈 / 서울특별시 송파구 올림픽로 300, 36층 (신천동, 롯데월드타워)</p>
                    <p>
                        사업자등록번호 220-88-89441 <span className="footer-bold-black-font">[사업자정보확인]</span>
                    </p>
                    <p>통신판매업신고 : 제2020-서울송파-1274</p>
                </div>
                <div className="footer-info-all-section">
                    <div>
                        <p>이용안내</p>
                        <p>이용약관</p>
                        <p className="footer-bold-black-font">개인정보 처리방침</p>
                    </div>
                    <div>
                        <p>회사소개</p>
                        <p>제휴문의</p>
                        <p>멤버십</p>
                        <p>파트너십</p>
                    </div>
                    <div className="footer-info-section">
                        <p className="footer-info-section-call">1544-2083</p>
                        <p>09:00 - 18:00(토, 일, 공휴일 휴무)</p>
                        <p>LUNCH 12:00 - 13:30</p>
                        <ul className="footer-info-section-social">
                            <li>
                                <img src="img/free-icon-facebook-123717.png" />
                            </li>
                            <li>
                                <img src="img/free-icon-instagram-174855.png" />
                            </li>
                            <li>
                                <img src="img/free-icon-youtube-3128307.png" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
