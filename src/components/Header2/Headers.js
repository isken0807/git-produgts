import '../../index.css'
import img from '../../female doctor_fococlipping_removed 1.png'
import React from 'react'
const Headers = () => {
	return (
			<div className="container">
		<main className="main">
		<div className="main-content">
				<h1>Medical Care Now Simplified For Everyone</h1>
				<p>
						Health carely is a new way to get health insurance quotes. We offer
						tools similar to those provided by insurance companies for free and prices
						are based on donations and not restricted health plan networks.
				</p>
				<button className="contact-button">Contact Us</button>
		</div>
		<div className="main-image">
				<img src={img} alt="" /> 
		</div>
</main>
	</div>
	)
}
export default Headers







