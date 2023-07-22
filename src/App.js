import React from 'react';
import { styled  } from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import CompanyHighlight from './components/CompanyHighlight';
import Experiences from './components/Experience';
import Projet from './components/Project';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x:hidden;
    }
`;




const StyledVerticalBar = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.05);
  z-index: 1;
`;


function App() {
  return (
    
    <div className="App">
      <GlobalStyle/>
      <StyledVerticalBar />
      <Header />
      <CompanyHighlight/>
      <About/>
      <Experiences/>
      <Projet/>
      <Footer/>

    </div>
  );
}

export default App;