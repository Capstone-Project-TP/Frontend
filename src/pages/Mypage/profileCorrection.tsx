import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Nav = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }
`;

const MainSection = styled.section`
    padding: 0 20px;
`;

const ProfileWrap = styled.div`
    display: flex;
    gap: 40px;
    padding: 30px;
    border: 1px solid #eee;
    border-radius: 10px;
    margin-top: 20px;
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const ProfileInfo = styled.p`
    text-align: center;

    strong {
        display: block;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    span {
        color: #666;
    }
`;

const Button = styled.a`
    padding: 8px 20px;
    border-radius: 20px;
    background: #007bff;
    color: white;
    text-decoration: none;
    font-size: 14px;

    &.round {
        background: #007bff;
        color: white;
    }
`;

const RightSection = styled.div`
    flex: 1;

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    li {
        display: flex;
        gap: 20px;
        align-items: center;

        strong {
            flex: 0 0 120px;
            font-weight: bold;
        }

        p {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 15px;

            &.d-flex {
                display: flex;
                gap: 10px;

                a {
                    img {
                        height: 40px;
                    }
                }
            }
        }
    }
`;

const Footer = styled.footer`
    margin-top: auto;
    padding: 20px;
    background: #f5f5f5;

    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-bottom: 10px;
    }
`;

const Copyright = styled.p`
    text-align: center;
    color: #666;
`;

const ProfileCorrection = () => {
    return (
        <Wrapper>
            <Header>
                <h1><a href="#"><img src="/images/t_logo.png" alt="logo" /></a></h1>
                <Nav>
                    <ul>
                        <li><a href="service.html">서비스 소개</a></li>
                        <li><a href="guide.html">가이드북</a></li>
                        <li><a href="travel.html">여행지 검색</a></li>
                    </ul>
                    <a href="my_profile.html" className="user_id"><i></i>Sooyeony</a>
                </Nav>
            </Header>

            <main>
                <MainSection>
                    <h2>프로필 편집</h2>
                    <ProfileWrap>
                        <LeftSection>
                            <span className="img">
                                <img src="/images/profile_img.png" alt="" />
                            </span>
                            <ProfileInfo>
                                <strong>김수연</strong>
                                <span>abcde12@gmail.com</span>
                            </ProfileInfo>
                            <Button href="#" className="round">사진변경</Button>
                        </LeftSection>
                        <RightSection>
                            <ul>
                                <li>
                                    <strong>ID</strong>
                                    <p>
                                        <span>abcde12@gmail.com</span>
                                    </p>
                                </li>
                                <li>
                                    <strong>이름</strong>
                                    <p>
                                        <span>김수연</span>
                                    </p>
                                </li>
                                <li>
                                    <strong>닉네임</strong>
                                    <p>
                                        <span>sooyeony</span>
                                        <Button href="#" className="round">변경</Button>
                                    </p>
                                </li>
                                <li>
                                    <strong>전화번호</strong>
                                    <p>
                                        <span>010-000-0000</span>
                                        <Button href="#" className="round">변경</Button>
                                    </p>
                                </li>
                                <li>
                                    <strong>계정연동현황</strong>
                                    <p className="d-flex">
                                        <a href="#"><img src="/images/ico_google.png" alt="GOOGLE" /></a>
                                        <a href="#"><img src="/images/ico_naver.png" alt="NAVER" /></a>
                                        <a href="#"><img src="/images/ico_KAKAO.png" alt="KAKAO" /></a>
                                        <a href="#"><img src="/images/ico_apple.png" alt="APPLE" /></a>
                                    </p>
                                </li>
                            </ul>
                        </RightSection>
                    </ProfileWrap>
                </MainSection>
            </main>

            <Footer>
                <div className="ft_menu">
                    <ul>
                        <li><a href="#">개인정보보호방침</a></li>
                        <li><a href="#">고객센터</a></li>
                    </ul>
                </div>
                <Copyright>Copyright 2025. Capstone All rights reserved.</Copyright>
            </Footer>
        </Wrapper>
    );
};

export default ProfileCorrection;