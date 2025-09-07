import React from "react";
import CourseForm from "../components/CourseForm";
import InstructorForm from "../components/InstructorForm";

class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			notChoosed: true, // Track if a choice (course or instructor) has been made
			choiceType: null, // Store the type of choice (course or instructor)
		};
	}

	// Handle user's choice between course and instructor
	handleChoices = (type) => {
		switch (type) {
			case "course":
				this.setState({ choiceType: "course", notChoosed: false });
				break;
			case "instructor":
				this.setState({ choiceType: "instructor", notChoosed: false });
				break;
			default:
				break;
		}
	};

	// Display a success message after adding an instructor
	showAddedMsg = () => {
		return (
			<span className="bg-success text-white p-2 rounded d-block mt-3">
				Instructor is added successfully
			</span>
		);
	};

	render() {
		return (
			<div className="Dashboard-Page fade-in">
				<div className="container">
					{this.state.notChoosed ? (
						<div>
							{/* Welcome Section */}
							<div className="welcome-section text-center mb-5">
								<h1 className="welcome-title mb-3">
									Welcome to EduManage
								</h1>
								<p className="welcome-subtitle text-muted mb-4">
									Your comprehensive learning platform for
									managing instructors and courses
								</p>
								<div className="welcome-stats d-flex justify-content-center gap-4 flex-wrap">
									<div className="stat-item">
										<div className="stat-number text-primary">
											{
												JSON.parse(
													localStorage.getItem(
														"instructorData"
													) || "[]"
												).length
											}
										</div>
										<div className="stat-label">
											Instructors
										</div>
									</div>
									<div className="stat-item">
										<div className="stat-number text-success">
											{
												JSON.parse(
													localStorage.getItem(
														"courseData"
													) || "[]"
												).length
											}
										</div>
										<div className="stat-label">
											Courses
										</div>
									</div>
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
										</div>
										<div className="stat-label">Online</div>
									</div>
								</div>
							</div>

							{/* Action Cards */}
							<div className="choices">
								<div className="row">
									<div className="col-12 col-md-6">
										<div
											className="choice-card"
											onClick={() =>
												this.handleChoices("course")
											}
										>
											<div className="choice-icon">
												<svg
													width="48"
													height="48"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
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
											</div>
											<h3 className="choice-title">
												Add New Course
											</h3>
											<p className="choice-description">
												Create and manage educational
												courses with topics, duration,
												and track information.
											</p>
											<div className="choice-action">
												<button className="btn btn-primary btn-sm p-3">
													<svg
														width="16"
														height="16"
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
												</button>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div
											className="choice-card"
											onClick={() =>
												this.handleChoices("instructor")
											}
										>
											<div className="choice-icon">
												<svg
													width="48"
													height="48"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
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
											</div>
											<h3 className="choice-title">
												Add New Instructor
											</h3>
											<p className="choice-description">
												Register instructors with their
												expertise, contact information,
												and course assignments.
											</p>
											<div className="choice-action">
												<button className="btn btn-primary btn-sm p-3">
													<svg
														width="16"
														height="16"
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
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : (
						<main className="form">
							<div className="form-header mb-4">
								<button
									className="btn btn-outline-secondary mb-3"
									onClick={() =>
										this.setState({
											notChoosed: true,
											choiceType: null,
										})
									}
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="me-2"
									>
										<path
											d="M19 12H5M12 19L5 12L12 5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Back to Dashboard
								</button>
							</div>
							{this.state.choiceType === "course" ? (
								<CourseForm
									transferData={this.props.transferData}
								/>
							) : (
								<InstructorForm
									transferData={this.props.transferData}
								/>
							)}
						</main>
					)}
				</div>
			</div>
		);
	}
}

export default Dashboard;
