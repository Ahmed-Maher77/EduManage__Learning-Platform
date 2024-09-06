import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppInstructors from "./pages/AppInstructors";
import Navbar from "./includes/Navbar";
import Dashboard from "./pages/Dashboard";
import { InstructorClass } from "./components/InstructorClass";
import { CoursesClass } from "./components/CoursesClass";
import AppCourse from "./pages/AppCourse";
import EditItem from "./pages/EditItem";
import Footer from "./includes/Footer";

class AppRouter extends React.Component {
	constructor() {
		super();
		this.state = {
			// Load instructor and course data from localStorage or initialize with default data
			InstructorsData: JSON.parse(localStorage.getItem("instructorData")) || [
				new InstructorClass(
					"Ahmed Maher",
					"ahmedmaher@gmail.com",
					"123 Shirbeen, Egypt",
					"Frontend Development",
					["HTML", "CSS", "JavaScript", "React"]
				),
				new InstructorClass(
					"Sarah Jones",
					"sarahjones@example.com",
					"456 London, UK",
					"Backend Development",
					["Node.js", "Express", "MongoDB"]
				),
				new InstructorClass(
					"Mike Johnson",
					"mikejohnson@example.com",
					"789 New York, USA",
					"Data Science",
					["Python", "Pandas", "Machine Learning"]
				),
				new InstructorClass(
					"Emily Brown",
					"emilybrown@example.com",
					"321 Paris, France",
					"Mobile Development",
					["Kotlin", "Swift", "Flutter"]
				),
				new InstructorClass(
					"Patricia Taylor",
					"patriciataylor@example.com",
					"753 Toronto, Canada",
					"AI and Machine Learning",
					["TensorFlow", "Keras", "Deep Learning"]
				),
				new InstructorClass(
					"James Anderson",
					"jamesanderson@example.com",
					"852 Dubai, UAE",
					"Database Management",
					["SQL", "NoSQL", "Database Design"]
				),
				new InstructorClass(
					"Elizabeth Miller",
					"elizabethmiller@example.com",
					"951 Mumbai, India",
					"Game Development",
					["Unity", "Unreal Engine", "C#"]
				),
			],
			CoursesData: JSON.parse(localStorage.getItem("courseData")) || [
				new CoursesClass(
					"JavaScript Basics",
					"4 weeks",
					["Variables", "Loops", "Functions"],
					"Online",
					"Frontend Development"
				),
				new CoursesClass(
					"React.js Advanced",
					"6 weeks",
					["Components", "Hooks", "State Management"],
					"Online",
					"Frontend Development"
				),
				new CoursesClass(
					"Node.js Fundamentals",
					"5 weeks",
					["Express.js", "Routing", "Middleware"],
					"Online",
					"Backend Development"
				),
				new CoursesClass(
					"Data Structures and Algorithms",
					"8 weeks",
					["Stacks", "Queues", "Trees"],
					"Offline",
					"Computer Science"
				),
				new CoursesClass(
					"CSS for Beginners",
					"3 weeks",
					["Selectors", "Flexbox", "Grid"],
					"Online",
					"Frontend Development"
				),
			],
			editedItem: null,          // Track item being edited
			editedItemType: null,      // Type of item being edited (course or instructor)
			editMode: false,           // Track if edit mode is enabled
		};
	}

	// Save data to localStorage on mount
	componentDidMount() {
		localStorage.setItem(
			"instructorData",
			JSON.stringify(this.state.InstructorsData)
		);
		localStorage.setItem("courseData", JSON.stringify(this.state.CoursesData));
	}

	// Update localStorage when state changes
	componentDidUpdate() {
		localStorage.setItem(
			"instructorData",
			JSON.stringify(this.state.InstructorsData)
		);
		localStorage.setItem("courseData", JSON.stringify(this.state.CoursesData));
	}

	// Function to handle adding new instructors or courses
	transferData = (type, newElement) => {
		if (type === "course") {
			this.setState({ CoursesData: [...this.state.CoursesData, newElement] });
		} else {
			this.setState({ InstructorsData: [...this.state.InstructorsData, newElement] });
		}
		this.setState({ editMode: false });
	}

	// Function to delete items (instructor or course) by index
	deleteItem = (dataType, eleIndex) => {
		let newData;
		if (dataType === "course") {
			newData = this.state.CoursesData.filter((_, i) => i !== eleIndex);
			this.setState({ CoursesData: newData });
		} else {
			newData = this.state.InstructorsData.filter((_, i) => i !== eleIndex);
			this.setState({ InstructorsData: newData });
		}
		localStorage.setItem(dataType === "course" ? 'courseData' : 'instructorData', JSON.stringify(newData));
	}


	render() {
		return (
			<div className="AppRouter">
				<Navbar />

				{/* Route for instructors page with delete and edit item functionality */}
				<Routes>
					<Route
						path="/"
						element={
							<AppInstructors
								deleteItem={this.deleteItem}
								editItem={this.editItem}
							/>
						}
					/>
					{/* Route for dashboard where new data can be transferred */}
					<Route
						path="/dashboard"
						element={<Dashboard transferData={this.transferData} />}
					/>
					{/* Route for editing a specific item */}
					<Route path="/dashboard/edit/:id" element={<EditItem />} />
					{/* Route for courses page with delete item functionality */}
					<Route
						path="/courses"
						element={<AppCourse deleteItem={this.deleteItem} />}
					/>
				</Routes>

				<Footer />
			</div>
		);
	}
}

export default AppRouter;
