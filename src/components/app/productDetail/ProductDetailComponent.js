import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProductDetailComponent.css';
function ProductDetailComponent() {
    return (
        <div className="product-detail-component">
            <div className="product-detail-normal">
                <h1 className="product-detail-h1">트랙탑</h1>
                <ul className="product-detail-ul">
                    <li>전체</li>
                    <li>트랙탑</li>
                    <li>맨투맨</li>
                    <li>후디</li>
                    <li>티셔츠</li>
                    <li>셔츠/니트</li>
                </ul>
            </div>
            <div className="product-detail-count"> 총 96개의 상품이 있습니다</div>
            <div className="product-detail-img-section">
                <ul className="product-detail-img-section-ul">
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                    <li>
                        <img src="img/de1.png" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductDetailComponent;
