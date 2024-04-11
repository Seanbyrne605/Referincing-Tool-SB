import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import logo from './assets/Logo.png';  // Replace 'logo.png' with the path to your image file
function useAutoResize(ref) {
  useEffect(() => {
    const adjustHeight = () => {
      const reff = reff;
      if (reff) {
        reff.style.height = 'inherit'; // Reset height to recalibrate
        reff.style.height = `${reff.scrollHeight}px`; // Set height to scroll height
      }
    };
    if (reff) {
      adjustHeight();
      reff.addEventListener('input', adjustHeight);
    }
    return () => {
      if (reff) {
        reff.removeEventListener('input', adjustHeight);
      }
    };
  }, [ref]); // Runs only once on mount and unmount unless ref changes
}

function App() {
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: 'transparent',
    transition: 'background-color 1s'
  });

  const inputRef = useRef(null);
  const outputRef = useRef(null);
  useAutoResize(inputRef);
  useAutoResize(outputRef);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      if (isTop) {
        setNavbarStyle({
          backgroundColor: 'transparent',
          transition: 'background-color 1s'
        });
      } else {
        setNavbarStyle({
          backgroundColor: '#967bb6',
          transition: 'background-color 1s'
        });
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSortReferences = () => {
    // Get the input value and split it into an array of references
    const inputReferences = inputreff.value.split('\n');

    // Sort the references alphabetically
    const sortedReferences = inputReferences.sort();

    // Join the sorted references back into a single string with line breaks
    const sortedReferencesString = sortedReferences.join('\n');

    // Update the output textarea with the sorted references
    outputreff.value = sortedReferencesString;
  };

  return (
    <div className="App">
      <nav style={{ ...navbarStyle, position: 'fixed', top: 0, width: '100%', padding: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
        <img src={logo} alt="Logo" style={{ height: '50px' }} />
      </nav>
      <div className="io-box">
        <div className="input-box">
          <h3>Please enter your references here<br />(Enter each reference on a new line)</h3>
          <textarea ref={inputRef} placeholder="Enter references here..."></textarea>
          <button id="sub" onClick={handleSortReferences}>Submit</button>
        </div>
        <div className="output-box">
          <h3>Sorted output</h3>
          <textarea ref={outputRef} placeholder="Sorted references will appear here..." readOnly></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
