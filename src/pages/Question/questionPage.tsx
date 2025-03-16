import React, { useEffect } from 'react';
import flatpickr from 'flatpickr';
import { Korean } from 'flatpickr/dist/l10n/ko';
import 'flatpickr/dist/flatpickr.min.css';
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

const GuideWrap = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
`;

const ChatSection = styled.div`
    flex: 2;
    border: 1px solid #eee;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const MessagesChat = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px;
`;

const Message = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

const Photo = styled.div`
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

const ChatText = styled.div`
    flex: 1;
`;

const Text = styled.div`
    background: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    position: relative;
`;

const Time = styled.span`
    font-size: 12px;
    color: #999;
`;

const FooterChat = styled.div`
    border-top: 1px solid #eee;
    padding: 20px;
`;

const SendForm = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const FooterChatTools = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ul {
        display: flex;
        gap: 10px;
    }
`;

const SearchingSection = styled.div`
    flex: 1;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 20px;
`;

const DestinationList = styled.ul`
    li {
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
`;

const DateRange = styled.p`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 20px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;

    &.round_big {
        width: 100%;
        padding: 15px;
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

const BlindText = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
`;

const Calendar = styled.div`
    margin-top: 10px;

    .flatpickr-calendar {
        background: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
`;

const QuestionPage = () => {
    useEffect(() => {
        // chat 안의 달력
        flatpickr(".inCal", {
            locale: Korean,
            mode: "range",
            inline: true,
            dateFormat: "Y-m-d",
            defaultDate: ["2025-02-17", "2025-02-21"]
        });
        
        // 기본 달력
        flatpickr(".selector", {
            locale: Korean,
            enableTime: true,
            dateFormat: "Y-m-d H:i",
        });
    }, []);

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
                <div className="inner">
                    <GuideWrap>
                        <ChatSection>
                            <MessagesChat>
                                <Message>
                                    <Photo>
                                        <img src="/images/profile_img.png" alt="" />
                                    </Photo>
                                    <ChatText>
                                        <Text>
                                            <p>안녕하세요!<br />
                                                이번 여행에서 김수연님의 가이드를 맞게 된 홍길순입니다!</p>
                                            <Time>03:48</Time>
                                        </Text>
                                        <Text>
                                            <p>여행 가이드에 앞서 몇가지 질문을 받아 김수연님의 취향을 분석하여 최적의 가이드를 진행하려고 합니다!</p>
                                            <Time>03:48</Time>
                                        </Text>
                                        <Text>
                                            <div>
                                                <span>김수연님의 여행 기간은 언제인가요?</span>
                                                <Calendar>
                                                    <input type="text" className="inCal" />
                                                </Calendar>
                                            </div>
                                            <Time>03:48</Time>
                                        </Text>
                                    </ChatText>
                                </Message>
                                <Message>
                                    <div className="response">
                                        <Text>
                                            <Time>읽음</Time>
                                            <Time>03:48</Time>
                                            <div>외부 활동, 등산을 선호합니다.</div>
                                        </Text>
                                        <Text>
                                            <Time>안읽음</Time>
                                            <Time>03:48</Time>
                                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                        </Text>
                                    </div>
                                    <Photo>
                                        <img src="/images/profile_img.png" alt="" />
                                    </Photo>
                                </Message>
                            </MessagesChat>

                            <FooterChat>
                                <SendForm type="text" />
                                <FooterChatTools>
                                    <ul>
                                        <li className="imogi"><a href="#"><BlindText>이모지</BlindText></a></li>
                                        <li className="calc"><a href="#"><BlindText>달력</BlindText></a></li>
                                        <li className="time"><a href="#"><BlindText>시간</BlindText></a></li>
                                        <li className="file"><a href="#"><BlindText>파일</BlindText></a></li>
                                        <li className="crop"><a href="#"><BlindText>자르기</BlindText></a></li>
                                        <li className="text"><a href="#"><BlindText>텍스트</BlindText></a></li>
                                    </ul>
                                    <Button><span>입력</span></Button>
                                </FooterChatTools>
                            </FooterChat>
                        </ChatSection>
                        <SearchingSection>
                            <DestinationList>
                                <li>
                                    <strong>여행지</strong>
                                    <p>
                                        <input type="text" defaultValue="부산" />
                                    </p>
                                </li>
                                <li>
                                    <strong>여행기간</strong>
                                    <DateRange>
                                        <span><input type="text" className="mb5 selector" defaultValue="2025-02-21 10:00" /></span>
                                        <span><input type="text" className="selector" defaultValue="2025-02-25 10:00" /></span>
                                    </DateRange>
                                </li>
                                <li>
                                    <strong>선호활동</strong>
                                    <p>
                                        <input type="text" defaultValue="외부활동, 등산, 워킹" />
                                    </p>
                                </li>
                            </DestinationList>
                            <Button className="round_big"><span>저장중</span></Button>
                        </SearchingSection>
                    </GuideWrap>
                </div>
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

export default QuestionPage;