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
			<div className="Dashboard-Page py-5  mt-4 position-relative">
				<div className="container">
					{this.state.notChoosed ? (
						// Display choice buttons when no choice has been made
						<div className="choices">
							<div className="row row-gap-4">
								<div className="col-12 col-md-6">
									<button
										className="btn btn-outline-primary w-100 h-100 fs-4"
										onClick={() => this.handleChoices("course")}
									>
										Add a new Course
									</button>
								</div>
								<div className="col-12 col-md-6">
									<button
										className="btn btn-outline-primary w-100 h-100 fs-4"
										onClick={() => this.handleChoices("instructor")}
									>
										Add a new Instructor
									</button>
								</div>
							</div>
						</div>
					) : (
						// Display the appropriate form based on user choice
						<main className="form">
							{this.state.choiceType === "course" ? (
								<CourseForm transferData={this.props.transferData} />
							) : (
								<InstructorForm transferData={this.props.transferData} />
							)}
						</main>
					)}
				</div>
			</div>
		);
	}
}

export default Dashboard;
