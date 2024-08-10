import React, { useState, useEffect } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Section1 />
      <Section2 />
    </div>
  );
};

export default App;