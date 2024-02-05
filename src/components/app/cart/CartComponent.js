import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CartComponent.css';
function CartComponent() {
    return (
        <div className="cart-container">
            <div className="cart-left-section">
                <h2>장바구니</h2>
                <div className="cart-title-wrap">
                    <div className="cart-title-checkbox-wrap">
                        <input type="checkbox" />
                        <span>전체선택</span>
                    </div>
                    <div className="cart-title-delete-content">선택삭제</div>
                </div>
                <div className="cart-item-all-section">
                    <div className="cart-item-title-wish-wrap">
                        <div className="cart-item-title-check-wrap">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <div className="cart-item-title-name-content">
                                <span>파이핑 블러자켓 블랙</span>
                            </div>
                        </div>
                        <div className="cart-item-wish-del-wrap">
                            <div>
                                <img src="/img/btn_cart_wish.png" />
                            </div>
                            <div>
                                <img src="/img/cart_del.png" />
                            </div>
                        </div>
                    </div>
                    <div className="cart-img-section">
                        <div className="cart-img-price-wrap">
                            <div className="cart-img-content">
                                <img src="/img/de1.png" />
                            </div>
                            <div className="cart-price-content">
                                <div className="cart-price-normal-content">234,000원</div>
                                <strong className="cart-price-discount-content">234,000원</strong>
                            </div>
                        </div>
                        <div className="cart-count-wrap">
                            <div className="cart-count-content">
                                <button>-</button>
                                <input type="text" />
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-right-section">ddddd</div>
        </div>
    );
}

export default CartComponent;

// cart-container->cart-logo-section->cart-logo-section-0img-wrap-

// <div className="cart-container">
//     <div className="cart-logo-section">
//         <image className="cart-logo-section-img-wrap">
//             ogo</image>
//     </div>
//     <div className="cart-nav-sction"></div>
//     <div className="cart-accout-section"></div>
// </div>;
