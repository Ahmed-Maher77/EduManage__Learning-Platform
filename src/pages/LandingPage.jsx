import React from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
	render() {
		return (
			<div className="landing-page">
				{/* Hero Section */}
				<section className="hero-section">
					{/* Floating Elements */}
					<div className="floating-element"></div>
					<div className="floating-element"></div>
					<div className="floating-element"></div>

					<div className="container">
						<div className="row align-items-center min-vh-100">
							<div className="col-lg-6">
								<div className="hero-content py-3 pt-4">
									<h1 className="hero-title">
										Manage Learning with{" "}
										<span className="text-primary">
											EduManage
										</span>
									</h1>
									<p className="hero-subtitle">
										Simple platform for instructors and
										courses. Streamline your educational
										management.
									</p>
									<div className="hero-actions d-flex gap-3 flex-wrap">
										<Link
											to="/dashboard"
											className="btn btn-primary btn-lg me-3 rounded"
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="me-2"
											>
												<path
													d="M12 5V19M5 12H19"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											Get Started
										</Link>
										<Link
											to="/instructors"
											className="btn btn-outline-primary btn-lg"
										>
											<svg
												width="20"
												height="20"
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
											View Instructors
										</Link>
									</div>
									<div className="hero-stats mt-5">
										<div className="row text-center">
											<div className="col-4">
												<div className="stat-item">
													<div className="stat-number text-primary">
														{
															JSON.parse(
																localStorage.getItem(
																	"instructorData"
																) || "[]"
															).length
														}
														+
													</div>
													<div className="stat-label">
														Instructors
													</div>
												</div>
											</div>
											<div className="col-4">
												<div className="stat-item">
													<div className="stat-number text-success">
														{
															JSON.parse(
																localStorage.getItem(
																	"courseData"
																) || "[]"
															).length
														}
														+
													</div>
													<div className="stat-label">
														Courses
													</div>
												</div>
											</div>
											<div className="col-4">
												<div className="stat-item">
													<div className="stat-number text-warning">
														{
															JSON.parse(
																localStorage.getItem(
																	"courseData"
																) || "[]"
															).filter(
																(course) =>
																	course.coursType ===
																	"online"
															).length
														}
														+
													</div>
													<div className="stat-label">
														Online
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="hero-image">
									<div className="hero-card">
										<div className="card-header">
											<div className="card-dots">
												<span className="dot red"></span>
												<span className="dot yellow"></span>
												<span className="dot green"></span>
											</div>
										</div>
										<div className="card-content">
											<div className="dashboard-preview">
												<div className="preview-navbar">
													<div className="preview-brand">
														EduManage
													</div>
													<div className="preview-nav-items">
														<span className="nav-item active">
															Dashboard
														</span>
														<span className="nav-item">
															Instructors
														</span>
														<span className="nav-item">
															Courses
														</span>
													</div>
												</div>
												<div className="preview-content">
													<div className="preview-cards">
														<div className="preview-card">
															<div className="preview-icon">
																<svg
																	width="24"
																	height="24"
																	viewBox="0 0 24 24"
																	fill="none"
																>
																	<path
																		d="M2 3H6C6.53043 3 7.03914 3.21071 7.41421 3.58579C7.78929 3.96086 8 4.46957 8 5V19C8 19.5304 7.78929 20.0391 7.41421 20.4142C7.03914 20.7893 6.53043 21 6 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V5C0 4.46957 0.210714 3.96086 0.585786 3.58579C0.960859 3.21071 1.46957 3 2 3Z"
																		stroke="currentColor"
																		strokeWidth="2"
																	/>
																	<path
																		d="M8 5H22C22.5304 5 23.0391 5.21071 23.4142 5.58579C23.7893 5.96086 24 6.46957 24 7V19C24 19.5304 23.7893 20.0391 23.4142 20.4142C23.0391 20.7893 22.5304 21 22 21H8"
																		stroke="currentColor"
																		strokeWidth="2"
																	/>
																</svg>
															</div>
															<div className="preview-text">
																<div className="preview-title">
																	Add Course
																</div>
																<div className="preview-desc">
																	Create new
																	courses
																</div>
															</div>
														</div>
														<div className="preview-card">
															<div className="preview-icon">
																<svg
																	width="24"
																	height="24"
																	viewBox="0 0 24 24"
																	fill="none"
																>
																	<path
																		d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
																		stroke="currentColor"
																		strokeWidth="2"
																	/>
																	<circle
																		cx="12"
																		cy="7"
																		r="4"
																		stroke="currentColor"
																		strokeWidth="2"
																	/>
																</svg>
															</div>
															<div className="preview-text">
																<div className="preview-title">
																	Add
																	Instructor
																</div>
																<div className="preview-desc">
																	Register
																	instructors
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="features-section py-5">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center mb-5">
								<h2 className="section-title">
									Why EduManage?
								</h2>
								<p className="section-subtitle">
									Essential features for educational
									management
								</p>
							</div>
						</div>
						<div className="row g-4">
							<div className="col-lg-4 col-md-6">
								<div className="feature-card">
									<div className="feature-icon">
										<svg
											width="30"
											height="30"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<circle
												cx="12"
												cy="7"
												r="4"
												stroke="currentColor"
												strokeWidth="2"
											/>
										</svg>
									</div>
									<h3 className="feature-title">
										Instructor Management
									</h3>
									<p className="feature-description">
										Manage instructor profiles, expertise,
										and contact info.
									</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-card">
									<div className="feature-icon">
										<svg
											width="30"
											height="30"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M2 3H6C6.53043 3 7.03914 3.21071 7.41421 3.58579C7.78929 3.96086 8 4.46957 8 5V19C8 19.5304 7.78929 20.0391 7.41421 20.4142C7.03914 20.7893 6.53043 21 6 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V5C0 4.46957 0.210714 3.96086 0.585786 3.58579C0.960859 3.21071 1.46957 3 2 3Z"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M8 5H22C22.5304 5 23.0391 5.21071 23.4142 5.58579C23.7893 5.96086 24 6.46957 24 7V19C24 19.5304 23.7893 20.0391 23.4142 20.4142C23.0391 20.7893 22.5304 21 22 21H8"
												stroke="currentColor"
												strokeWidth="2"
											/>
										</svg>
									</div>
									<h3 className="feature-title">
										Course Management
									</h3>
									<p className="feature-description">
										Create courses with topics, duration,
										and delivery methods.
									</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-card">
									<div className="feature-icon">
										<svg
											width="30"
											height="30"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M19 19C19 20.1046 18.1046 21 17 21C15.8954 21 15 20.1046 15 19C15 17.8954 15.8954 17 17 17C18.1046 17 19 17.8954 19 19Z"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M9 19H15"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M7 17V13C7 11.9391 7.42143 10.9217 8.17157 10.1716C8.92172 9.42143 9.93913 9 11 9H13C14.0609 9 15.0783 9.42143 15.8284 10.1716C16.5786 10.9217 17 11.9391 17 13V17"
												stroke="currentColor"
												strokeWidth="2"
											/>
										</svg>
									</div>
									<h3 className="feature-title">
										Data Persistence
									</h3>
									<p className="feature-description">
										Auto-save data. Never lose important
										information.
									</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-card">
									<div className="feature-icon">
										<svg
											width="30"
											height="30"
											viewBox="0 0 24 24"
											fill="none"
										>
											<rect
												x="3"
												y="3"
												width="18"
												height="18"
												rx="2"
												ry="2"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M9 9H15M9 15H15"
												stroke="currentColor"
												strokeWidth="2"
											/>
										</svg>
									</div>
									<h3 className="feature-title">
										Modern Interface
									</h3>
									<p className="feature-description">
										Clean, intuitive design for easy
										navigation.
									</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-card">
									<div className="feature-icon">
										<svg
											width="30"
											height="30"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M12 2L2 7L12 12L22 7L12 2Z"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M2 17L12 22L22 17"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M2 12L12 17L22 12"
												stroke="currentColor"
												strokeWidth="2"
											/>
										</svg>
									</div>
									<h3 className="feature-title">
										Responsive Design
									</h3>
									<p className="feature-description">
										Works perfectly on all devices and
										screen sizes.
									</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="feature-card">
									<div className="feature-icon">
										<svg
											width="30"
											height="30"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M9 12L11 14L15 10"
												stroke="currentColor"
												strokeWidth="2"
											/>
											<path
												d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
												stroke="currentColor"
												strokeWidth="2"
											/>
										</svg>
									</div>
									<h3 className="feature-title">
										Easy to Use
									</h3>
									<p className="feature-description">
										No technical skills needed. Get started
										instantly.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="cta-section py-5">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<div className="cta-content">
									<h2 className="cta-title">
										Ready to Get Started?
									</h2>
									<p className="cta-subtitle">
										Join educators using EduManage for
										learning management.
									</p>
									<div className="cta-actions">
										<Link
											to="/dashboard"
											className="btn btn-primary btn-lg me-3 rounded"
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="me-2"
											>
												<path
													d="M12 5V19M5 12H19"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											Get Started
										</Link>
										<Link
											to="/instructors"
											className="btn btn-outline-light btn-lg rounded"
										>
											<svg
												width="20"
												height="20"
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
											View Features
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default LandingPage;
