import React from "react";
import ListItems from "../components/Listtems";

class AppInstructors extends React.Component {
	render() {
		return (
			<div className="table-responsive container-fluid container-xl pt-4 text-center mb-4 full-h">
				<h3 className="my-3">Instructors Data</h3>
				{/* Table to display instructor data */}
				<table className="App-Instructors w-100 caption-top">
					<thead>
						<tr className="bg-secondary text-white">
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Address</th>
							<th>Track</th>
							<th>Course List</th>
							<th>Edit</th>
							<th>Delete</th>
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
		);
	}
}

export default AppInstructors;
