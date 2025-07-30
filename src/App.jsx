import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/portfolio/Portfolio';  // note the leading './' and capital P

const Home = () => <Portfolio />;
const NotFound = () => <div style={{ color: 'white', padding: '2rem' }}>404 - Page Not Found</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;