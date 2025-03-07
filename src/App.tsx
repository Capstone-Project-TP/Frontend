import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginSingup/loginPage'
import SignupPage from './pages/LoginSingup/signupPage'
import MainPage from './pages/mainPage'
import SelectionPage from './pages/Selection/selectRestaurant'
import QuestionPage from './pages/Question/questionPage'
import MyPage from './pages/Mypage/profileCorrection'
import ScheduleMap from './pages/Schedule/scheduleMap'
import ScheduleEdit from './pages/Schedule/schduleEdit'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/scheduleMap" element={<ScheduleMap />} />
        <Route path="/scheduleEdit" element={<ScheduleEdit />} />
      </Routes>
    </>
  )
}

export default App
