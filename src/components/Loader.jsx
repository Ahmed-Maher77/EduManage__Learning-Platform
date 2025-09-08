import React from "react";

/**
 * Initial loading screen component
 * Displays animated spinner with branding during app initialization
 */
class Loader extends React.Component {
	render() {
		return (
			<div className="loader-overlay">
				<div className="loader-container">
					{/* Animated spinner with 4 rings */}
					<div className="loader-spinner">
						<div className="spinner-ring"></div>
						<div className="spinner-ring"></div>
						<div className="spinner-ring"></div>
						<div className="spinner-ring"></div>
					</div>

					{/* Branding and loading message */}
					<div className="loader-text">
						<h3>EduManage</h3>
						<p>Loading your learning platform...</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Loader;
