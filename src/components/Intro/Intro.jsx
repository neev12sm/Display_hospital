import React, { useContext } from "react";
import "./Intro.css";

import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="about">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Welcome to MediCare+Clinic</span>
          <span>Best Specialists</span>
          <span>
          We are on the leading edge of cancer care.Providing the full 
          </span>
          <span>continuum of cancer treatments and supportive care services in a </span>
          <span>single convenient location.</span>
  
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Make an Appointment</button>
          <span className="i-departments-link">Departments</span>

       </Link>
      

      </div>
       {/* Right side empty card */}
       <div className="i-right-card"></div>

    
    </div>
  );
};

export default Intro;



