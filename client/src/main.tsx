import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OnboardingGoal from "./pages/OnboardingGoal";
import OnboardingTimeCommitment from './pages/OnboardingTimeCommitment';
import OnboardingLearningStyle from './pages/OnboardingLearningStyle';
import OnboardingQuiz from './pages/OnboardingQuiz';
import Dashboard from './pages/Dashboard';
import TaskDetail from './pages/TaskDetail';
import Profile from './pages/Profile';  
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

const RootRedirect: React.FC = () => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to="/dashboard" replace /> : <Landing />;
};

const ProtectedOnboarding: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

const Root: React.FC = () => {
  React.useEffect(() => {
    const tempToken = getCookie('tempAuthToken');
    if (tempToken) {
      localStorage.setItem('token', tempToken);
      document.cookie = 'tempAuthToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/onboarding/goal" element={<ProtectedOnboarding><OnboardingGoal /></ProtectedOnboarding>} />
      <Route path="/onboarding/time-commitment" element={<ProtectedOnboarding><OnboardingTimeCommitment /></ProtectedOnboarding>} />
      <Route path="/onboarding/learning-style" element={<ProtectedOnboarding><OnboardingLearningStyle /></ProtectedOnboarding>} />
      <Route path="/onboarding/quiz" element={<ProtectedOnboarding><OnboardingQuiz /></ProtectedOnboarding>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/task/:id" element={<ProtectedRoute><TaskDetail /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
