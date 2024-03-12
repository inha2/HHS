import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../myPage/MyInfoComponent.css';
function MyPageComponent() {
    return (
        <div className="my-info-container">
            <div className="my-info-section">
                <div className="my-info-section-left">
                    <p>조인하</p>
                </div>
                <div className="my-info-section-right">
                    <div>
                        <p>
                            <img src="img/myshop_icon1.png" />
                        </p>
                        <p>주문배송</p>
                        <p>0개</p>
                    </div>
                    <div>
                        <p>
                            <img src="img/myshop_icon2.png" />
                        </p>
                        <p>리뷰</p>
                        <p>0개</p>
                    </div>
                    <div>
                        <p>
                            <img src="img/myshop_icon3.png" />
                        </p>
                        <p>적립금</p>
                        <p>0원</p>
                    </div>
                    <div>
                        <p>
                            <img src="img/myshop_icon4.png" />
                        </p>
                        <p>쿠폰</p>
                        <p>0개</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPageComponent;
