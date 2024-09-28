import React from "react"
import '../../index.css'

import img9 from '../../img10.png'
import img10 from '../../img11.png'


const Section5 = () => {
	return (
			<div className="container">
	<section>
<div className="Our-text">
<h2>Our patients feedback about us</h2>
<p>their impression after using this application</p>
</div>
<div className="hospital">
<div className="Our-img">
<img src={img9} alt="" /> 
</div>
<div className="Our-img2">
<img src={img10} alt="" /> 
</div>
</div>
<div className="hospital-text">
<h2>“Healthycarely is an website and mobile app
for you to feel better or get medical help.
We offer you a 24/7 doctor service with no
appointment needed”</h2>
<h3>Naufal Hidayat</h3>
<p>Student at Telkom University</p>
</div>
</section>
	</div>
	)
}
export default Section5


















