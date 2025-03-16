import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SelectionModal from '../../components/Modal/SelectionModal';
import travelImage1 from '../../assets/images/travel_img1.jpg';
import travelImage2 from '../../assets/images/travel_img2.jpg';
import travelImage3 from '../../assets/images/travel_img3.jpg';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 1500px;
  padding: 50px;
  margin: 0 auto;
`;

// 여행 목록 섹션 스타일 컴포넌트
const TravelSection = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TravelListContainer = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TravelListHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f8f8f8;
  border-bottom: 1px solid #eee;
  font-size: 18px;
  
  strong {
    font-weight: 600;
    font-size: 18px;
    color: #333;
  }
`;


// 여행 카드 관련 스타일 컴포넌트
const TravelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0;
  overflow-y: auto;
  max-height: 635px;
  
  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
    transition: all 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  &:hover::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  
  &:hover::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
`;

// 여행 카드 스타일 컴포넌트
const TravelCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    
    img {
      transform: scale(1.05);
    }
  }
`;

// 여행 카드 이미지 스타일 컴포넌트
const TravelCardImage = styled.div`
  display: block;
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
`;

// 여행 카드 내용 스타일 컴포넌트
const TravelCardContent = styled.div`
  padding: 10px 0 0 15px;
  
  strong {
    display: block;
    font-size: 18px;
    color: #333;
    margin: 5px 0;
  }

  div {
    display: block;
    font-size: 14px;
    color: #666;
    margin: 8px 0;
  }
`;

// 여행 카드 버튼 스타일 컴포넌트
const CardButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  padding: 0 15px 15px;
  justify-content: right;
`;

// 선택 버튼 스타일 컴포넌트
const SelectButton = styled.button`
  display: inline-block;
  padding: 8px 18px;
  background: #f0f0f0;
  color: #333;
  border-radius: 20px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  
  &:hover {
    background: #e0e0e0;
  }
`;

// 여행 목록 푸터 스타일 컴포넌트
const TravelListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #eee;
  // background: #f8f8f8;
`;

// 네비게이션 버튼 스타일 컴포넌트
const NavButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s;
  
  &.before {
    color: #333;
    background: #fff;
    
    &:hover {
      background: #f8f8f8;
    }
  }
  
  &.next {
    color: #fff;
    background: #333;
    border-color: #333;
    
    &:hover {
      background: #444;
    }
  }
`;

// 선택된 여행지 사이드바 스타일 컴포넌트
const SelectedTravelSidebar = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  position: relative;
  padding-bottom: 80px; /* 저장 버튼 공간 확보 */
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

// 사이드바 타이틀 스타일 컴포넌트
const SidebarTitle = styled.strong`
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 0;
  margin-bottom: 2px;
  color: #333;
`;

// 사이드바 여행지 목록 스타일 컴포넌트
const SelectedTravelList = styled.div`
  margin: 0 0 20px;
  border-top: 1px solid #eee;
`;

// 애니메이션 keyframe 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

// 사이드바 여행지 아이템 스타일 컴포넌트
const SelectedTravelItem = styled.div<{ isDeleting?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-size: 15px;
  color: #333;
  font-weight: 500;
  animation: ${props => props.isDeleting ? fadeOut : fadeIn} 0.5s ease-out forwards;
`;

// 사이드바 여행지 아이템 삭제 버튼 스타일 컴포넌트
const DeleteButton = styled.a`
  display: inline-block;
  padding: 6px 10px;
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background: #f0f0f0;
  }
`;

// 저장 버튼 스타일 컴포넌트
const SaveButton = styled.button`
  display: block;
  width: calc(100% - 40px);
  padding: 12px;
  background: #0066cc;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  position: absolute;
  bottom: 20px;
  left: 20px;
  
  &:hover {
    background: #0055aa;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

interface TravelItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface SelectedItem {
  id: number;
  title: string;
}

const SelectDestination: React.FC = () => {
  const [userName] = useState<string>("성수립");
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTravelItem, setSelectedTravelItem] = useState<TravelItem | null>(null);
  
  const [travelItems] = useState<TravelItem[]>([
    {
      id: 1,
      image: travelImage1,
      title: '광안대교',
      description: '광안리의 밤은 당신의 낮보다 아름답다'
    },
    {
      id: 2,
      image: travelImage2,
      title: '마린시티',
      description: '바다에서 불어오는 바람을 가장 먼저 맞는 곳'
    },
    {
      id: 3,
      image: travelImage3,
      title: '해운대해수욕장',
      description: '부산하면 가장 먼저 떠오르는 것, 바다!'
    },
    {
      id: 4,
      image: travelImage1,
      title: '우리집',
      description: '하루종일 자고 싶다'
    },
    {
      id: 5,
      image: travelImage2,
      title: '너네집',
      description: '할거 존나 많아'
    },
    {
      id: 6,
      image: travelImage3,
      title: '캡스톤 시발',
      description: '존나하기 싫다'
    },
    {
      id: 7,
      image: travelImage3,
      title: '캡스톤 시발',
      description: '존나하기 싫다'
    }
  ]);

  // 선택된 여행지 목록
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([
    { id: 1, title: '광안대교' },
    { id: 2, title: '마린시티' },
    { id: 3, title: '해운대 해수욕장' }
  ]);

  // 저장 버튼 클릭 시 실행되는 함수
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // 삭제 버튼 클릭 시 실행되는 함수
  const handleRemoveItem = (id: number) => {
    setDeletingId(id);
    setTimeout(() => {
      setSelectedItems(selectedItems.filter(item => item.id !== id));
      setDeletingId(null);
    }, 500); // 애니메이션 시간과 동일하게 설정
  };

  // 저장 버튼 클릭 시 실행되는 함수
  const handleSave = () => {
    setIsSaving(true);
    // 저장 로직 구현
    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
  };

  const handleSelectItem = (id: number) => {
    // 이미 선택된 아이템인지 확인
    const isAlreadySelected = selectedItems.some(item => item.id === id);
    
    // 이미 선택되지 않은 경우에만 추가
    if (!isAlreadySelected) {
      const itemToAdd = travelItems.find(item => item.id === id);
      if (itemToAdd) {
        setSelectedItems([...selectedItems, { id: itemToAdd.id, title: itemToAdd.title }]);
      }
    }
  };

  // 여행 카드 클릭 시 실행되는 함수
  const handleCardClick = (item: TravelItem) => {
    setSelectedTravelItem(item);
    setIsModalOpen(true);
  };

  // 모달 닫기 함수
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTravelItem(null);
  };

  // 모달 선택 함수
  const handleModalSelect = () => {
    if (selectedTravelItem) {
      handleSelectItem(selectedTravelItem.id);
      handleModalClose();
    }
  };

  return (
    <Container>
      <Navbar userName={userName} />

      <ContentWrapper>
        <TravelSection>
          <TravelListContainer>

            <TravelListHeader>
              <strong>{userName}</strong>님의 성향이 반영된 여행지 추천 목록입니다.
            </TravelListHeader>

            <TravelGrid>
              {travelItems.map((item) => (
                <TravelCard key={item.id} onClick={() => handleCardClick(item)}>
                  <TravelCardImage>
                    <img src={item.image} alt={item.title} />
                  </TravelCardImage>

                  <TravelCardContent>
                    <strong>{item.title}</strong>
                    <div>{item.description}</div>
                  </TravelCardContent>

                  <CardButtonWrapper>
                    <SelectButton onClick={(e) => {
                      e.stopPropagation();
                      handleSelectItem(item.id);
                    }}>선택</SelectButton>
                  </CardButtonWrapper>
                </TravelCard>
              ))}
            </TravelGrid>

            <TravelListFooter>
              <NavButton href="#" className="before">이전</NavButton>
              <NavButton href="#" className="next">다음</NavButton>
            </TravelListFooter>

          </TravelListContainer>

          <SelectedTravelSidebar>
            <SidebarTitle>{userName}님이 선택한 여행지입니다.</SidebarTitle>

            <SelectedTravelList>
              {selectedItems.map((item) => (
                <SelectedTravelItem 
                  key={item.id} 
                  isDeleting={deletingId === item.id}
                >
                  {item.title}
                  <DeleteButton href="#" onClick={() => handleRemoveItem(item.id)}>삭제</DeleteButton>
                </SelectedTravelItem>
              ))}
            </SelectedTravelList>

            <SaveButton onClick={handleSave}>
              {isSaving ? '저장중 ...' : '저장하기'}
            </SaveButton>

          </SelectedTravelSidebar>
        </TravelSection>

      </ContentWrapper>

      <Footer />

      <SelectionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        selectedTravelItem={selectedTravelItem}
        onSelect={handleModalSelect}
      />
    </Container>
  );
};

export default SelectDestination;
