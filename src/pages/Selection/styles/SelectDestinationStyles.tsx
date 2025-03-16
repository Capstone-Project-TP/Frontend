import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const TravelWrap = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TravelList = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const TravelHeader = styled.div`
  padding: 20px;
  background: #f8f8f8;
  border-bottom: 1px solid #eee;
  
  strong {
    font-weight: 600;
    color: #333;
  }
`;

export const TravelBody = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  list-style: none;
  margin: 0;
  
  li {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    
    &:hover {
      transform: translateY(-5px);
    }
    
    a {
      display: block;
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const ImageContainer = styled.span`
  display: block;
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Caption = styled.p`
  padding: 15px;
  margin: 0;
  
  span {
    display: block;
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }
  
  strong {
    display: block;
    font-size: 18px;
    color: #333;
  }
`;

export const ButtonContainer = styled.p`
  display: flex;
  gap: 10px;
  padding: 0 15px 15px;
  margin: 0;
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 8px 15px;
  background: #f0f0f0;
  color: #333;
  border-radius: 20px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s;
  
  &:hover {
    background: #e0e0e0;
  }
`;

export const TravelFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #eee;
`;

export const OutlineButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s;
  
  &.white {
    color: #333;
    background: #fff;
    
    &:hover {
      background: #f8f8f8;
    }
  }
  
  &.black {
    color: #fff;
    background: #333;
    border-color: #333;
    
    &:hover {
      background: #444;
    }
  }
`;

export const Searching = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const SelectTitle = styled.strong`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
`;

export const SelectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    
    span {
      font-size: 14px;
      color: #333;
    }
  }
`;

export const RoundButton = styled.a`
  display: inline-block;
  padding: 5px 10px;
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 12px;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background: #f0f0f0;
  }
`;

export const RoundBigButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  background: #0066cc;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #0055aa;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`; 