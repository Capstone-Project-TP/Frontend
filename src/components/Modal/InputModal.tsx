import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import ModalFrame from './ModalFrame';

interface InputModalProps {
    isOpen: boolean;
    onClose: () => void;
    label: string;
    onChange: (nickname: string) => void;
}

// 전화번호 입력 포멧 함수
const formatPhoneNumber = (input: string) => {
    // 숫자만 입력하도록 설정
    const numbers = input.replace(/\D/g, "");

    // 전화번호 하이픈('-') 자동 추가
    if (numbers.length <= 3) {
        return numbers;
    } else if (numbers.length <= 7) {
        return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
        return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
}

// 모달 컨텐츠 스타일 컴포넌트
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
`;

const ModalInput = styled.input`
  width: 90%;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 6px;
  outline: none;
  background: white;
  transition: all 0.3s ease;
  margin: 20px;
  

  &:hover {
    border-color: #bbb;
  }

  &:focus {
    border-color: #0066cc;
    box-shadow: 0 0 5px rgba(0, 102, 204, 0.3);
  }

  &::placeholder {
    color: #aaa;
  }
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

const InputModal: React.FC<InputModalProps> = ({
                                                   isOpen,
                                                   onClose,
                                                   label,
                                                   onChange
                                               }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    // 모달창 실행 시 자동으로 입력창 포커스
    useEffect(() => {
        if (isOpen) {
            setInputValue("");
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [isOpen])

    // 라벨에 따라 닉네임 변경, 전화번호 변경 모달 선택(전화번호 변경이면 전화번호 포멧으로 설정)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;

        if (label == '전화번호') {
            newValue = formatPhoneNumber(newValue);
        }

        setInputValue(newValue);
    }

    const handleSave = () => {
        if (inputValue.trim() !== "") {
            onChange(inputValue);
            onClose();
        }
    }

    // 엔터키로 저장
    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            handleSave()
        }
    }

    return (
        <ModalFrame
            isOpen={isOpen}
            onClose={onClose}
            title={`${label} 변경`}
            size='medium'
        >

            <ModalContent>
                <ModalInput
                    ref={inputRef}
                    type="text"
                    className="send_form"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeydown}
                    placeholder={`변경할 ${label}을 입력하세요...`}
                />
                <ModalButton className="select" onClick={handleSave}>변경</ModalButton>
            </ModalContent>

        </ModalFrame>
    );
};

export default InputModal;
