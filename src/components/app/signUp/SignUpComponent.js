import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignUpComponent.css';
function SignUpComponent() {
    return (
        <div className="signup-container">
            <div className="signup-info-title">회원가입</div>
            <div className="signup-info-essential">필수정보입력</div>
            <div className="signup-info-section">
                <div className="signup-info-id">
                    <p className="signup-info-text">아이디</p>
                    <input className="signup-info-text-input" placeholder="아이디" />
                </div>
                <div className="signup-info-password">
                    <p className="signup-info-text">비밀번호</p>
                    <div className="signup-info-check-password">
                        <input placeholder="비밀번호" />
                        <input placeholder="비밀번호 확인" />
                    </div>
                </div>
                <div className="signup-info-email">
                    <p className="signup-info-text">이메일</p>
                    <input className="signup-info-email-input" placeholder="이메일" />
                </div>
            </div>
            <button className="signup-button">가입하기</button>
        </div>
    );
}

export default SignUpComponent;
