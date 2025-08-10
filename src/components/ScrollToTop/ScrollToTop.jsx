import React from 'react';
import { ChevronUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop = ({ showScrollTop, scrollToTop }) => {
  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top fixed bottom-8 right-8 z-50 p-3 bg-green-400 hover:bg-green-300 text-black rounded-full border-2 border-green-400 hover:border-green-300 transition-all duration-500 transform hover:scale-110 animate-bounce-slow shadow-lg shadow-green-400/20"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} className="animate-pulse" />
    </button>
  );
};

export default ScrollToTop;
