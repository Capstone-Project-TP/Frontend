import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const JoinRegisterWrapper = styled.div`
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
    }

    .basic_data {
        margin-bottom: 40px;

        .input_id {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;

            > span {
                flex: 1;
                position: relative;
            }

            input {
                width: 100%;
                height: 48px;
                padding: 0 15px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
            }

            .form_msg {
                position: absolute;
                left: 0;
                bottom: -20px;
                font-size: 12px;
                
                &.error {
                    color: #ff0000;
                }
            }
        }

        .pwd {
            margin-bottom: 20px;

            span {
                display: block;
                margin-bottom: 10px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            input {
                width: 100%;
                height: 48px;
                padding: 0 15px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
            }
        }

        .cellphone {
            h3 {
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 10px;

                span {
                    color: #4F46E5;
                    margin-left: 5px;
                }
            }

            .select_wrap {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;

                select {
                    width: 100px;
                    height: 48px;
                    padding: 0 15px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                    background: #fff;
                }

                input {
                    width: 100px;
                    height: 48px;
                    padding: 0 15px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                    text-align: center;
                }
            }
        }
    }

    .btn {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        padding: 0 20px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        border: none;
    }

    .btn.big {
        width: 100%;
        height: 52px;
    }

    .btn.middle {
        min-width: 120px;
    }

    .btn.bg_color1 {
        background: #4F46E5;
        color: #fff;
    }

    .btn.bg_color2 {
        background: #333;
        color: #fff;
    }

    .btn.outline2 {
        border: 1px solid #333;
        color: #333;
        background: #fff;
    }

    .login_button {
        margin-top: 40px;
    }
`;

const JoinRegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        passwordConfirm: '',
        tel1: '010',
        tel2: '',
        tel3: ''
    });
    const [idError, setIdError] = useState('');
    const [isIdChecked, setIsIdChecked] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'userId') {
            setIsIdChecked(false);
            setIdError('');
        }
    };

    const handleIdCheck = () => {
        // TODO: 서버에 ID 중복 체크 요청
        if (formData.userId.length < 4) {
            setIdError('아이디는 4자 이상이어야 합니다.');
            return;
        }
        setIsIdChecked(true);
        setIdError('');
    };

    const handlePhoneVerification = () => {
        // TODO: 휴대폰 인증번호 전송 로직 구현
        if (formData.tel2.length === 4 && formData.tel3.length === 4) {
            alert('인증번호가 전송되었습니다.');
        } else {
            alert('휴대폰 번호를 정확히 입력해주세요.');
        }
    };

    const handleSubmit = () => {
        // 유효성 검사
        if (!isIdChecked) {
            alert('아이디 중복 확인이 필요합니다.');
            return;
        }
        if (formData.password !== formData.passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (formData.tel2.length !== 4 || formData.tel3.length !== 4) {
            alert('휴대폰 번호를 정확히 입력해주세요.');
            return;
        }

        // TODO: 회원가입 API 호출
        navigate('/guide');
    };

    return (
        <JoinRegisterWrapper>
            <div id="login">
                <div className="login-wrap">
                    <div className="inner">
                        <header className="login__header">
                            <h1><img src="/images/t_logo.png" alt="LOGO" /></h1>
                            <h2>정보 입력</h2>
                        </header>

                        <div className="basic_data">
                            <div className="input_id">
                                <span>
                                    <input 
                                        type="text" 
                                        name="userId" 
                                        id="userid" 
                                        value={formData.userId}
                                        onChange={handleInputChange}
                                        maxLength={20}
                                        style={{ imeMode: 'disabled' }}
                                        placeholder="아이디"
                                        autoComplete="off"
                                    />
                                    {idError && <p className="form_msg error">{idError}</p>}
                                </span>
                                <button 
                                    className="btn bg_color2 middle"
                                    onClick={handleIdCheck}
                                >
                                    아이디 확인
                                </button>
                            </div>

                            <div className="pwd">
                                <span className="mb10">
                                    <input 
                                        type="password"
                                        name="password"
                                        id="pw"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        maxLength={20}
                                        placeholder="비밀번호"
                                    />
                                </span>
                                <span>
                                    <input 
                                        type="password"
                                        name="passwordConfirm"
                                        id="checkpw"
                                        value={formData.passwordConfirm}
                                        onChange={handleInputChange}
                                        maxLength={20}
                                        placeholder="비밀번호 확인"
                                    />
                                </span>
                            </div>

                            <div className="cellphone">
                                <h3>본인 인증 <span>(필수)</span></h3>
                                <div className="select_wrap">
                                    <select 
                                        name="tel1" 
                                        id="tel1"
                                        value={formData.tel1}
                                        onChange={handleInputChange}
                                    >
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="018">018</option>
                                        <option value="019">019</option>
                                    </select>
                                    -
                                    <span>
                                        <input 
                                            type="tel"
                                            id="tel2"
                                            name="tel2"
                                            value={formData.tel2}
                                            onChange={handleInputChange}
                                            maxLength={4}
                                        />
                                    </span>
                                    -
                                    <span>
                                        <input 
                                            type="tel"
                                            id="tel3"
                                            name="tel3"
                                            value={formData.tel3}
                                            onChange={handleInputChange}
                                            maxLength={4}
                                        />
                                    </span>
                                </div>
                                <button 
                                    type="button" 
                                    className="btn outline2"
                                    onClick={handlePhoneVerification}
                                >
                                    인증번호 전송
                                </button>
                            </div>
                        </div>

                        <div className="login_button">
                            <button 
                                className="btn bg_color1 big"
                                onClick={handleSubmit}
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </JoinRegisterWrapper>
    );
};

export default JoinRegisterPage;
