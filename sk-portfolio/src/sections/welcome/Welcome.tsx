import React from "react";
import "./Welcome.css";
import Navbar from "../../components/navbar/Navbar";

const Welcome = () => {
  return <div className="Welcome">
     <Navbar/>
     <p className='WelcomeText'>
      Hi 
     </p>
     <p className='WelcomeText'>
     I am Soumya
     </p>

    </div>;
};

export default Welcome;
