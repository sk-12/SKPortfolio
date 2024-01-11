import React from 'react';
import Welcome from './sections/welcome/Welcome';
import './App.css';
import ContactMe from './sections/contactMe/ContactMe';
import AboutMe from './sections/aboutMe/AboutMe';
import MyProjects from './sections/myProject/MyProjects';

function App() {
  return (
    <div className="App">
       <Welcome/>
       <AboutMe/>
       <MyProjects/>
       <ContactMe/>
    </div>
  );
}

export default App;
