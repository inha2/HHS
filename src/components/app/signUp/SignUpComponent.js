import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './SignUpComponent.css';
function SignUpComponent() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userCheckPassword, setUserCheckPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const onChangeTextValue = (event) => {
        if (event.target.id === 'signupId') {
            setUserId(event.target.value);
            console.log(userId);
        } else if (event.target.id === 'signupPassword') {
            setUserPassword(event.target.value);
            console.log(userPassword);
        } else if (event.target.id === 'signupCheckPassword') {
            setUserCheckPassword(event.target.value);
            console.log(userCheckPassword);
        } else if (event.target.id === 'signupEmail') {
            setUserEmail(event.target.value);
            console.log(userEmail);
        }
    };

    const onClickSignUp = async () => {
        if (userId === null || userId === '') {
            alert('아이디를 입력해주세요');
            return;
        } else if (userPassword === null || userPassword === '') {
            alert('비밀번호를 입력하세요');
            return;
        } else if (userCheckPassword === null || userCheckPassword === '') {
            alert('비밀번호를 입력하세요');
            return;
        } else if (userEmail === null || userEmail === '') {
            alert('이메일을 입력하세요');
            return;
        }
        const idRegex = /^[A-Za-z]+$/;

        if (userId && !idRegex.test(userId)) {
            alert('아이디 형식이 올바르지 않습니다.');
            return;
        }
        if (userPassword !== userCheckPassword) {
            alert('비밀번호가 일치하지 않아용ㅎ');
            return;
        }
        const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

        if (userEmail && !regex.test(userEmail)) {
            alert('이메일 형식이 올바르지않습니다');
            return;
        }

        const body = {
            userId: userId,
            password: userPassword,
            email: userEmail,
        };

        await axios
            .post('http://localhost:4000/v1/user/singUp', body)
            .then((res) => {
                console.log(res.status);
                if (res.status === 201) {
                    alert('가입 됐습니다.');
                    navigate('/');
                }
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data.error);
            });
    };

    return (
        <div className="signup-container">
            <div className="signup-info-title">회원가입</div>
            <div className="signup-info-essential">필수정보입력</div>
            <div className="signup-info-section">
                <div className="signup-info-id">
                    <p className="signup-info-text">아이디</p>
                    <input
                        id="signupId"
                        onChange={onChangeTextValue}
                        className="signup-info-text-input"
                        placeholder="아이디"
                    />
                </div>
                <div className="signup-info-password">
                    <p className="signup-info-text">비밀번호</p>
                    <div className="signup-info-check-password">
                        <input
                            type="password"
                            onChange={onChangeTextValue}
                            id="signupPassword"
                            placeholder="비밀번호"
                        />
                        <input
                            type="password"
                            onChange={onChangeTextValue}
                            id="signupCheckPassword"
                            placeholder="비밀번호 확인"
                        />
                    </div>
                </div>
                <div className="signup-info-email">
                    <p className="signup-info-text">이메일</p>
                    <input
                        onChange={onChangeTextValue}
                        id="signupEmail"
                        className="signup-info-email-input"
                        placeholder="이메일"
                    />
                </div>
            </div>
            <button onClick={onClickSignUp} className="signup-button">
                가입하기
            </button>
        </div>
    );
}

export default SignUpComponent;
