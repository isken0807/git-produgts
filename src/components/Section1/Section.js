import React from "react"
import '../../index.css'


import img1 from '../../Search.png'
import img2 from '../../img3.png'
import img3 from '../../img4.png'
import img4 from '../../img5.png'
const Section1 = () => {
	return (
			<div className="container">
		<section className="solutions">
<h2>Fast Solutions</h2>
<p>Step by step to get your solutions</p>
<div className="solution-steps">
		<div className="step">
		<div className="main2-image">
		<img src={img1} alt="" /> 
</div>
				<h3>Check health complaints</h3>
				<p>
						Check the disease so you can choose the right specialist.
				</p>
		</div>
		<div className="step">
		<div className="main1-image">
		<img src={img2} alt="" /> 
</div>
<div className="step2-text">
				<h3>Choose doctor Specialist</h3>
				<p>
						Choose a specialist according to your disease complaints.
				</p>
				</div>
		</div>
		<div className="step">
		<div className="main1-image">
		<img src={img3} alt="" /> 
</div>
<div className="step1-text">
				<h3>Make a Schedule</h3>
				<p>
						Make a schedule with the doctor concerned so you can start the consultation.
				</p>
				</div>
		</div>
		<div className="step">
		<div className="main1-image">
		<img src={img4} alt="" /> 
</div>
<div className="step-text">
				<h3>Get your Solutions</h3>
				<p>
						After consultation, the doctor will help you start the right healing methods.
				</p>
			</div>
		</div>
</div>
</section>
	</div>
	)
}
export default Section1


