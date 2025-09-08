import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Component imports
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import Loader from "./components/Loader";

// Page imports
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AppInstructors from "./pages/AppInstructors";
import AppCourse from "./pages/AppCourse";
import EditItem from "./pages/EditItem";

// Data model imports
import { InstructorClass } from "./components/InstructorClass";
import { CoursesClass } from "./components/CoursesClass";

// Styles
import "./App.css";

// ScrollToTop component to handle route changes
const ScrollToTop = () => {
	const { pathname } = useLocation();

	React.useEffect(() => {
		// Check if user prefers reduced motion (with fallback for older browsers)
		const prefersReducedMotion =
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		// Scroll to top when route changes
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: prefersReducedMotion ? "auto" : "smooth",
		});
	}, [pathname]);

	return null;
};

class AppRouter extends React.Component {
	constructor() {
		super();
		this.state = {
			// UI state
			isLoading: true, // Controls initial loader display

			// Data state - load from localStorage or use defaults
			InstructorsData: JSON.parse(
				localStorage.getItem("instructorData")
			) || [
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

			// Edit state management
			editedItem: null, // Currently edited item
			editedItemType: null, // Type: 'course' or 'instructor'
			editMode: false, // Whether edit mode is active
		};
	}

	// Initialize app data and show loader
	componentDidMount() {
		// Persist initial data to localStorage
		localStorage.setItem(
			"instructorData",
			JSON.stringify(this.state.InstructorsData)
		);
		localStorage.setItem(
			"courseData",
			JSON.stringify(this.state.CoursesData)
		);

		// Hide loader after 2 seconds
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 2000);
	}

	// Sync data changes to localStorage
	componentDidUpdate() {
		localStorage.setItem(
			"instructorData",
			JSON.stringify(this.state.InstructorsData)
		);
		localStorage.setItem(
			"courseData",
			JSON.stringify(this.state.CoursesData)
		);
	}

	// Add new instructor or course
	transferData = (type, newElement) => {
		if (type === "course") {
			this.setState({
				CoursesData: [...this.state.CoursesData, newElement],
			});
		} else {
			this.setState({
				InstructorsData: [...this.state.InstructorsData, newElement],
			});
		}
		this.setState({ editMode: false });
	};

	// Remove instructor or course by index
	deleteItem = (dataType, eleIndex) => {
		let newData;
		if (dataType === "course") {
			newData = this.state.CoursesData.filter((_, i) => i !== eleIndex);
			this.setState({ CoursesData: newData });
		} else {
			newData = this.state.InstructorsData.filter(
				(_, i) => i !== eleIndex
			);
			this.setState({ InstructorsData: newData });
		}
		localStorage.setItem(
			dataType === "course" ? "courseData" : "instructorData",
			JSON.stringify(newData)
		);
	};

	render() {
		// Show loader during initial load
		if (this.state.isLoading) {
			return <Loader />;
		}

		return (
			<div className="AppRouter" style={{ minHeight: "100svh" }}>
				{/* Scroll to top on route change */}
				<ScrollToTop />

				{/* Navigation */}
				<Navbar />

				{/* Main content routes */}
				<main id="main-content" role="main" aria-label="Main content">
					<Routes>
						{/* Landing page - default route */}
						<Route path="/" element={<LandingPage />} />

						{/* Instructors management */}
						<Route
							path="/instructors"
							element={
								<AppInstructors
									deleteItem={this.deleteItem}
									editItem={this.editItem}
								/>
							}
						/>

						{/* Dashboard for adding new items */}
						<Route
							path="/dashboard"
							element={
								<Dashboard transferData={this.transferData} />
							}
						/>

						{/* Edit existing item */}
						<Route
							path="/dashboard/edit/:id"
							element={<EditItem />}
						/>

						{/* Courses management */}
						<Route
							path="/courses"
							element={<AppCourse deleteItem={this.deleteItem} />}
						/>
					</Routes>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		);
	}
}

export default AppRouter;
