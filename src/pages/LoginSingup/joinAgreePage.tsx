import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const JoinAgreeWrapper = styled.div`
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

    .login__header.join_agree {
        margin-bottom: 30px;
    }

    .login__header h1 {
        margin-bottom: 20px;
    }

    .login__header p {
        font-size: 20px;
        font-weight: 600;
    }

    .agree_wrap {
        > div {
            margin-bottom: 20px;
        }

        .input_wrap {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }

        input[type="checkbox"] {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            cursor: pointer;
        }

        label {
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;

            span {
                color: #4F46E5;
                margin-left: 5px;
            }
        }

        textarea {
            width: 100%;
            height: 120px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            resize: none;
            font-size: 14px;
            line-height: 1.5;
        }

        .selected_all {
            margin-top: 30px;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 4px;
        }
    }

    .login_button {
        margin-top: 40px;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 52px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
    }

    .btn.bg_color1 {
        background: #4F46E5;
        color: #fff;
    }

    .btn.bg_color1:disabled {
        background: #ddd;
        cursor: not-allowed;
    }
`;

const JoinAgreePage: React.FC = () => {
    const navigate = useNavigate();
    const [agreements, setAgreements] = useState({
        terms: false,
        privacy: false,
        promotion: false,
        all: false
    });

    const handleAgreementChange = (type: keyof typeof agreements) => {
        if (type === 'all') {
            const newValue = !agreements.all;
            setAgreements({
                terms: newValue,
                privacy: newValue,
                promotion: newValue,
                all: newValue
            });
        } else {
            const newAgreements = {
                ...agreements,
                [type]: !agreements[type]
            };
            
            // 모든 항목이 체크되었는지 확인
            const allChecked = newAgreements.terms && 
                             newAgreements.privacy && 
                             newAgreements.promotion;
            
            setAgreements({
                ...newAgreements,
                all: allChecked
            });
        }
    };

    const handleNext = () => {
        if (agreements.terms && agreements.privacy) {
            navigate('/signup/register');
        }
    };

    // 필수 약관 동의 여부 확인
    const isNextEnabled = agreements.terms && agreements.privacy;

    return (
        <JoinAgreeWrapper>
            <div id="login">
                <div className="login-wrap">
                    <div className="inner">
                        <header className="login__header join_agree">
                            <h1><img src="/images/t_logo.png" alt="LOGO" /></h1>
                            <p>다음 내용에 동의해주세요</p>
                        </header>

                        <div className="agree_wrap">
                            <div>
                                <span className="input_wrap">
                                    <input 
                                        type="checkbox" 
                                        id="agree_terms" 
                                        checked={agreements.terms}
                                        onChange={() => handleAgreementChange('terms')}
                                        className="lg" 
                                    />
                                    <label htmlFor="agree_terms">
                                        서비스 이용약관 동의
                                        <span>(필수)</span>
                                    </label>
                                </span>
                                <textarea readOnly defaultValue="약관내용" />
                            </div>
                            
                            <div>
                                <span className="input_wrap">
                                    <input 
                                        type="checkbox" 
                                        id="agree_privacy" 
                                        checked={agreements.privacy}
                                        onChange={() => handleAgreementChange('privacy')}
                                        className="lg" 
                                    />
                                    <label htmlFor="agree_privacy">
                                        개인정보 수집 및 이용 동의
                                        <span>(필수)</span>
                                    </label>
                                </span>
                                <textarea readOnly defaultValue="약관내용" />
                            </div>
                            
                            <div>
                                <span className="input_wrap">
                                    <input 
                                        type="checkbox" 
                                        id="agree_promotion" 
                                        checked={agreements.promotion}
                                        onChange={() => handleAgreementChange('promotion')}
                                        className="lg"
                                    />
                                    <label htmlFor="agree_promotion">
                                        마케팅 활용 및 정보 수신 동의
                                        <span>(선택)</span>
                                    </label>
                                </span>
                                <textarea readOnly defaultValue="약관내용" />
                            </div>

                            <div className="selected_all">
                                <span className="input_wrap">
                                    <input 
                                        type="checkbox" 
                                        id="chkAgreeAll" 
                                        checked={agreements.all}
                                        onChange={() => handleAgreementChange('all')}
                                        className="lg"
                                    />
                                    <label htmlFor="chkAgreeAll">
                                        전체 동의하기 (필수 및 선택 항목 동의 포함)
                                    </label>
                                </span>
                            </div>
                        </div>

                        <div className="login_button">
                            <button 
                                className="btn bg_color1" 
                                onClick={handleNext}
                                disabled={!isNextEnabled}
                            >
                                다음
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </JoinAgreeWrapper>
    );
};

export default JoinAgreePage;
