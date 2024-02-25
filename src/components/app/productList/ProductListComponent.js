import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProductListComponent.css';
function ProductListComponent() {
    return (
        <div className="product-list-component">
            <div className="product-list-normal">
                <h1 className="product-list-h1">트랙탑</h1>
                <ul className="product-list-ul">
                    <li>전체</li>
                    <li>트랙탑</li>
                    <li>맨투맨</li>
                    <li>후디</li>
                    <li>티셔츠</li>
                    <li>셔츠/니트</li>
                </ul>
            </div>
            <div className="product-list-count"> 총 96개의 상품이 있습니다</div>
            <div className="product-list-img-section">
                <ul className="product-list-img-section-ul">
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
export default ProductListComponent;
