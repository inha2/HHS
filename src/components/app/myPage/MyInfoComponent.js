import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../myPage/MyInfoComponent.css';
function MyPageComponent() {
    return (
        <div className="my-info-container">
            <div className="my-info-section">
                <div className="my-info-section-left">
                    <p>
                        조인하 님은
                        <br />
                        아이언 등급입니다.
                    </p>
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
            <div className="my-info-middle-section">
                <div className="my-info-middle-left">
                    <p className="my-info-middle-my-shopping">나의 쇼핑활동</p>
                    <p className="my-info-middle-my-review">리뷰 관리</p>
                </div>
                <div className="my-info-middle-right">
                    <div className="my-info-middle-right-top">
                        <p className="my-info-middle-order">최근 주문</p>
                        <p className="my-info-middle-all">전체 보기</p>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>주문일자</th>
                                    <th>이미지</th>
                                    <th>상품정보</th>
                                    <th>수량</th>
                                    <th>주문번호</th>
                                    <th>주문금액</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPageComponent;
