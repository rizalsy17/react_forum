import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Layouts/Footer';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/LoginForm';
import ThreadList from './components/Threads/ThreadList';
import ThreadDetail from './components/Threads/ThreadDetail';
import CreateThreadForm from './components/Threads/CreateThreadForm';
import LeaderboardList from './components/Leaderboard/LeaderboardList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<ThreadList />} />
          <Route path="/threads/:threadId" element={<ThreadDetail />} />
          <Route path="/create-thread" element={<CreateThreadForm />} />
          <Route path="/leaderboard" element={<LeaderboardList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
