import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ConfirmSignUp from './pages/auth/ConfirmSignUp';
import MySchedules from './pages/passenger/MySchedules';
import AllSchedules from './pages/shared/AllSchedules';
import ScheduleForm from './pages/passenger/ScheduleForm';

const AppRoutes: React.FC = () => {
  const { authStatus, user } = useAuthenticator();
  const isAuthenticated = authStatus === 'authenticated';
  const userType = user?.attributes?.['custom:userType'] || 'passenger';

  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        {/* 공개 라우트 */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
        <Route path="/confirm-signup" element={!isAuthenticated ? <ConfirmSignUp /> : <Navigate to="/" />} />
        
        {/* 보호된 라우트 */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to={userType === 'PASSENGER' ? '/my-schedules' : '/all-schedules'} /> : <Navigate to="/login" />} 
        />
        
        {/* 승객 전용 라우트 */}
        <Route 
          path="/my-schedules" 
          element={isAuthenticated && userType === 'PASSENGER' ? <MySchedules /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/create-schedule" 
          element={isAuthenticated && userType === 'PASSENGER' ? <ScheduleForm /> : <Navigate to="/login" />} 
        />
        
        {/* 공유 라우트 (승객과 운전자 모두 접근 가능) */}
        <Route 
          path="/all-schedules" 
          element={isAuthenticated ? <AllSchedules /> : <Navigate to="/login" />} 
        />
        
        {/* 404 페이지 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Authenticator.Provider>
      <Router>
        <AppRoutes />
      </Router>
    </Authenticator.Provider>
  );
};

export default App;
