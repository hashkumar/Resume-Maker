import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Resumeage from './components/Resumepage';
// import WorkingResume from './components/WorkingResume';


const App = () => {
  return (
      <>
       <Navbar />
       <Resume />  
       <Resumeage />
       {/* <WorkingResume /> */}
      </>
  )
}

export default App