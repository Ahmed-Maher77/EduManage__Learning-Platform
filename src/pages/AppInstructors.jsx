import React from "react";
import ListItems from "../components/Listtems";

class AppInstructors extends React.Component {
	render() {
		return (
			<div className="container-fluid container-xl pt-4 mb-4 full-h fade-in">
				{/* Header Section */}
				<div className="row mb-4">
					<div className="col-12">
						<div className="d-flex justify-content-between align-items-center flex-wrap row-gap-3">
							<div>
								<h3 className="mb-2 text-start">Instructors Management</h3>
								<p className="text-muted mb-0 mt-4">
									Manage your teaching staff and their course
									assignments
								</p>
							</div>
							<div className="d-flex align-items-center">
								<div className="stats-card me-3">
									<div className="stats-number">
										{
											JSON.parse(
												localStorage.getItem(
													"instructorData"
												) || "[]"
											).length
										}
									</div>
									<div className="stats-label">
										Total Instructors
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
								<th>Name</th>
								<th>Email</th>
								<th>Address</th>
								<th>Track</th>
								<th>Course List</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{/* Reuse ListItems component to handle data */}
							<ListItems
								dataType="instructor"
								deleteItem={this.props.deleteItem}
							/>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default AppInstructors;
