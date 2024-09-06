import React from "react";
import ListItems from "../components/Listtems";

class AppCourse extends React.Component {
	render() {
		// Courses Data Table Component
		return (
			<div className="table-responsive container-fluid container-xl pt-4 text-center mb-4">
				{/* Courses Data Header */}
				<h3 className="my-3">Courses Data</h3>

				{/* Courses Table */}
				<table className="App-Instructors w-100 caption-top">
					<thead>
						<tr className="bg-secondary text-white">
							<th>#</th>
							<th>Cours Name</th>
							<th>Durations</th>
							<th>Topics</th>
							<th>Cours Type</th>
							<th>Track</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{/* Dynamic List Items Component for Course Data */}
						<ListItems dataType="course" deleteItem={this.props.deleteItem} />
					</tbody>
				</table>
			</div>
		);
	}
}

export default AppCourse;
