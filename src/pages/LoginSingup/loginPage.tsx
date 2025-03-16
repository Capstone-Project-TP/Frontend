import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
    #login {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: #fff;
    }

    .login-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
    }

    .inner {
        width: 100%;
        max-width: 480px;
        margin: 0 auto;
    }

    .login__header {
        text-align: center;
        margin-bottom: 40px;
    }

    .login__header h1 {
        margin-bottom: 20px;
    }

    .login__header h2 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .login__header p {
        color: #666;
        font-size: 16px;
    }

    .input__form {
        margin-bottom: 20px;
    }

    .input__form li {
        margin-bottom: 15px;
    }

    .input__form label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
    }

    .input__form input {
        width: 100%;
        height: 48px;
        padding: 0 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
    }

    .idpw_find {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;
    }

    .idpw_find a {
        color: #666;
        text-decoration: none;
    }

    .login_button {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 40px;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
    }

    .btn.big {
        width: 100%;
    }

    .btn.bg_color1 {
        background: #4F46E5;
        color: #fff;
    }

    .btn.outline {
        border: 1px solid #4F46E5;
        color: #4F46E5;
    }

    .sns_login {
        text-align: center;
    }

    .sns_login h3 {
        font-size: 16px;
        color: #666;
        margin-bottom: 20px;
    }

    .sns_login ul {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .sns_login img {
        width: 48px;
        height: 48px;
    }
`;

const LoginPage: React.FC = () => {
    return (
        <LoginWrapper>
        <div id="login">
            <div className="login-wrap">
            <div className="inner">
                <header className="login__header">
                <h1><img src="/images/t_logo.png" alt="LOGO" /></h1>
                <h2>로그인</h2>
                <p>LLM 모델을 활용한 관광 일정 안내 서비스</p>
                </header>
                
                <form name="loginForm" id="loginForm" method="post">
                <ul className="input__form">
                    <li>
                    <label htmlFor="userId">아이디</label>
                    <input 
                        type="text" 
                        id="userId" 
                        name="username" 
                        placeholder="아이디" 
                        style={{ imeMode: 'disabled' }} 
                    />
                    </li>
                    <li>
                    <label htmlFor="password">비밀번호</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        autoComplete="off" 
                        placeholder="비밀번호" 
                    />
                    </li>
                </ul>
                </form>

                <ul className="idpw_find">
                <li><Link to="/find-id">아이디찾기</Link></li>
                <li><Link to="/find-password">비밀번호찾기</Link></li>
                </ul>

                <div className="login_button">
                <Link to="#" className="btn big bg_color1">로그인</Link>
                <Link to="/signup" className="btn big outline">회원가입</Link>
                </div>

                <div className="sns_login">
                <h3>SNS로그인</h3>
                <ul>
                    <li><a href="#"><img src="/images/ico_google.png" alt="GOOGLE" /></a></li>
                    <li><a href="#"><img src="/images/ico_naver.png" alt="NAVER" /></a></li>
                    <li><a href="#"><img src="/images/ico_KAKAO.png" alt="KAKAO" /></a></li>
                    <li><a href="#"><img src="/images/ico_apple.png" alt="APPLE" /></a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </LoginWrapper>
    );
};

export default LoginPage;