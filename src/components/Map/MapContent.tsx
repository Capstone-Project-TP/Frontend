import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Place, NaverMapTypes } from './NaverMap';
import travel_img1 from '../../assets/images/travel_img1.jpg';

// =============== 애니메이션 keyframes 정의 ===============
const fadeInSlide = keyframes`
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

// =============== 스타일드 컴포넌트 정의 ===============
const ContentContainer = styled.div`
    padding: 0;
    width: 320px;
    font-family: 'Noto Sans KR', sans-serif;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    animation: ${fadeInSlide} 0.35s ease-out forwards;
`;

const PlaceImage = styled.div<{ imageUrl: string }>`
    width: 100%;
    height: 180px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60%;
        background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    }
`;

const PlaceName = styled.h3`
    position: absolute;
    bottom: 15px;
    left: 20px;
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const PlaceDescription = styled.p`
    margin: 0 0 16px 0;
    font-size: 15px;
    line-height: 1.6;
    color: #444;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #f0f0f0;
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
    background: #f8f9fa;
    padding: 10px 15px;
    border-radius: 8px;
    
    &:before {
        margin-right: 10px;
        font-size: 16px;
    }
`;

const OperatingHours = styled(InfoItem)`
    &:before {
        content: "⏰";
    }
`;

const Visitors = styled(InfoItem)`
    &:before {
        content: "👥";
    }
`;

// =============== 마커 및 정보창 스타일 옵션 ===============

/**
 * 정보창 스타일 옵션
 */
export const infoWindowStyle = {
    maxWidth: 320,
    backgroundColor: "#ffffff",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: "12px",
    padding: 0,
    anchorSize: {
        width: 12,
        height: 12
    },
    anchorSkew: true,
    anchorColor: "#ffffff",
    pixelOffset: {
        x: 10,
        y: -20
    },
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
};

// 마커 색상 정의
const markerColors: { [key: string]: string } = {
    day1: '#3498db', // 파란색
    day2: '#2ecc71', // 초록색
    day3: '#e74c3c', // 빨간색
    day4: '#f1c40f', // 노란색
    day5: '#9b59b6', // 보라색
};

// 마커 스타일 옵션
export const markerStyle = {
    day1: {
        fillColor: markerColors.day1,
        fillOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: '#ffffff',
        strokeOpacity: 0.8,
        textColor: '#ffffff',
        textSize: 14,
        textWeight: 'bold',
    },
    day2: {
        fillColor: markerColors.day2,
        fillOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: '#ffffff',
        strokeOpacity: 0.8,
        textColor: '#ffffff',
        textSize: 14,
        textWeight: 'bold',
    },
    day3: {
        fillColor: markerColors.day3,
        fillOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: '#ffffff',
        strokeOpacity: 0.8,
        textColor: '#ffffff',
        textSize: 14,
        textWeight: 'bold',
    },
    day4: {
        fillColor: markerColors.day4,
        fillOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: '#ffffff',
        strokeOpacity: 0.8,
        textColor: '#ffffff',
        textSize: 14,
        textWeight: 'bold',
    },
    day5: {
        fillColor: markerColors.day5,
        fillOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: '#ffffff',
        strokeOpacity: 0.8,
        textColor: '#ffffff',
        textSize: 14,
        textWeight: 'bold',
    },
};

// =============== 컴포넌트 인터페이스 ===============
interface MapContentProps {
    place: Place;
}

// =============== 유틸리티 함수 ===============

/**
 * 네이버 맵 정보창에 표시될 HTML 컨텐츠를 생성하는 함수
 * @param place 장소 정보
 * @returns 정보창에 표시될 HTML 문자열
 */
export const generateInfoWindowContent = (place: Place): string => {
    return `
        <div style="padding:0; width:320px; font-family:'Noto Sans KR', sans-serif; border-radius:12px; overflow:hidden; opacity: 0; animation: infoWindowFadeIn 0.3s ease-out forwards; animation-delay: 0.05s; will-change: opacity;">
            <style>
                @keyframes infoWindowFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            </style>
            <div style="width:100%; position:relative;">
                <div style="width:100%; height:180px; background-image:url('${place.imageUrl || travel_img1}'); background-size:cover; background-position:center; position:relative;">
                    <div style="position:absolute; bottom:0; left:0; right:0; height:60%; background:linear-gradient(to top, rgba(0,0,0,0.7), transparent);"></div>
                    <h3 style="position:absolute; bottom:15px; left:20px; margin:0; font-size:24px; font-weight:700; color:#ffffff; text-shadow:0 2px 4px rgba(0,0,0,0.3);">${place.name}</h3>
                </div>
                <div style="padding:20px; background:#ffffff; position:relative;">
                    <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#444;">${place.description}</p>
                    <div style="display:flex; flex-direction:column; gap:12px; margin-top:16px; padding-top:16px; border-top:1px solid #f0f0f0;">
                        <div style="display:flex; align-items:center; font-size:14px; color:#666; background:#f8f9fa; padding:10px 15px; border-radius:8px;">
                            <span style="margin-right:10px; font-size:16px;">⏰</span>
                            ${place.operatingHours || '운영시간 정보 없음'}
                        </div>
                        <div style="display:flex; align-items:center; font-size:14px; color:#666; background:#f8f9fa; padding:10px 15px; border-radius:8px;">
                            <span style="margin-right:10px; font-size:16px;">👥</span>
                            ${place.visitors || 0}명 방문
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

/**
 * 정보창 생성 함수
 * @returns Naver 맵 InfoWindow 설정 객체
 */
export const createInfoWindow = () => {
    if (!window.naver || !window.naver.maps) return null;
    
    return new window.naver.maps.InfoWindow({
        content: '',
        maxWidth: infoWindowStyle.maxWidth,
        backgroundColor: infoWindowStyle.backgroundColor,
        borderColor: infoWindowStyle.borderColor,
        borderWidth: infoWindowStyle.borderWidth,
        borderRadius: '12px',
        anchorSize: new window.naver.maps.Size(
            infoWindowStyle.anchorSize.width, 
            infoWindowStyle.anchorSize.height
        ),
        anchorSkew: infoWindowStyle.anchorSkew,
        anchorColor: infoWindowStyle.anchorColor,
        pixelOffset: new window.naver.maps.Point(
            infoWindowStyle.pixelOffset.x, 
            infoWindowStyle.pixelOffset.y
        ),
        disableAnchor: false,
        zIndex: 150,
        cssStyle: {
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
        }
    });
};

/**
 * 마커 생성 함수
 * @param map 표시할 지도 객체
 * @param position 위치 (위도, 경도)
 * @param title 마커 제목
 * @param day 일차
 * @param order 순서
 * @param color 마커 색상 (옵션)
 * @returns Naver 맵 Marker 객체
 */
export const createMarker = (
    map: NaverMapTypes.Map,
    position: { lat: number; lng: number },
    title: string,
    day: number,
    order: number,
    color?: string
) => {
    if (!window.naver || !window.naver.maps) return null;
    
    // 색상이 제공되면 해당 색상 사용, 아니면 기본 일차별 색상 사용
    const markerColor = color || markerColors[`day${day}`];
    
    const markerOptions = {
        position: new window.naver.maps.LatLng(position.lat, position.lng),
        map: map,
        title: title,
        icon: {
            content: `<div class="marker-wrapper" style="
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            ">
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 32px;
                    height: 32px;
                    background-color: ${markerColor};
                    border: 2px solid #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 14px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                    box-sizing: border-box;
                    text-align: center;
                ">${order}</div>
            </div>`,
            size: new window.naver.maps.Size(32, 32),
            anchor: new window.naver.maps.Point(16, 16)
        }
    };
    
    return new window.naver.maps.Marker(markerOptions);
};

// =============== React 컴포넌트 ===============

/**
 * 정보창 컨텐츠 컴포넌트
 * (React 컴포넌트로 사용할 경우를 위해 제공)
 */
const MapContent: React.FC<MapContentProps> = ({ place }) => {
    return (
        <ContentContainer>
            <PlaceImage imageUrl={place.imageUrl || travel_img1} />
            <PlaceName>{place.name}</PlaceName>
            <PlaceDescription>{place.description}</PlaceDescription>
            <InfoSection>
                <OperatingHours>{place.operatingHours || '운영시간 정보 없음'}</OperatingHours>
                <Visitors>{place.visitors || 0}명 방문</Visitors>
            </InfoSection>
        </ContentContainer>
    );
};

export default MapContent;
