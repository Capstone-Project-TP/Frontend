import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const SelectionAddWrapper = styled.div`
    #wrap {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        padding: 0 40px;
        background: #fff;
        border-bottom: 1px solid #ddd;

        h1 img {
            height: 40px;
        }

        #menu {
            display: flex;
            align-items: center;
            gap: 40px;

            ul {
                display: flex;
                gap: 30px;

                a {
                    font-size: 16px;
                    color: #333;
                    text-decoration: none;
                }
            }

            .user_id {
                display: flex;
                align-items: center;
                gap: 8px;
                color: #333;
                text-decoration: none;

                i {
                    width: 32px;
                    height: 32px;
                    background: #ddd;
                    border-radius: 50%;
                }
            }
        }
    }

    #main {
        flex: 1;
        padding: 0 40px;

        .inner {
            max-width: 1200px;
            margin: 0 auto;
        }

        h2 {
            font-size: 24px;
            font-weight: 600;
        }
    }

    .pt40 { padding-top: 40px; }
    .pb10 { padding-bottom: 10px; }

    .add_travel__wrap {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .searching {
        padding: 30px;
        background: #f5f5f5;
        border-radius: 10px;

        .select_title {
            display: block;
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 20px;
        }

        .select_list {
            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px;
                background: #fff;
                border-radius: 8px;
                margin-bottom: 10px;

                &:last-child {
                    margin-bottom: 0;
                }

                span {
                    font-size: 16px;
                }
            }
        }

        .btn.round_big {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 52px;
            border-radius: 8px;
            margin-top: 20px;
            font-size: 24px;
            background: #4F46E5;
            color: #fff;
            text-decoration: none;

            &.add {
                background: #fff;
                color: #4F46E5;
                border: 2px dashed #4F46E5;
            }
        }
    }

    .btn.round {
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 14px;
        text-decoration: none;

        &.white {
            background: #fff;
            border: 1px solid #ddd;
            color: #666;
        }
    }

    #footer {
        padding: 40px;
        background: #f5f5f5;

        .ft_menu {
            margin-bottom: 20px;

            ul {
                display: flex;
                gap: 20px;

                a {
                    color: #666;
                    text-decoration: none;
                }
            }
        }

        .copy {
            color: #999;
            font-size: 14px;
        }
    }
`;

const ModalWrapper = styled.div`
    .modal {
        &.wd410p {
            width: 410px;
        }
    }

    .modal_hdr {
        padding: 20px;
        border-bottom: 1px solid #ddd;
        
        strong {
            font-size: 18px;
            font-weight: 500;
        }
    }

    .modal_bdy {
        padding: 20px;

        .add_travel {
            max-height: 400px;
            overflow-y: auto;

            &.scroll {
                padding-right: 10px;
            }

            ul li {
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                margin-bottom: 10px;

                &:last-child {
                    margin-bottom: 0;
                }

                h3 {
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 15px;
                }

                .d-flex {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 15px;

                    .img {
                        width: 100px;
                        height: 100px;
                        border-radius: 4px;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    .info {
                        flex: 1;

                        p {
                            display: flex;
                            gap: 10px;
                            font-size: 14px;

                            &.mb10 {
                                margin-bottom: 10px;
                            }

                            strong {
                                font-weight: 500;
                                color: #666;
                            }
                        }
                    }
                }
            }
        }
    }

    .modal_ftr {
        padding: 20px;
        border-top: 1px solid #ddd;

        &.d-flex {
            display: flex;
            gap: 10px;

            &.center {
                justify-content: center;
            }
        }

        .btn {
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            font-size: 16px;
            text-decoration: none;

            &.middle {
                padding: 0 30px;
            }

            &.wd80p {
                width: 80px;
            }

            &.bg_color2 {
                background: #333;
                color: #fff;
            }

            &.bg_color3 {
                background: #4F46E5;
                color: #fff;
            }
        }
    }
`;

Modal.setAppElement('#root'); // 모달을 위한 설정

const SelectionAdd: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPlaces, setSelectedPlaces] = useState({
        travel: ['광안대교', '마린시티', '해운대 해수욕장'],
        restaurant: ['광안대교', '마린시티', '해운대 해수욕장']
    });

    const handleDelete = (type: 'travel' | 'restaurant', place: string) => {
        setSelectedPlaces(prev => ({
            ...prev,
            [type]: prev[type].filter(item => item !== place)
        }));
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <SelectionAddWrapper>
            <div id="wrap">
                <header id="header">
                    <h1><Link to="/"><img src="/images/t_logo.png" alt="logo" /></Link></h1>
                    <nav id="menu">
                        <ul>
                            <li><Link to="/selection">여행지 선택</Link></li>
                            <li><Link to="/scheduleMap">일정 확인</Link></li>
                            <li><Link to="/question">문의하기</Link></li>
                        </ul>
                        <Link to="/myPage" className="user_id"><i></i>Sooyeony</Link>
                    </nav>
                </header>

                <main id="main">
                    <div className="inner">
                        <h2 className="pt40 pb10">추가하실 여행지 및 음식점이 있으면 추가해주세요!</h2>
                        <div className="add_travel__wrap">
                            <div className="searching">
                                <strong className="select_title">김수연님이 선택한 여행지입니다.</strong>
                                <ul className="select_list">
                                    {selectedPlaces.travel.map((place, index) => (
                                        <li key={`travel-${index}`}>
                                            <span>{place}</span>
                                            <button 
                                                className="btn round white"
                                                onClick={() => handleDelete('travel', place)}
                                            >
                                                삭제
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={openModal} className="btn round_big add">+</button>
                            </div>
                            <div className="searching">
                                <strong className="select_title">김수연님이 선택한 음식점입니다.</strong>
                                <ul className="select_list">
                                    {selectedPlaces.restaurant.map((place, index) => (
                                        <li key={`restaurant-${index}`}>
                                            <span>{place}</span>
                                            <button 
                                                className="btn round white"
                                                onClick={() => handleDelete('restaurant', place)}
                                            >
                                                삭제
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={openModal} className="btn round_big add">+</button>
                            </div>
                        </div>
                    </div>
                </main>

                <footer id="footer">
                    <div className="ft_menu">
                        <ul>
                            <li><Link to="/privacy">개인정보보호방침</Link></li>
                            <li><Link to="/customer-service">고객센터</Link></li>
                        </ul>
                    </div>
                    <p className="copy">Copyright 2025. Capstone All rights reserved.</p>
                </footer>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal wd410p"
                overlayClassName="modal-overlay"
            >
                <ModalWrapper>
                    <div className="modal_hdr">
                        <strong>추가하실 여행지를 입력해주세요</strong>
                    </div>
                    <div className="modal_bdy">
                        <div className="add_travel scroll">
                            <ul>
                                {Array(6).fill(null).map((_, index) => (
                                    <li key={index}>
                                        <h3>해동용궁사</h3>
                                        <div className="d-flex">
                                            <span className="img">
                                                <img src="/images/travel_img2.jpg" alt="" />
                                            </span>
                                            <div className="info">
                                                <p className="mb10">
                                                    <strong>위치</strong>
                                                    <span>부산 기장군 기장읍</span>
                                                </p>
                                                <p>
                                                    <strong>운영시간</strong>
                                                    <span>연중무휴</span>
                                                </p>
                                            </div>
                                        </div>
                                        <button className="btn round white">선택</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="modal_ftr d-flex center">
                        <button onClick={closeModal} className="btn bg_color3 middle wd80p">예</button>
                        <button onClick={closeModal} className="btn bg_color2 middle wd80p">아니오</button>
                    </div>
                </ModalWrapper>
            </Modal>
        </SelectionAddWrapper>
    );
};

export default SelectionAdd;
