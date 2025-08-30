import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/portfolio/portfolio'; 
import Home from './pages/home/home';
const NotFound = () => <div style={{ color: 'white', padding: '2rem' }}>404 - Page Not Found</div>;

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div style={{ color: 'white', padding: '2rem' }}>Loading...</div>}>
  {/* Global toast container so messages are visible anywhere */}
  <ToastContainer position="top-center" newestOnTop closeOnClick draggable pauseOnHover autoClose={3000} theme="dark" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;