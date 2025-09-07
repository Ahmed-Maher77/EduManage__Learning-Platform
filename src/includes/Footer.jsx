import React from "react";
import "../App.scss";

class Footer extends React.Component {
	// Get the current year
	getCurrentYear = () => {
		return new Date().getFullYear();
	};
	render() {
		return (
			<footer className="Main-Footer">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="d-flex align-items-center">
								<div className="footer-logo me-3">
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
								<div>
									<h6 className="mb-1 text-white">
										EduManage
									</h6>
									<p className="mb-0 text-muted small">
										Learning Platform
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 text-md-end">
							<p className="mb-1 text-muted small">
								© {this.getCurrentYear()} EduManage. All rights
								reserved.
							</p>
							<p className="mb-0 text-muted small">
								Developed with ❤️ by{" "}
								<a
									className="text-decoration-none fw-bold"
									href="https://ahmedmaher-portfolio.vercel.app"
									rel="noreferrer"
									target="_blank"
									title="About Developer"
								>
									Ahmed Maher
								</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
