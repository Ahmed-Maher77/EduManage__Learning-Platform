import React from "react";
import { InstructorClass } from "./InstructorClass";

class InstructorForm extends React.Component {
	constructor() {
		super();
		this.state = {
			// input values
			userName: "",
			userEmail: "",
			userAddress: "",
			userTrack: "",
			userCourseList: "",
			// Error states
			nameError: false,
			emailError: false,
			addressError: false,
			trackError: false,
			courseError: false,
			// Form submission states
			addedSuccessfully: false,
			notValideForm: false,
		};
	}

	// Validates the input values based on the field name
	checkInput = (stateName, value) => {
		switch (stateName) {
			case "userName":
				this.setState({ userName: value });
				// Ensure name doesn't start with a number and allows spaces
				if (
					/^(?![0-9])[a-zA-Z0-9 ]+[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(
						value
					)
				) {
					this.setState({ nameError: false });
				} else {
					this.setState({ nameError: true });
				}
				break;
			case "userEmail":
				this.setState({ userEmail: value });
				// Basic email validation
				if (
					/^\s*[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\s*$/.test(
						value
					)
				) {
					this.setState({ emailError: false });
				} else {
					this.setState({ emailError: true });
				}
				break;
			case "userAddress":
				this.setState({ userAddress: value });
				// Address validation allowing letters, numbers, and some special characters
				if (/^[a-zA-Z0-9\s,.'-]{5,100}$/.test(value)) {
					this.setState({ addressError: false });
				} else {
					this.setState({ addressError: true });
				}
				break;
			case "userTrack":
				this.setState({ userTrack: value });
				// Validates that track is alphanumeric and starts with a letter
				if (/^[a-zA-Z][a-zA-Z0-9 ]*$/.test(value)) {
					this.setState({ trackError: false });
				} else {
					this.setState({ trackError: true });
				}
				break;
			case "userCourseList":
				this.setState({ userCourseList: value });
				// Validates comma-separated course names
				if (
					/^([a-zA-Z0-9\s-]{1,500})(,\s*[a-zA-Z0-9\s-]{1,50})*$/.test(
						value
					)
				) {
					this.setState({ courseError: false });
				} else {
					this.setState({ courseError: true });
				}
				break;
			default:
				break;
		}
	};

	// Handles form submission
	handleForm = (choiceType) => {
		const { userName, userEmail, userAddress, userTrack, userCourseList } =
			this.state;

		// Input validation before form submission
		const isValidName = !this.state.nameError && userName.trim() !== "";
		const isValidEmail = !this.state.emailError && userEmail.trim() !== "";
		const isValidAddress =
			!this.state.addressError && userAddress.trim() !== "";
		const isValidTrack = !this.state.trackError && userTrack.trim() !== "";
		const isValidCourse =
			!this.state.courseError && userCourseList.trim() !== "";

		if (
			isValidName &&
			isValidEmail &&
			isValidAddress &&
			isValidTrack &&
			isValidCourse
		) {
			const courseList = userCourseList
				.split(",")
				.map((course) => course.trim());
			let newInstructor = new InstructorClass(
				userName.trim(),
				userEmail.trim(),
				userAddress.trim(),
				userTrack.trim(),
				courseList
			);
			this.props.transferData("instructor", newInstructor);
			this.setState({ notValideForm: false });
			this.setState({ notValideForm: false, addedSuccessfully: true });

			// Clear inputs after submission
			this.setState({
				userName: "",
				userEmail: "",
				userAddress: "",
				userTrack: "",
				userCourseList: "",
			});
		} else {
			this.setState({ notValideForm: true });
		}
	};

	// Shows a success message when an instructor is added
	showAddedMsg = () => {
		return (
			<span className="bg-success text-white p-2 rounded d-block mt-3">
				Instructor is added successfully
			</span>
		);
	};

	// Auto-hides success message after 2 seconds
	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.addedSuccessfully !== this.state.addedSuccessfully &&
			this.state.addedSuccessfully
		) {
			setTimeout(() => {
				this.setState({ addedSuccessfully: false });
			}, 2000);
		}
	}

	render() {
		const {
			userName,
			userEmail,
			userAddress,
			userTrack,
			userCourseList,
			nameError,
			emailError,
			addressError,
			trackError,
			courseError,
		} = this.state;

		return (
			<>
				<h2 className="text-center my-4">Add a new Instructor</h2>
				{/* Name input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="name"
						value={userName}
						onChange={(e) =>
							this.checkInput("userName", e.target.value)
						}
					/>
					<label htmlFor="name">Enter Name</label>
					{nameError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">
								!
							</b>{" "}
							Invalid username
						</span>
					)}
				</div>
				{/* Email input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="email"
						placeholder="name@example.com"
						value={userEmail}
						onChange={(e) =>
							this.checkInput("userEmail", e.target.value)
						}
					/>
					<label htmlFor="email">Enter Email</label>
					{emailError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">
								!
							</b>{" "}
							Invalid email
						</span>
					)}
				</div>
				{/* Address input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="address"
						placeholder="address"
						value={userAddress}
						onChange={(e) =>
							this.checkInput("userAddress", e.target.value)
						}
					/>
					<label htmlFor="address">Enter Physical Address</label>
					{addressError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">
								!
							</b>{" "}
							Invalid address
						</span>
					)}
				</div>
				{/* Track input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="track"
						placeholder="track"
						value={userTrack}
						onChange={(e) =>
							this.checkInput("userTrack", e.target.value)
						}
					/>
					<label htmlFor="track">Enter Track</label>
					{trackError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">
								!
							</b>{" "}
							Invalid track name
						</span>
					)}
				</div>
				{/* Course list input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="courseList"
						placeholder="courseList"
						value={userCourseList}
						onChange={(e) =>
							this.checkInput("userCourseList", e.target.value)
						}
					/>
					<label htmlFor="courseList">
						Enter Course List [ex: html, css, ..]
					</label>
					{courseError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">
								!
							</b>{" "}
							Invalid list structure
						</span>
					)}
				</div>
				{/* Error message if form is invalid */}
				{this.props.notValideForm && (
					<span className="bg-danger text-white d-block p-1 px-2 rounded">
						Ensure to fill all inputs with a valid data
					</span>
				)}
				{/* Submit button */}
				<button
					className="btn btn-outline-success d-block m-auto p-2 px-3 mt-5"
					onClick={() => this.handleForm()}
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
							d="M12 5V19M5 12H19"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					Add New Instructor
				</button>
				{/* Success message */}
				{this.state.addedSuccessfully && this.showAddedMsg()}
			</>
		);
	}
}

export default InstructorForm;
