import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';
import LoadingSpinner from '../../components/LoadingSpinner';

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

const MainContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;

// 검색 컨테이너 스타일 컴포넌트
const SearchContainer = styled.div`
    width: 280px;
    min-height: 600px;
    height: calc(100vh - 400px);
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    @media (max-width: 992px) {
        width: 100%;
        height: 600px;
        margin-bottom: 20px;
    }
`;

// 검색 제목 스타일 컴포넌트
const SearchTitle = styled.strong`
    display: block;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
    margin-bottom: 10px;
    color: #333;
`;

// 검색 입력 폼 스타일 컴포넌트
const SearchForm = styled.div`
    margin-bottom: 15px;
`;

// 검색 입력창 스타일 컴포넌트
const SearchInput = styled.input`
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 20px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s;
    box-sizing: border-box;
    
    &:focus {
        border-color: #0066cc;
    }
`;

// 검색 결과 컨테이너 스타일 컴포넌트
const SearchResults = styled.div`
    flex: 1;
    overflow-y: auto;
    padding-right: 5px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

// 검색 결과 아이템 스타일 컴포넌트
const SearchResultItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #eee;
    font-size: 15px;
    color: #333;
    transition: background-color 0.2s;
    
    &:hover {
        background-color: #f8f9fa;
    }
    
    &:first-child {
        border-top: 1px solid #eee;
    }
`;

// 장소 정보 스타일 컴포넌트
const PlaceInfo = styled.div`
    flex: 1;
`;

// 장소 이름 스타일 컴포넌트
const PlaceName = styled.div`
    font-weight: 500;
    margin-bottom: 4px;
`;

// 장소 주소 스타일 컴포넌트
const PlaceAddress = styled.div`
    font-size: 12px;
    color: #777;
`;

// 추가 버튼 스타일 컴포넌트
const AddButton = styled.button<{ isComplete?: boolean }>`
    padding: 6px 12px;
    background: ${props => props.isComplete ? '#ccc' : '#0066cc'};
    color: #fff;
    border: none;
    border-radius: 15px;
    font-size: 13px;
    font-weight: 500;
    cursor: ${props => props.isComplete ? 'not-allowed' : 'pointer'};
    transition: background 0.3s;
    margin-left: 10px;
    
    &:hover {
        background: ${props => props.isComplete ? '#ccc' : '#0055aa'};
    }
`;

// 사이드바 타이틀 스타일 컴포넌트
const SidebarTitle = styled.strong<{ isComplete?: boolean }>`
    display: block;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
    margin-bottom: 2px;
    color: ${props => props.isComplete ? '#555' : '#333'};
    text-shadow: ${props => props.isComplete ? '0 1px 1px rgba(0, 0, 0, 0.2)' : 'none'};
`;

// 사이드바 여행지 목록 스타일 컴포넌트 - 스크롤바 숨김
const SelectedTravelList = styled.div`
    flex: 1;
    overflow-y: auto;
    margin-bottom: 70px; /* 버튼 높이 + 여백 */
    border-top: 1px solid #eee;
    padding-right: 5px;
    scrollbar-width: none; /* Firefox에서는 스크롤바 완전히 숨김 */
    -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨김 */
    
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari에서 스크롤바 숨김 */
    }
`;

// 선택된 여행지 사이드바 스타일 컴포넌트
const SelectedTravelSidebar = styled.div<{ isComplete?: boolean }>`
    width: 300px;
    min-height: 600px;
    height: calc(100vh - 300px);
    background: ${props => props.isComplete ? '#e6e6e6' : '#fff'};
    border-radius: 10px;
    box-shadow: ${props => props.isComplete 
        ? '0 2px 10px rgba(0, 0, 0, 0.5)' 
        : '0 2px 10px rgba(0, 0, 0, 0.3)'};
    padding: 20px;
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
    
    @media (max-width: 992px) {
        width: 100%;
        height: 600px;
    }
`;

// 사이드바 여행지 아이템 스타일 컴포넌트
const SelectedTravelItem = styled.div<{ isDeleting?: boolean; isComplete?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    font-size: 15px;
    color: ${props => props.isComplete ? '#555' : '#333'};
    font-weight: 500;
    opacity: ${props => props.isComplete ? 0.8 : 1};
    animation: ${props => props.isDeleting ? fadeOut : fadeIn} 0.5s ease-out forwards;
`;

// 사이드바 여행지 아이템 삭제 버튼 스타일 컴포넌트
const DeleteButton = styled.a<{ isComplete?: boolean }>`
    display: inline-block;
    padding: 6px 10px;
    background: ${props => props.isComplete ? '#e0e0e0' : '#fff'};
    color: ${props => props.isComplete ? '#aaa' : '#333'};
    border: 1px solid #ddd;
    border-radius: 15px;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s;
    opacity: ${props => props.isComplete ? 0.6 : 1};
    pointer-events: ${props => props.isComplete ? 'none' : 'auto'};
    
    &:hover {
        background: ${props => props.isComplete ? '#e0e0e0' : '#f0f0f0'};
    }
`;

// 완료 버튼 스타일 컴포넌트
const CompleteButton = styled.button<{ isComplete?: boolean }>`
    display: block;
    width: calc(100% - 40px);
    padding: 12px;
    background: ${props => props.isComplete ? '#888' : '#0066cc'};
    color: #fff;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 500;
    cursor: ${props => props.isComplete ? 'default' : 'pointer'};
    transition: background 0.3s;
    position: absolute;
    left: 20px;
    align-self: center;
    bottom: 20px;
    
    &:hover {
        background: ${props => props.isComplete ? '#888' : '#0055aa'};
    }
    
    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
`;

// 다시 선택하기 버튼 스타일 컴포넌트
const ResetButton = styled.button`
    display: block;
    width: calc(100% - 40px);
    padding: 8px;
    background: #ff6b6b;
    color: #fff;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 12px 20px;
    
    &:hover {
        background: #ff5252;
    }
`;

Modal.setAppElement('#root'); // 모달을 위한 설정

const SelectionAdd: React.FC = () => {
    const [selectedPlaces, setSelectedPlaces] = useState({
        travel: [
            { id: 1, title: '광안대교' },
            { id: 2, title: '마린시티' },
            { id: 3, title: '해운대해수욕장' },
            { id: 4, title: '우리집' },
            { id: 5, title: '너네집' },
            { id: 6, title: '캡스톤 시발' },
        ],
        restaurant: [
            { id: 1, title: '부산 어묵' },
            { id: 2, title: '돼지국밥' },
            { id: 3, title: '해운대 회센터' }
        ]
    });

    // 검색을 위한 상태 관리
    const [travelSearchTerm, setTravelSearchTerm] = useState('');
    const [restaurantSearchTerm, setRestaurantSearchTerm] = useState('');
    
    // 검색 결과를 위한 상태 관리
    const [travelSearchResults] = useState([
        { id: 101, name: '부산타워', address: '부산 중구 용두산길 37-55' },
        { id: 102, name: '해동용궁사', address: '부산 기장군 기장읍 기장해안로 86' },
        { id: 103, name: '태종대', address: '부산 영도구 전망로 24' },
        { id: 104, name: '감천문화마을', address: '부산 사하구 감내2로 203' },
        { id: 105, name: '오륙도', address: '부산 남구 오륙도로 137' }
    ]);
    
    const [restaurantSearchResults] = useState([
        { id: 201, name: '자갈치 시장', address: '부산 중구 자갈치해안로 52' },
        { id: 202, name: '가야밀면', address: '부산 진구 가야대로 507' },
        { id: 203, name: '삼진어묵', address: '부산 남구 분포로 66' },
        { id: 204, name: '송정 가마솥 국밥', address: '부산 해운대구 송정구서로 21' },
        { id: 205, name: '원조할매국밥', address: '부산 동구 중앙대로 526' }
    ]);

    // 선택 완료 상태 관리
    const [isTravelComplete, setIsTravelComplete] = useState(false);
    const [isRestaurantComplete, setIsRestaurantComplete] = useState(false);
    
    // 로딩 상태 관리
    const [isLoading, setIsLoading] = useState(false);
    
    // 삭제 애니메이션을 위한 상태 관리
    const [deletingTravelId, setDeletingTravelId] = useState<number | null>(null);
    const [deletingRestaurantId, setDeletingRestaurantId] = useState<number | null>(null);

    // 두 선택이 모두 완료되었을 때 로딩 시작
    useEffect(() => {
        if (isTravelComplete && isRestaurantComplete) {
            setIsLoading(true);
            
            // 3초 후에 로딩 종료 및 다음 페이지로 이동
            const timer = setTimeout(() => {
                setIsLoading(false);
                // 여기에 다음 페이지로 이동하는 코드 (예: navigate('/selection/result'))
                console.log('선택 완료! 다음 페이지로 이동합니다.');
                // window.location.href = '/selection/result'; // 실제 구현 시 사용
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    }, [isTravelComplete, isRestaurantComplete]);

    // 선택 완료 핸들러
    const handleTravelComplete = () => {
        setIsTravelComplete(true);
    };

    const handleRestaurantComplete = () => {
        setIsRestaurantComplete(true);
    };

    // 다시 선택하기 핸들러
    const handleResetTravel = () => {
        setIsTravelComplete(false);
    };

    const handleResetRestaurant = () => {
        setIsRestaurantComplete(false);
    };

    const handleDelete = (type: 'travel' | 'restaurant', id: number) => {
        if (type === 'travel') {
            setDeletingTravelId(id);
            setTimeout(() => {
                setSelectedPlaces(prev => ({
                    ...prev,
                    [type]: prev[type].filter(item => item.id !== id)
                }));
                setDeletingTravelId(null);
            }, 500);
        } else {
            setDeletingRestaurantId(id);
            setTimeout(() => {
                setSelectedPlaces(prev => ({
                    ...prev,
                    [type]: prev[type].filter(item => item.id !== id)
                }));
                setDeletingRestaurantId(null);
            }, 500);
        }
    };

    // 검색어 변경 핸들러
    const handleTravelSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTravelSearchTerm(e.target.value);
        // 실제 구현에서는 여기서 API 호출이나 필터링 로직을 추가
    };

    const handleRestaurantSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRestaurantSearchTerm(e.target.value);
        // 실제 구현에서는 여기서 API 호출이나 필터링 로직을 추가
    };

    // 장소 추가 핸들러
    const handleAddTravel = (place: { id: number, name: string }) => {
        if (isTravelComplete) return; // 선택 완료 상태면 추가하지 않음
        // 중복 체크
        if (!selectedPlaces.travel.some(item => item.id === place.id)) {
            setSelectedPlaces(prev => ({
                ...prev,
                travel: [...prev.travel, { id: place.id, title: place.name }]
            }));
        }
    };

    const handleAddRestaurant = (place: { id: number, name: string }) => {
        if (isRestaurantComplete) return; // 선택 완료 상태면 추가하지 않음
        // 중복 체크
        if (!selectedPlaces.restaurant.some(item => item.id === place.id)) {
            setSelectedPlaces(prev => ({
                ...prev,
                restaurant: [...prev.restaurant, { id: place.id, title: place.name }]
            }));
        }
    };

    return (
        <>
            <MainContainer>
                {/* 여행지 검색 컨테이너 */}
                <SearchContainer>
                    <SearchTitle>여행지 검색</SearchTitle>
                    <SearchForm>
                        <SearchInput 
                            type="text" 
                            placeholder="여행지를 검색하세요" 
                            value={travelSearchTerm}
                            onChange={handleTravelSearchChange}
                        />
                    </SearchForm>
                    <SearchResults>
                        {travelSearchResults.map(place => (
                            <SearchResultItem key={place.id}>
                                <PlaceInfo>
                                    <PlaceName>{place.name}</PlaceName>
                                    <PlaceAddress>{place.address}</PlaceAddress>
                                </PlaceInfo>
                                <AddButton onClick={() => handleAddTravel(place)} isComplete={isTravelComplete}>추가</AddButton>
                            </SearchResultItem>
                        ))}
                    </SearchResults>
                </SearchContainer>

                {/* 선택한 여행지 사이드바 */}
                <SelectedTravelSidebar 
                    className="travel_spot" 
                    isComplete={isTravelComplete}
                >
                    <SidebarTitle isComplete={isTravelComplete}>
                        성수립님이 선택한 여행지입니다.
                    </SidebarTitle>

                    <SelectedTravelList>
                        {selectedPlaces.travel.map((item) => (
                            <SelectedTravelItem 
                                key={`travel-${item.id}`} 
                                isDeleting={deletingTravelId === item.id}
                                isComplete={isTravelComplete}
                            >
                                {item.title}
                                <DeleteButton 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleDelete('travel', item.id);
                                    }}
                                    isComplete={isTravelComplete}
                                >
                                    삭제
                                </DeleteButton>
                            </SelectedTravelItem>
                        ))}
                    </SelectedTravelList>

                    {isTravelComplete && (
                        <ResetButton onClick={handleResetTravel}>
                            다시 선택하기
                        </ResetButton>
                    )}

                    <CompleteButton 
                        onClick={handleTravelComplete}
                        disabled={isTravelComplete}
                        isComplete={isTravelComplete}
                    >
                        {isTravelComplete ? '선택 완료됨' : '여행지 선택 완료'}
                    </CompleteButton>
                </SelectedTravelSidebar>
                
                {/* <AddModal isOpen={true} onClose={() => {}} onAdd={() => {}} /> */}

                {/* 선택한 음식점 사이드바 */}
                <SelectedTravelSidebar 
                    className="restaurant_spot" 
                    isComplete={isRestaurantComplete}
                >
                    <SidebarTitle isComplete={isRestaurantComplete}>
                        성수립님이 선택한 음식점입니다.
                    </SidebarTitle>

                    <SelectedTravelList>
                        {selectedPlaces.restaurant.map((item) => (
                            <SelectedTravelItem 
                                key={`restaurant-${item.id}`} 
                                isDeleting={deletingRestaurantId === item.id}
                                isComplete={isRestaurantComplete}
                            >
                                {item.title}
                                <DeleteButton 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleDelete('restaurant', item.id);
                                    }}
                                    isComplete={isRestaurantComplete}
                                >
                                    삭제
                                </DeleteButton>
                            </SelectedTravelItem>
                        ))}
                    </SelectedTravelList>

                    {isRestaurantComplete && (
                        <ResetButton onClick={handleResetRestaurant}>
                            다시 선택하기
                        </ResetButton>
                    )}

                    <CompleteButton 
                        onClick={handleRestaurantComplete}
                        disabled={isRestaurantComplete}
                        isComplete={isRestaurantComplete}
                    >
                        {isRestaurantComplete ? '선택 완료됨' : '음식점 선택 완료'}
                    </CompleteButton>
                </SelectedTravelSidebar>

                {/* 음식점 검색 컨테이너 */}
                <SearchContainer>
                    <SearchTitle>음식점 검색</SearchTitle>
                    <SearchForm>
                        <SearchInput 
                            type="text" 
                            placeholder="음식점을 검색하세요" 
                            value={restaurantSearchTerm}
                            onChange={handleRestaurantSearchChange}
                        />
                    </SearchForm>
                    <SearchResults>
                        {restaurantSearchResults.map(place => (
                            <SearchResultItem key={place.id}>
                                <PlaceInfo>
                                    <PlaceName>{place.name}</PlaceName>
                                    <PlaceAddress>{place.address}</PlaceAddress>
                                </PlaceInfo>
                                <AddButton onClick={() => handleAddRestaurant(place)} isComplete={isRestaurantComplete}>추가</AddButton>
                            </SearchResultItem>
                        ))}
                    </SearchResults>
                </SearchContainer>
            </MainContainer>
            
            {/* 로딩 스피너 */}
            {isLoading && (
                <LoadingSpinner message="가이드가 최적의 여행 계획을 작성 중입니다..." />
            )}
        </>
    );
};

export default SelectionAdd;
