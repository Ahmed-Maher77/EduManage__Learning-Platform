import React from "react";
import { NavLink } from "react-router-dom";


class Navbar extends React.Component {
	render() {
		return (
			<nav className="main-navbar navbar navbar-expand-lg px-2 bg-secondary-subtle">
				<div className="container-fluid">
					{/* Logo or brand name */}
					<span className="fs-5">
						ITI-Final-Task
                    </span>
					{/* Toggler for mobile view */}
					<button
						className="navbar-toggler position-relative"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					{/* Collapsible navigation links */}
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							{/* Navigation link for Instructors page */}
							<li className="nav-item">
                            <NavLink className="nav-link fs-5 px-3" aria-current="page" to="/"> 
									Instructors
                            </NavLink>
							</li>
							{/* Navigation link for Courses page */}
							<li className="nav-item">
                            <NavLink className="nav-link fs-5 px-3" aria-current="page" to="/courses"> 
									Courses
                            </NavLink>
							</li>
							{/* Navigation link for Dashboard page */}
							<li className="nav-item">
                            <NavLink className="nav-link fs-5 px-3" aria-current="page" to="/dashboard"> 
									Dashboard
                            </NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
