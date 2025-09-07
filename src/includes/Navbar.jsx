import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
			<nav className="main-navbar navbar navbar-expand-lg px-3">
				<div className="container-fluid">
					{/* Logo or brand name */}
					<NavLink
						className="navbar-brand d-flex align-items-center"
						to="/"
					>
						<div className="brand-icon me-2">
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 2L2 7L12 12L22 7L12 2Z"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2 17L12 22L22 17"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2 12L12 17L22 12"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<span className="brand-text">
							<span className="brand-name">EduManage</span>
						</span>
					</NavLink>

					{/* Toggler for mobile view */}
					<button
						className="navbar-toggler"
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
					<div
						className="collapse navbar-collapse"
						id="navbarTogglerDemo02"
					>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
							{/* Navigation link for Home page */}
							<li className="nav-item">
								<NavLink
									className="nav-link d-flex align-items-center"
									to="/"
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="me-2"
									>
										<path
											d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M9 22V12H15V22"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Home
								</NavLink>
							</li>
							{/* Navigation link for Instructors page */}
							<li className="nav-item">
								<NavLink
									className="nav-link d-flex align-items-center"
									to="/instructors"
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="me-2"
									>
										<path
											d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<circle
											cx="12"
											cy="7"
											r="4"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Instructors
								</NavLink>
							</li>
							{/* Navigation link for Courses page */}
							<li className="nav-item">
								<NavLink
									className="nav-link d-flex align-items-center"
									to="/courses"
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="me-2"
									>
										<path
											d="M2 3H6C6.53043 3 7.03914 3.21071 7.41421 3.58579C7.78929 3.96086 8 4.46957 8 5V19C8 19.5304 7.78929 20.0391 7.41421 20.4142C7.03914 20.7893 6.53043 21 6 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V5C0 4.46957 0.210714 3.96086 0.585786 3.58579C0.960859 3.21071 1.46957 3 2 3Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8 5H22C22.5304 5 23.0391 5.21071 23.4142 5.58579C23.7893 5.96086 24 6.46957 24 7V19C24 19.5304 23.7893 20.0391 23.4142 20.4142C23.0391 20.7893 22.5304 21 22 21H8"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Courses
								</NavLink>
							</li>
							{/* Navigation link for Dashboard page */}
							<li className="nav-item">
								<NavLink
									className="nav-link d-flex align-items-center"
									to="/dashboard"
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="me-2"
									>
										<rect
											x="3"
											y="3"
											width="7"
											height="7"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<rect
											x="14"
											y="3"
											width="7"
											height="7"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<rect
											x="14"
											y="14"
											width="7"
											height="7"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<rect
											x="3"
											y="14"
											width="7"
											height="7"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
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
