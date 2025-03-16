import React from 'react';
import styled from 'styled-components';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/l10n/ko';

interface ScheduleLocation {
  id: number;
  name: string;
  category: string;
  image: string;
  hours: string;
  location: string;
}

const ScheduleMap = () => {
  const scheduleLocations: ScheduleLocation[] = [
    {
      id: 1,
      name: '해운대',
      category: '지역명소',
      image: '/images/travel_img2.jpg',
      hours: '연중무휴',
      location: '부산 해운대구 우동'
    },
    {
      id: 2,
      name: '부산역',
      category: 'KTX,SRT 정차역',
      image: '/images/travel_img2.jpg',
      hours: '24:00에 영업종료',
      location: '부산 기장군 기장읍'
    },
    {
      id: 3,
      name: '광안리',
      category: '지역명소',
      image: '/images/travel_img2.jpg',
      hours: '연중무휴',
      location: '부산 기장군 기장읍'
    }
  ];

  return (
    <Container>
      <div className="inner">
        <ScheduleWrapper>
          <ScheduleList>
            <ScheduleHeader>
              <strong>BUSAN</strong>
              <DateInfo>
                <span>일정시작 : 2025.01.20 (월) 17:00</span>
                <span>일정종료 : 2025.01.24 (금) 21:00</span>
              </DateInfo>
            </ScheduleHeader>
            <ScheduleBody>
              <DatePlan>
                <Date>
                  <strong>1일차</strong>
                  <span>8/24</span>
                </Date>
                <WeatherWrap>
                  <WeatherGraphic>
                    <WeatherMain>
                      <WeatherIcon className="wt_icon ico_wt1">
                        <span className="blind">맑음</span>
                      </WeatherIcon>
                    </WeatherMain>
                    <TemperatureText>
                      <strong>
                        <span className="blind">현재 온도</span>-2.8
                        <span className="celsius">°</span>
                      </strong>
                    </TemperatureText>
                  </WeatherGraphic>
                  <TemperatureInfo>
                    <span className="weather before_slash">맑음</span>
                    <p className="summary">
                      어제보다 <span className="temperature up">2.4° <span className="blind">높아요</span></span>
                    </p>
                  </TemperatureInfo>
                </WeatherWrap>
              </DatePlan>
              <AddTravel>
                <ul>
                  {scheduleLocations.map((location) => (
                    <li key={location.id}>
                      <h3>
                        <i>{location.id}</i>
                        {location.name} <span>{location.category}</span>
                      </h3>
                      <FlexContainer>
                        <ImageWrapper>
                          <img src={location.image} alt={location.name} />
                        </ImageWrapper>
                        <Info>
                          <p>
                            <strong>영업시간 </strong>
                            <span>{location.hours}</span>
                          </p>
                          <p className="mb10">
                            <strong>위치</strong>
                            <span>{location.location}</span>
                          </p>
                        </Info>
                      </FlexContainer>
                    </li>
                  ))}
                </ul>
              </AddTravel>
            </ScheduleBody>
          </ScheduleList>
          <ScheduleUtil>
            <DatePart>
              <a href="#" className="on">1일차</a>
              <a href="#">2일차</a>
              <a href="#">3일차</a>
            </DatePart>
            <NextButton href="/schedule-edit">다음</NextButton>
          </ScheduleUtil>
          <ScheDot>
            <DotBox className="dot_1">
              <DotIcon style={{ bottom: '400px', left: '1100px' }}>1</DotIcon>
            </DotBox>
            <DotBox className="dot_2">
              <DotIcon style={{ bottom: '200px', left: '700px' }}>2</DotIcon>
              <LocationInfo style={{ bottom: '240px', left: '630px' }}>
                <h4>부산역</h4>
                <ImageWrapper>
                  <img src="/images/travel_img3.jpg" alt="부산역" />
                </ImageWrapper>
                <LocationInfoText>
                  <strong>부산의 대표적인 명소</strong>
                  <span className="pt3">운영시간:24시간</span>
                  <span>25명이 이 장소를 방문했습니다.</span>
                </LocationInfoText>
              </LocationInfo>
            </DotBox>
            <DotBox className="dot_3">
              <DotIcon style={{ bottom: '350px', left: '900px' }}>3</DotIcon>
            </DotBox>
          </ScheDot>
          <MapImage>
            <img src="/images/map.jpg" alt="지도" />
          </MapImage>
        </ScheduleWrapper>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ScheduleWrapper = styled.div`
  position: relative;
`;

const ScheduleList = styled.div`
  padding: 20px;
`;

const ScheduleHeader = styled.div`
  margin-bottom: 20px;
  
  strong {
    font-size: 24px;
    font-weight: bold;
  }
`;

const DateInfo = styled.p`
  margin-top: 10px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const ScheduleBody = styled.div``;

const DatePlan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Date = styled.p`
  strong {
    margin-right: 10px;
  }
`;

const WeatherWrap = styled.div`
  display: flex;
  align-items: center;
`;

const WeatherGraphic = styled.div`
  margin-right: 15px;
`;

const WeatherMain = styled.div``;

const WeatherIcon = styled.i``;

const TemperatureText = styled.div``;

const TemperatureInfo = styled.div``;

const AddTravel = styled.div`
  max-height: 500px;
  overflow-y: auto;
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const ImageWrapper = styled.span`
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const Info = styled.div`
  p {
    margin-bottom: 8px;
    
    strong {
      margin-right: 8px;
    }
  }
`;

const ScheduleUtil = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const DatePart = styled.div`
  a {
    margin-right: 10px;
    padding: 5px 10px;
    text-decoration: none;
    color: #333;
    
    &.on {
      color: #fff;
      background-color: #007bff;
      border-radius: 4px;
    }
  }
`;

const NextButton = styled.a`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
`;

const ScheDot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DotBox = styled.div`
  position: relative;
`;

const DotIcon = styled.i`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LocationInfo = styled.div`
  position: absolute;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 250px;
`;

const LocationInfoText = styled.p`
  margin-top: 10px;
  
  strong {
    display: block;
    margin-bottom: 5px;
  }
  
  span {
    display: block;
    font-size: 14px;
    color: #666;
  }
`;

const MapImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export default ScheduleMap;