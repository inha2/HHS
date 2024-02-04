import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginComponent.css';
function LoginComponent() {
    return (
        <div className="login-container">
            <div className="login-id-section">
                <input placeholder="아이디" type="text"></input>
            </div>
            <div className="login-password-section">
                <input placeholder="비밀번호" type="text"></input>
            </div>
            <button className="login-button">로그인하기</button>
            <div className="login-signup">
                <a>일반회원가입</a>
            </div>
        </div>
    );
}

export default LoginComponent;
