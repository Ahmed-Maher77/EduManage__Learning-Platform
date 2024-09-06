import React from "react";
import { CoursesClass } from "./CoursesClass";

class CourseForm extends React.Component {
	constructor() {
		super();
		this.state = {
			// Input values
			courseName: "",
			courseDuration: "",
			courseTopics: "",
			coursType: "",
			courseTrack: "",
			// Error states
			courseNameError: false,
			courseDurationError: false,
			coursTypeError: false,
			courseTopicsError: false,
			courseTrackError: false,
            // Form submission states
			addedSuccessfully: false,
			notValideForm: false,
		};
	}

	// Validate and update input fields
	checkInput = (stateName, value) => {
		switch (stateName) {
			case "courseName":
                this.setState({ courseName: value, courseNameError: !/^[a-zA-Z0-9\s,.'-]{5,100}$/.test(value) });
                break;
            case "courseDuration":
                this.setState({ courseDuration: value, courseDurationError: !/^[a-zA-Z0-9\s,.'-]{3,100}$/.test(value) });
                break;
            case "courseTopics":
                this.setState({ courseTopics: value, courseTopicsError: !/^([a-zA-Z0-9\s-]{1,500})(,\s*[a-zA-Z0-9\s-]{1,100})*$/.test(value) });
                break;
            case "coursType":
                this.setState({ coursType: value, coursTypeError: !/^(online|offline)$/i.test(value) });
                break;
            case "courseTrack":
                this.setState({ courseTrack: value, courseTrackError: !/^[a-zA-Z0-9\s-]{1,100}$/.test(value) });
                break;
            default:
                break;
		}
	};

	// Handle form submission
	handleForm = () => {
		const { courseName, courseDuration, courseTopics, coursType, courseTrack } =
			this.state;
		const isValidName = !this.state.courseNameError && courseName.trim() !== "";
		const isValidDuration =
			!this.state.courseDurationError && courseDuration.trim() !== "";
		const isValidTopics =
			!this.state.courseTopicsError && courseTopics.trim() !== "";
		const isValidType = !this.state.coursTypeError && coursType.trim() !== "";
		const isValidTrack =
			!this.state.courseTrackError && courseTrack.trim() !== "";

		if (
			isValidName &&
			isValidDuration &&
			isValidTopics &&
			isValidTrack &&
			isValidType
		) {
			const courseTopicsArray = courseTopics.split(",").map((topic) => topic.trim());
            const newCourse = new CoursesClass(
                courseName.trim(),
                courseDuration.trim(),
                coursType.trim(),
                courseTrack.trim(),
                courseTopicsArray
            );
            this.props.transferData("course", newCourse);
            this.setState({ notValideForm: false, addedSuccessfully: true });

			// Clear inputs
			this.setState({
				courseName: "",
				courseDuration: "",
				courseTrack: "",
				courseTopics: "",
				coursType: "",
			});
		} else {
			this.setState({ notValideForm: true });
		}
	};

	// Display success message after course is added
	showAddedMsg = () => {
		return (
			<span className="bg-success text-white p-2 rounded d-block mt-3">
				Course is added successfully
			</span>
		);
	};

	componentDidUpdate(prevProps, prevState) {
		// Hide success message after 2 seconds
		if (
			prevState.addedSuccessfully !== this.state.addedSuccessfully &&
			this.state.addedSuccessfully
		) {
			setTimeout(() => {
				this.setState({ addedSuccessfully: false });
			}, 2000); // Adjust the duration if needed
		}
	}

	render() {
		const {
			courseName,
			courseDuration,
			courseTopics,
			coursType,
			courseTrack,
			courseNameError,
			courseDurationError,
			coursTypeError,
			courseTopicsError,
			courseTrackError,
		} = this.state;

		return (
			<>
				<h2 className="text-center my-4">Add a new Course</h2>
				{/* Course Name Input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="courseName"
						placeholder="course name"
						value={courseName}
						onChange={(e) =>
							this.checkInput("courseName", e.target.value)
						}
					/>
					<label htmlFor="courseName">Enter Name</label>
					{courseNameError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">!</b>{" "}
							Invalid course name
						</span>
					)}
				</div>
				{/* Course Duration Input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="courseDuration"
						placeholder="course duration"
						value={courseDuration}
						onChange={(e) =>
							this.checkInput("courseDuration", e.target.value)
						}
					/>
					<label htmlFor="courseDuration">Enter Duration</label>
					{courseDurationError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">!</b>{" "}
							Invalid course duration
						</span>
					)}
				</div>
				{/* Course Topics Input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="courseTopics"
						placeholder="course topics"
						value={courseTopics}
						onChange={(e) =>
							this.checkInput("courseTopics", e.target.value)
						}
					/>
					<label htmlFor="courseTopics">Enter course topics</label>
					{courseTopicsError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">!</b>{" "}
							Invalid structure [floow this: topic1, topic2]
						</span>
					)}
				</div>
				{/* Course Type Input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="coursType"
						placeholder="cours type"
						value={coursType}
						onChange={(e) => this.checkInput("coursType", e.target.value)}
					/>
					<label htmlFor="coursType">
						Enter course type [online / offline]
					</label>
					{coursTypeError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">!</b>{" "}
							Invalid course type
						</span>
					)}
				</div>
				{/* Course Track Input */}
				<div className="mb-3 form-floating">
					<input
						type="text"
						className="form-control"
						id="courseTrack"
						placeholder="course track"
						value={courseTrack}
						onChange={(e) =>
							this.checkInput("courseTrack", e.target.value)
						}
					/>
					<label htmlFor="courseTrack">Enter course track</label>
					{courseTrackError && (
						<span className="text-danger ps-1">
							<b className="mt-2 bg-danger text-white d-inline-block">!</b>{" "}
							Invalid track
						</span>
					)}
				</div>
				{/* ADD button */}
				<button
					className="btn btn-outline-success d-block m-auto p-2 px-3 mt-5"
					onClick={() => this.handleForm()}
				>
					Add new Course
				</button>
				{this.state.addedSuccessfully && this.showAddedMsg()}
			</>
		);
	}
}

export default CourseForm;
