import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProductDetailComponent.css';
function ProductDetailComponent() {
    return (
        <div className="detail-container">
            <div className="detail-top-section">
                <div className="detail-top-left">
                    <img className="detail-top-img" src="img/de1.png" />
                </div>
                <div className="detail-top-right">
                    <p className="detail-top-product-name">우먼스 수플레 크롭 스윗 세트</p>
                    <p className="detail-top-fixed-price">164,000원</p>
                    <div className="detail-top-price">
                        <p className="detail-top-discount-price">147,000원</p>
                        <p className="detail-top-discount">10%</p>
                    </div>
                    <hr />
                    <div className="detail-option-section">
                        <div className="detail-option-section1">
                            <span className="detail-option-gray">색상</span>
                            <select className="select1">
                                <option>-[필수] 옵션을 선택해 주세요-</option>
                                <option>페일블루</option>
                            </select>
                        </div>
                        <div className="detail-option-section2">
                            <span className="detail-option-gray">사이즈</span>
                            <select className="select">
                                <option>-[필수] 옵션을 선택해 주세요-</option>
                                <option>스웻셔츠S</option>
                                <option>스웻셔츠M</option>
                            </select>
                        </div>
                        <div className="detail-top-total-price">
                            <p>0원(0개)</p>
                        </div>
                        <div className="detail-top-cart-purchase">
                            <p className="detail-top-cart-button">장바구니 담기</p>
                            <p className="detail-top-purchase-button">바로구매</p>
                        </div>
                        <div>
                            <p>배송비/배송안내</p>
                            <p>쇼핑팁</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailComponent;
