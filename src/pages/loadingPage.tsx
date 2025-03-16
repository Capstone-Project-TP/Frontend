import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingWrapper = styled.div`
    .loader {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .load_txt {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 40px;
        color: #333;
    }

    .loader_txt {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-family: 'montserrat';
        font-weight: 500;
        letter-spacing: 1px;
        color: #4F46E5;

        &.small {
            font-size: 14px;
        }
    }

    .loader2 {
        position: relative;
        width: 120px;
        height: 120px;

        &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            border: 3px solid #ddd;
            border-top-color: #4F46E5;
            border-radius: 50%;
            animation: ${rotate} 1s linear infinite;
        }
    }

    .cover {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
    }
`;

const LoadingPage: React.FC = () => {
    return (
        <LoadingWrapper>
            <div className="loader">
                <p className="load_txt">가이드가 최적의 여행 계획을 작성 중입니다...</p>
                <span className="loader_txt small">Loading</span>
                <span className="loader2"></span>
                <div className="cover"></div>
            </div>
        </LoadingWrapper>
    );
};

export default LoadingPage;
