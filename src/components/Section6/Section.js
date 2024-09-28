import React from "react"
import '../../index.css'

import img11 from '../../img12.png'
import img12 from '../../img13.png'
import img13 from '../../img14.png'

const Section7 = () => {
	return (
			<div className="container">
	<section className="app-footer">
      <div className="app-footer-section">
        <h3>
          Healthy<span style={{ color: '#007bff' }}>Carely</span>
        </h3>
        <p>
          This free App provides a solution for your health  by offering you one-step  to complete  about various medical checkups.
        </p>
      </div>

      <div className="app-footer-section">
        <h3>Overview</h3>
        <ul>
          <li><a href="#">Checking Health</a></li>
          <li><a href="#">Find Doctor</a></li>
          <li><a href="#">Make a Schedule</a></li>
        </ul>
      </div>

      <div className="app-footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </div>

      <div className="app-footer-section">
        <h3>Explore</h3>
        <ul>
          <li><a href="#">Terms & Conds</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>

      <div className="app-footer-section">
        <h3>Social Media</h3>
        <div className="app-social-icons">
        <img src={img11} alt="" /> 
        <img src={img12} alt="" /> 
        <img src={img13} alt="" /> 
         
        </div>
      </div>
    </section>
	</div>
	)
}
export default Section7




































