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

const Title = styled.h2`
    padding-top: 30px;
`;

const MyGuideWrap = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    li {
        display: flex;
        gap: 20px;
        border: 1px solid #eee;
        padding: 20px;
        border-radius: 10px;
    }
`;

const ThumbImg = styled.span`
    flex: 0 0 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const MyGuideInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const GuideTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;

    strong {
        font-size: 18px;
        font-weight: bold;
    }

    span {
        color: #666;
    }

    i.d_day {
        color: #007bff;
        font-style: normal;
    }
`;

const TextArea = styled.textarea`
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: none;
    margin-bottom: 15px;
`;

const MyGuideBtn = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.a`
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 14px;

    &.outline {
        border: 1px solid #007bff;
        color: #007bff;
    }

    &.bg_color2 {
        background: #dc3545;
        color: white;
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

const MyGuidePage = () => {
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
                    <Title>나의 가이드</Title>
                    <MyGuideWrap>
                        <ul>
                            <li>
                                <ThumbImg>
                                    <img src="/images/travel_img3.jpg" alt="" />
                                </ThumbImg>
                                <MyGuideInfo>
                                    <GuideTitle>
                                        <strong>대학교 친구들과</strong>
                                        <span>2024.08.24 ~ 2024.08.26</span>
                                        <i className="d_day">D-30</i>
                                    </GuideTitle>
                                    <TextArea placeholder="메모를 작성해 주세요" />
                                    <MyGuideBtn>
                                        <Button href="#" className="outline">수정</Button>
                                        <Button href="#" className="bg_color2">삭제</Button>
                                    </MyGuideBtn>
                                </MyGuideInfo>
                            </li>
                            <li>
                                <ThumbImg>
                                    <img src="/images/travel_img2.jpg" alt="" />
                                </ThumbImg>
                                <MyGuideInfo>
                                    <GuideTitle>
                                        <strong>중학교 친구들과</strong>
                                        <span>2024.08.24 ~ 2024.08.26</span>
                                        <i className="d_day">D-30</i>
                                    </GuideTitle>
                                    <TextArea placeholder="메모를 작성해 주세요" />
                                    <MyGuideBtn>
                                        <Button href="#" className="outline">수정</Button>
                                        <Button href="#" className="bg_color2">삭제</Button>
                                    </MyGuideBtn>
                                </MyGuideInfo>
                            </li>
                        </ul>
                    </MyGuideWrap>
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

export default MyGuidePage;