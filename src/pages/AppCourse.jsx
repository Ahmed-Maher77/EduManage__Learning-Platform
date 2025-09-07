import React from "react";
import ListItems from "../components/Listtems";

class AppCourse extends React.Component {
	render() {
		// Courses Data Table Component
		return (
			<div className="container-fluid container-xl pt-4 mb-4 full-h fade-in">
				{/* Header Section */}
				<div className="row mb-4">
					<div className="col-12">
						<div className="d-flex justify-content-between align-items-center flex-wrap row-gap-3">
							<div>
								<h3 className="mb-2 text-start">Courses Management</h3>
								<p className="text-muted mb-0 mt-4">
									Manage your educational courses and
									curriculum
								</p>
							</div>
							<div className="d-flex align-items-center">
								<div className="stats-card me-3">
									<div className="stats-number">
										{
											JSON.parse(
												localStorage.getItem(
													"courseData"
												) || "[]"
											).length
										}
									</div>
									<div className="stats-label">
										Total Courses
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Table Section */}
				<div className="table-responsive">
					<table className="App-Instructors w-100">
						<thead>
							<tr>
								<th>#</th>
								<th>Course Name</th>
								<th>Duration</th>
								<th>Topics</th>
								<th>Course Type</th>
								<th>Track</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{/* Dynamic List Items Component for Course Data */}
							<ListItems
								dataType="course"
								deleteItem={this.props.deleteItem}
							/>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default AppCourse;
