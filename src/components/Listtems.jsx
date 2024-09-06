import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListItems = ({ dataType, deleteItem }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	// Load data from localStorage based on dataType
	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem(dataType === "course" ? "courseData" : "instructorData")) || [];
		setData(storedData);
	}, [dataType]);

	// Handle editing an item
	const editItem = (dataType, index) => {
		localStorage.setItem("editedItem", JSON.stringify({ type: dataType, index }));
		navigate(`/dashboard/edit/${index}`);
	};

	return (
		<>
			{data.length > 0 ? (
				data.map((item, i) => (
					<tr key={i}>
						{/* Item Number */}
						<td>{i + 1}</td>
						{/* Item Data */}
						{Object.keys(item)?.map((key, index) => {
							const value = item[key];
							return Array.isArray(value) ? (
								<td key={index}>{value.join(", ")}</td>
							) : (
								<td key={index}>{value}</td>
							);
						})}
						{/* Edit Button */}
						<td>
							<button
								className="btn bg-warning px-4"
								onClick={() => editItem(dataType, i)}
							>
								Edit
							</button>
						</td>
						{/* Delete Button */}
						<td>
							<button
								className="btn bg-danger text-white"
								onClick={() => deleteItem(dataType, i)}
							>
								Delete
							</button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan="8">No data available</td>
				</tr>
			)}
		</>
	);
};

export default ListItems;
