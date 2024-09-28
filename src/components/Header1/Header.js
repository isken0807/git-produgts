
import '../../index.css'
import React from 'react'
const Header = () => {
	return (
		<>
		<div className="container">
<header className="header">
		<div className="logo">
				<h1>HealthyCarely</h1>
		</div>
		<nav className="nav">
				<a href="#home">Home</a>
				<a href="#doctor">Doctor</a>
				<a href="#services">Services</a>
				<a href="#review">Review</a>
		</nav>
		<div className="auth-buttons">
				<button className="signin">Sign In</button>
				<button className="signup">Sign Up</button>
		</div>
		</header>
	</div>
		</>
	)
}
export default Header










