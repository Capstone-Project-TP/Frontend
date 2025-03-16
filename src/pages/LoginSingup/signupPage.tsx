import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignupWrapper = styled.div`
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

    .join_gate {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .join_gate button {
        width: 100%;
        height: 52px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .join_gate button::before {
        content: '';
        width: 24px;
        height: 24px;
        position: absolute;
        left: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .join_gate .google {
        background: #fff;
        border: 1px solid #ddd;
        color: #333;
    }
    .join_gate .google::before {
        background-image: url('/images/ico_google.png');
    }

    .join_gate .naver {
        background: #03C75A;
        color: #fff;
    }
    .join_gate .naver::before {
        background-image: url('/images/ico_naver.png');
    }

    .join_gate .kakao {
        background: #FEE500;
        color: #333;
    }
    .join_gate .kakao::before {
        background-image: url('/images/ico_KAKAO.png');
    }

    .join_gate .apple {
        background: #000;
        color: #fff;
    }
    .join_gate .apple::before {
        background-image: url('/images/ico_apple.png');
    }

    .join_gate .bg_color1 {
        background: #4F46E5;
        color: #fff;
    }
`;

const SignupPage: React.FC = () => {
    const navigate = useNavigate();

    const handleEmailSignup = () => {
        navigate('/signup/agree');
    };

    return (
        <SignupWrapper>
            <div id="login">
                <div className="login-wrap">
                    <div className="inner">
                        <header className="login__header">
                            <h1><img src="/images/t_logo.png" alt="LOGO" /></h1>
                            <h2>회원가입</h2>
                            <p>LLM 모델을 활용한 관광 일정 안내 서비스</p>
                        </header>
                        <div className="join_gate">
                            <button type="button" className="google">Google로 시작하기</button>
                            <button type="button" className="naver">네이버로 시작하기</button>
                            <button type="button" className="kakao">카카오로 시작하기</button>
                            <button type="button" className="apple">Apple로 시작하기</button>
                            <button 
                                type="button" 
                                className="bg_color1"
                                onClick={handleEmailSignup}
                            >
                                이메일로 시작하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SignupWrapper>
    );
};

export default SignupPage;
