import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditItem = () => {
	const navigate = useNavigate();
	const { id } = useParams();  // Get item ID from UR
	const [dataType, setDataType] = useState(null);  // Track item type ('course' or 'instructor')
	const [editedItem, setEditedItem] = useState(null);  // Store the item being edited

	// Load the item and type to be edited from localStorage
	useEffect(() => {
		const { type } = JSON.parse(localStorage.getItem("editedItem"));
		setDataType(type)
		const comingData = JSON.parse(localStorage.getItem(type === "instructor" ? "instructorData" : "courseData"));
		const selectedItem = comingData.find((_, i) => i === +id); // Find item by index
		setEditedItem(selectedItem); 
	}, [id]);

	// Submit updated item back to localStorage
	const submitEditedData = () => {
		const storedData = JSON.parse(localStorage.getItem(dataType === "instructor" ? "instructorData" : "courseData"));
		const newData = storedData.map((item, i) => (i === +id ? editedItem : item)); // Update selected item
		localStorage.setItem(dataType === "instructor" ? "instructorData" : "courseData", JSON.stringify(newData));
		navigate(`/${dataType === "course" ? "courses" : ""}`); // Navigate after saving
	};


	return (
		<div className="Edit-Page py-5">
			<div className="container">
				<h2 className="text-center mb-4">Edit {dataType} Data</h2>
				{!editedItem? <h2>Loading...</h2> : 
				// Filling the inputs with the coming data
				Object.keys(editedItem).map((key, i) => (
					<div className="form-floating mb-3" key={i}>
						<input
							type="text"
							className="form-control border-secondary-subtle"
							id="floatingInput"
							placeholder={`Enter ${key}`}
							value={Array.isArray(editedItem[key])? editedItem[key].join(', ') : editedItem[key]}
							autoFocus={i === 0}
							onChange={(e) => setEditedItem(prev => ({...prev, [key]: e.target.value}))}
						/>
						<label htmlFor="floatingInput">{key.match(/[a-z]+/i)}</label>
					</div>
				))}
				{/* Update Button */}
				<button className="text-decoration-none text-white btn btn-success d-block p-3 px-4 m-auto mt-5" onClick={submitEditedData}>
					Update {dataType?.slice(0,1).toUpperCase() + dataType?.slice(1)} Data
				</button>
			</div>
		</div>
	);
};

export default EditItem;

