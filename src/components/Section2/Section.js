import React from "react"
import '../../index.css'
import img5 from '../../img6.png'
import img6 from '../../img7.png'
import img7 from '../../img8.png'

const Section2 = () => {
	return (
		<div className="container">
<section className="find-doctor">
  <div className="find-doctor-content">
    <h2>Find Doctor</h2>
    <h3>Find the right doctor according to your complaint</h3>
    <p>
      HealthCarely is a free, health app that goes beyond matching you with doctors.
      It actively helps you find the right doctor based on your medical and personal needs and connects you with your HealthCarely community for ongoing support throughout your journey to healthier living.
    </p>
    <ul>
      <li>100% free app designed to help you find the right doctor for you.</li>
      <li>Available 300 doctors specialist.</li>
    </ul>
    <button className="see-doctors-button">See the Doctors</button>
  </div>
  <div className="doctor-image">
  <div className="doctor1-image">
  <img src={img5} alt="" /> 
</div>
    <div className="doctor-card">
      <h4>Available Doctors</h4>
      <p>Selected Doctors</p>
      <ul>
        <li>
        <img src={img6} alt="" /> 
          <div className="doctor-info">
            <h5>Dr. Adinda</h5>
            <p>Eye Specialist</p>
          </div>
        </li>
        <li>
        <img src={img7} alt="" /> 
          <div className="doctor-info">
            <h5>Dr. Jackson</h5>
            <p>Ear Specialist</p>
          </div>
        </li>
      </ul>
      <button className="find-doctor-button">Find Doctor</button>
    </div>
  </div>
</section>
	</div>
	)
}
export default Section2












