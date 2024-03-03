import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginComponent.css';
import axios from 'axios';
function LoginComponent() {
    //아이디 비밀번호에 밸류값을 준다v
    //벨류값들을 변수에 담는다
    //밸류값을 서버에 넘긴다
    //포스트로 보내는데 바디안에 담아보냄
    //서버에서 저장된 데이터와 일치하는게 있는지확인하다
    //서버 컨트롤러로 보내고 서비스에서 확인하고 다시 컨트롤러에 보내고 다시 클라이언트에 보냄
    //있으면 로그인 없으면 안됨
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const onChangeTextValue = (event) => {
        if (event.target.id === 'loginId') {
            setLoginId(event.target.value);
            console.log(loginId);
        } else if (event.target.id === 'loginPassword') {
            setLoginPassword(event.target.value);
            console.log(loginPassword);
        }
        console.log(event);
    };
    const onClickLogin = async () => {
        if (loginId === null || loginId === '') {
            alert('아이디를 입력해주세요');
            return;
        } else if (loginPassword === null || loginPassword === '') {
            alert('비밀번호를 입력하세요');
            return;
        }
        const body = {
            loginId: loginId,
            password: loginPassword,
        };
        console.log(body);
        await axios
            .post('http://localhost:4000/v1/user/login', body)
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    alert('로그인 됐습니다.');
                    navigate('/');
                }
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data.error);
            });
    };
    const goMain = () => {
        navigate('/signup');
    };
    return (
        <div className="login-container">
            <div className="login-id-section">
                <input onChange={onChangeTextValue} id="loginId" placeholder="아이디" type="text"></input>
            </div>
            <div className="login-password-section">
                <input type="password" onChange={onChangeTextValue} id="loginPassword" placeholder="비밀번호"></input>
            </div>
            <button onClick={onClickLogin} className="login-button">
                로그인하기
            </button>
            <div className="login-signup">
                <a onClick={goMain}>일반회원가입</a>
            </div>
        </div>
    );
}

export default LoginComponent;
