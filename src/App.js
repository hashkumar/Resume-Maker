import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Resumeage from './components/Resumepage';
import Footer from './components/Footer';


const App = () => {
  return (
      <>
       <Navbar />
       <Resume />  
       <Resumeage />
       <Footer />
      </>
  )
}

export default App