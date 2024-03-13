import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ReviewComponent.css';
function ReviewComponent() {
    return (
        <div className="review-container">
            <div className="review-section">
                <ul>
                    <li>작성 가능한 리뷰 0</li>
                    <li>내가 작성한 리뷰 0</li>
                </ul>
            </div>
            <div className="review-list-section">
                <p className="review-list-possible-review">현재 작성가능한 리뷰가 없습니다.</p>
                <p className="review-list-delivery">배송이 완료된 상품만 목록에 노출됩니다.</p>
            </div>
        </div>
    );
}

export default ReviewComponent;
