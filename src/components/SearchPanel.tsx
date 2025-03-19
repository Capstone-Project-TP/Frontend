import React from 'react';
import styled, { keyframes } from 'styled-components';

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

// 슬라이드 인 애니메이션 추가
const slideInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const slideInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

// 슬라이드 아웃 애니메이션 추가
const slideOutLeft = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-30px);
    }
`;

const slideOutRight = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(30px);
    }
`;

// 검색 컨테이너 스타일 컴포넌트
const SearchContainer = styled.div<{ isClosing?: boolean }>`
    width: 400px;
    min-height: 600px;
    height: calc(100vh - 300px);
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: absolute;
    z-index: 10;
    
    @media (max-width: 992px) {
        width: 100%;
        height: 600px;
        margin-bottom: 20px;
    }
`;

// 여행지 검색 컨테이너 위치 조정
const TravelSearchContainer = styled(SearchContainer)<{ isClosing?: boolean }>`
    left: calc(300px - 380px); // 여행지 사이드바 너비 + 간격
    animation: ${props => props.isClosing ? slideOutLeft : slideInLeft} 0.4s ease-out forwards;
    
    @media (max-width: 992px) {
        animation: ${props => props.isClosing ? fadeOut : fadeIn} 0.4s ease-out forwards;
    }
`;

// 음식점 검색 컨테이너 위치 조정
const RestaurantSearchContainer = styled(SearchContainer)<{ isClosing?: boolean }>`
    right: calc(300px - 380px); // 음식점 사이드바 너비 + 간격
    animation: ${props => props.isClosing ? slideOutRight : slideInRight} 0.4s ease-out forwards;
    
    @media (max-width: 992px) {
        right: 0;
        width: 100%;
        height: 600px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        animation: ${props => props.isClosing ? fadeOut : fadeIn} 0.4s ease-out forwards;
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
    display: flex;
    gap: 10px;
    align-items: center;
`;

// 검색 입력창 스타일 컴포넌트
const SearchInput = styled.input`
    flex: 1;
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

// 검색 버튼 스타일 컴포넌트
const SearchButton = styled.button`
    padding: 8px 16px;
    background: #0066cc;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
    white-space: nowrap;
    
    &:hover {
        background: #0055aa;
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

interface SearchPanelProps {
    type: 'travel' | 'restaurant';
    isClosing: boolean;
    isComplete: boolean;
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    searchResults: { id: number; name: string; address: string }[];
    onAddPlace: (place: { id: number; name: string }) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({
    type,
    isClosing,
    isComplete,
    searchTerm,
    onSearchChange,
    onSearch,
    searchResults,
    onAddPlace
}) => {
    const Container = type === 'travel' ? TravelSearchContainer : RestaurantSearchContainer;
    const title = type === 'travel' ? '여행지 검색' : '음식점 검색';
    const placeholder = type === 'travel' ? '여행지를 검색하세요' : '음식점을 검색하세요';

    return (
        <Container isClosing={isClosing}>
            <SearchTitle>{title}</SearchTitle>
            <SearchForm>
                <SearchInput 
                    type="text" 
                    placeholder={placeholder} 
                    value={searchTerm}
                    onChange={onSearchChange}
                    onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                />
                <SearchButton onClick={onSearch}>검색</SearchButton>
            </SearchForm>
            <SearchResults>
                {searchResults.map(place => (
                    <SearchResultItem key={place.id}>
                        <PlaceInfo>
                            <PlaceName>{place.name}</PlaceName>
                            <PlaceAddress>{place.address}</PlaceAddress>
                        </PlaceInfo>
                        <AddButton onClick={() => onAddPlace(place)} isComplete={isComplete}>추가</AddButton>
                    </SearchResultItem>
                ))}
            </SearchResults>
        </Container>
    );
};

export default SearchPanel; 