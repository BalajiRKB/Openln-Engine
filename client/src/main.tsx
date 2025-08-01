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
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './index.css';

const RootRedirect: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Landing />;
};

const Root: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Onboarding routes */}
      <Route path="/onboarding/goal" element={<ProtectedRoute onboarding={true}><OnboardingGoal /></ProtectedRoute>} />
      <Route path="/onboarding/time-commitment" element={<ProtectedRoute onboarding={true}><OnboardingTimeCommitment /></ProtectedRoute>} />
      <Route path="/onboarding/learning-style" element={<ProtectedRoute onboarding={true}><OnboardingLearningStyle /></ProtectedRoute>} />
      <Route path="/onboarding/quiz" element={<ProtectedRoute onboarding={true}><OnboardingQuiz /></ProtectedRoute>} />
      
      {/* Main app routes */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/task/:id" element={<ProtectedRoute><TaskDetail /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
