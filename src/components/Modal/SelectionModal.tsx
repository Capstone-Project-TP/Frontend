import React from 'react';
import styled from 'styled-components';
import ModalFrame from './ModalFrame';

interface TravelItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface SelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedTravelItem: TravelItem | null;
    onSelect: () => void;
}

// 모달 컨텐츠 스타일 컴포넌트
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

// 모달 이미지 스타일 컴포넌트
const ModalImage = styled.img`
    width: 100%;
    height: 300px;
    margin-top: 10px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
`;

// 모달 설명 스타일 컴포넌트
const ModalDescription = styled.p`
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
`;

// 모달 버튼 스타일 컴포넌트
const ModalButton = styled.button`
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;
    transition: all 0.3s;
    align-self: flex-end;

    &.select {
        background-color: #f0f0f0;
        color: #333;
        
        &:hover {
        background-color: #e0e0e0;
        }
    }
`;

const SelectionModal: React.FC<SelectionModalProps> = ({
    isOpen,
    onClose,
    selectedTravelItem,
    onSelect
}) => {
    return (
        <ModalFrame
            isOpen={isOpen}
            onClose={onClose}
            title={selectedTravelItem?.title}
            size='medium'
        >
            {selectedTravelItem && (
                <ModalContent>
                    <ModalImage src={selectedTravelItem.image} alt={selectedTravelItem.title} />
                    <ModalDescription>{selectedTravelItem.description}</ModalDescription>
                    <ModalButton className="select" onClick={onSelect}>선택하기</ModalButton>
                </ModalContent>
            )}
        </ModalFrame>
    );
};

export default SelectionModal;
