import './App.css'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import LoginPage from './pages/LoginSingup/loginPage'
import SignupPage from './pages/LoginSingup/signupPage'
import MainPage from './pages/mainPage'
import SelectionPage from './pages/Selection/selectRestaurant'
import QuestionPage from './pages/Question/questionPage'
import MyPage from './pages/Mypage/profileCorrection'
import ScheduleMap from './pages/Schedule/scheduleMap'
import ScheduleEdit from './pages/Schedule/schduleEdit'
import ErrorPage from './pages/errorPage'
import JoinAgreePage from './pages/LoginSingup/joinAgreePage'
import JoinRegisterPage from './pages/LoginSingup/joinRegisterPage'
import LoadingPage from './pages/loadingPage'
import SelectionAdd from './pages/Selection/selectionAdd'
import MyGuidePage from './pages/Mypage/myGuidePage'
import SelectionDestination from './pages/Selection/selectDestination'
import SelectionRestaurant from './pages/Selection/selectRestaurant'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex: 1;
    padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/scheduleMap" element={<ScheduleMap />} />
          <Route path="/scheduleEdit" element={<ScheduleEdit />} />
          <Route path="/joinAgree" element={<JoinAgreePage />} />
          <Route path="/joinRegister" element={<JoinRegisterPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/selectionAdd" element={<SelectionAdd />} />
          <Route path="/myGuide" element={<MyGuidePage />} />
          <Route path="/selectionDestination" element={<SelectionDestination />} />
          <Route path="/selectionRestaurant" element={<SelectionRestaurant />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  )
}

export default App
