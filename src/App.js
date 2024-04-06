import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/LoginForm';
import ThreadList from './components/Threads/ThreadList';
import ThreadDetail from './components/Threads/ThreadDetail';
import CreateThreadForm from './components/Threads/CreateThreadForm';
import CreateCommentForm from './components/Comments/CreateCommentForm';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/threads" element={<ThreadList />} />
          <Route path="/threads/:id" element={<ThreadDetail />} />
          <Route path="/create-thread" element={<CreateThreadForm />} />
          <Route path="/create-comment/:id" element={<CreateCommentForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
