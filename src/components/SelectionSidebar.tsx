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

// 삭제 애니메이션 추가
const collapseItem = keyframes`
    0% {
        max-height: 60px;
        opacity: 1;
        transform: translateX(0);
    }
    50% {
        max-height: 60px;
        opacity: 0.5;
        transform: translateX(-10px);
    }
    100% {
        max-height: 0;
        opacity: 0;
        transform: translateX(-20px);
        padding: 0;
        margin: 0;
        border: none;
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
const SelectedItemsList = styled.div`
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
const SidebarContainer = styled.div<{ isComplete?: boolean }>`
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
const SelectedItem = styled.div<{ isDeleting?: boolean; isComplete?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    font-size: 15px;
    color: ${props => props.isComplete ? '#555' : '#333'};
    font-weight: 500;
    opacity: ${props => props.isComplete ? 0.8 : 1};
    animation: ${props => props.isDeleting ? collapseItem : fadeIn} 0.4s ease-out forwards;
    transform-origin: top;
    max-height: ${props => props.isDeleting ? '0' : '60px'};
    transition: ${props => props.isDeleting ? 'none' : 'all 0.3s ease'};
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

// 추가 + 버튼 스타일 컴포넌트
const AddPlaceButton = styled.button<{ isComplete?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px 0;
    margin-top: 10px;
    background: ${props => props.isComplete ? '#e0e0e0' : '#f5f5f5'};
    color: ${props => props.isComplete ? '#999' : '#0066cc'};
    border: 2px dashed ${props => props.isComplete ? '#ccc' : '#0066cc'};
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    cursor: ${props => props.isComplete ? 'not-allowed' : 'pointer'};
    transition: all 0.3s;
    opacity: ${props => props.isComplete ? 0.6 : 1};
    pointer-events: ${props => props.isComplete ? 'none' : 'auto'};
    
    &:hover {
        background: ${props => props.isComplete ? '#e0e0e0' : '#e6f0ff'};
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

interface PlaceItem {
    id: number;
    title: string;
}

interface SelectionSidebarProps {
    type: 'travel' | 'restaurant';
    title: string;
    items: PlaceItem[];
    isComplete: boolean;
    deletingItemId: number | null;
    onDelete: (id: number) => void;
    onShowSearch: () => void;
    onComplete: () => void;
    onReset: () => void;
}

const SelectionSidebar: React.FC<SelectionSidebarProps> = ({
    type,
    title,
    items,
    isComplete,
    deletingItemId,
    onDelete,
    onShowSearch,
    onComplete,
    onReset
}) => {
    const addButtonText = type === 'travel' ? '+ 여행지 추가하기' : '+ 음식점 추가하기';
    const completeButtonText = isComplete 
        ? '선택 완료됨' 
        : (type === 'travel' ? '여행지 선택 완료' : '음식점 선택 완료');

    return (
        <SidebarContainer isComplete={isComplete} className={`${type}_spot`}>
            <SidebarTitle isComplete={isComplete}>
                {title}
            </SidebarTitle>

            <SelectedItemsList>
                {items.map(item => (
                    <SelectedItem 
                        key={`${type}-${item.id}`} 
                        isDeleting={deletingItemId === item.id}
                        isComplete={isComplete}
                    >
                        {item.title}
                        <DeleteButton 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                onDelete(item.id);
                            }}
                            isComplete={isComplete}
                        >
                            삭제
                        </DeleteButton>
                    </SelectedItem>
                ))}
                <AddPlaceButton 
                    isComplete={isComplete}
                    onClick={onShowSearch}
                    disabled={isComplete}
                >
                    {addButtonText}
                </AddPlaceButton>
            </SelectedItemsList>

            {isComplete && (
                <ResetButton onClick={onReset}>
                    다시 선택하기
                </ResetButton>
            )}

            <CompleteButton 
                onClick={onComplete}
                disabled={isComplete}
                isComplete={isComplete}
            >
                {completeButtonText}
            </CompleteButton>
        </SidebarContainer>
    );
};

export default SelectionSidebar; 