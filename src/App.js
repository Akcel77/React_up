import React from 'react';
import { styled  } from 'styled-components';

import Header from './components/Header';
import About from './components/About';
import CompanyHighlight from './components/CompanyHighlight';
// import Experience from './components/Experience';
// import Skills from './components/Skills';
// import Education from './components/Education';
// import Contact from './components/Contact';


const StyledVerticalBar = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 100;
`;


function App() {
  return (
    
    <div className="App">
      <StyledVerticalBar />
      <Header />
      <CompanyHighlight/>
      <About/>
           {/* <Experience />
      <Skills />
      <Education />
      <Contact /> */}
    </div>
  );
}

export default App;