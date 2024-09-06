import React from "react";

class Footer extends React.Component {
	// Get the current year
	getCurrentYear = () => {
		return new Date().getFullYear();
	};
	render() {
		return (
			<footer className="Main-Footer p-3 text-center bg-secondary-subtle">
				Copyrights @{this.getCurrentYear()}
				<br />
				Developed By{" "}
				<a
					className="text-decoration-none text-danger fw-bold"
					href="https://www.linkedin.com/in/ahmed-maher-algohary"
					rel="noreferrer"
					target="_blank"
					title="About Developer"
				>
					Ahmed Maher
				</a>
			</footer>
		);
	}
}

export default Footer;
