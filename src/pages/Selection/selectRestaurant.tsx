import React, { useState } from 'react';
import '../../css/flatpickr.min.css';
import '../../css/base.css';
import { Link } from 'react-router-dom';

interface TravelItem {
  id: number;
  image: string;
  description: string;
  title: string;
}

interface SelectedItem {
  id: number;
  title: string;
}

const SelectDestination: React.FC = () => {
  const [travelItems] = useState<TravelItem[]>([
    {
      id: 1,
      image: '../../images/travel_img1.jpg',
      description: '광안리의 밤은 당신의 낮보다 아름답다',
      title: '광안대교'
    },
    {
      id: 2,
      image: '../../images/travel_img2.jpg',
      description: '바다에서 불어오는 바람을 가장 먼저 맞는 곳',
      title: '마린시티'
    },
    {
      id: 3,
      image: '../../images/travel_img3.jpg',
      description: '부산하면 가장 먼저 떠오르는 것, 바다!',
      title: '해운대해수욕장'
    },
    {
      id: 4,
      image: '../../images/travel_img1.jpg',
      description: '광안리의 밤은 당신의 낮보다 아름답다',
      title: '광안대교'
    },
    {
      id: 5,
      image: '../../images/travel_img2.jpg',
      description: '바다에서 불어오는 바람을 가장 먼저 맞는 곳',
      title: '마린시티'
    },
    {
      id: 6,
      image: '../../images/travel_img3.jpg',
      description: '부산하면 가장 먼저 떠오르는 것, 바다!',
      title: '해운대해수욕장'
    }
  ]);

  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([
    { id: 1, title: '광안대교' },
    { id: 2, title: '마린시티' },
    { id: 3, title: '해운대 해수욕장' }
  ]);

  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleRemoveItem = (id: number) => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  const handleSave = () => {
    setIsSaving(true);
    // 저장 로직 구현
    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
  };

  return (
    <div id="wrap">
      <header id="header">
        <h1>
          <Link to="/">
            <img src="../../images/t_logo.png" alt="logo" />
          </Link>
        </h1>
        <nav id="menu">
          <ul>
            <li><Link to="/service">서비스 소개</Link></li>
            <li><Link to="/guide">가이드북</Link></li>
            <li><Link to="/travel">여행지 검색</Link></li>
          </ul>
          <Link to="/my_profile" className="user_id"><i></i>Sooyeony</Link>
        </nav>
      </header>

      <main id="main">
        <div className="inner">
          <div className="travel__wrap">
            <div className="travel_list">
              <div className="travel_hdr">
                <strong>김수연</strong>님의 성향이 반영된 여행지 추천 목록입니다.
              </div>
              <ul className="travel_bdy">
                {travelItems.map((item) => (
                  <li key={item.id}>
                    <a href="#">
                      <span className="img">
                        <img src={item.image} alt={item.title} />
                      </span>
                      <p className="caption">
                        <span>{item.description}</span>
                        <strong>{item.title}</strong>
                      </p>
                      <p className="button">
                        <Link to="/add_travel" className="btn round gray">상세</Link>
                        <Link to="/schedule" className="btn round gray">선택</Link>
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="travel_ftr">
                <a href="#" className="btn white outline">이전</a>
                <a href="#" className="btn black outline">다음</a>
              </div>
            </div>
            <div className="searching">
              <strong className="select_title">김수연님이 선택한 여행지입니다.</strong>
              <ul className="select_list">
                {selectedItems.map((item) => (
                  <li key={item.id}>
                    <span>{item.title}</span>
                    <a href="#" className="btn round white" onClick={() => handleRemoveItem(item.id)}>삭제</a>
                  </li>
                ))}
              </ul>
              <button className="btn round_big" onClick={handleSave}>
                <span>{isSaving ? '저장중' : '저장하기'}</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer id="footer">
        <div className="ft_menu">
          <ul>
            <li><a href="#">개인정보보호방침</a></li>
            <li><a href="#">고객센터</a></li>
          </ul>
        </div>
        <p className="copy">Copyright 2025. Capstone All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SelectDestination;
