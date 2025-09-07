import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListItems = ({ dataType, deleteItem }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	// Load data from localStorage based on dataType
	useEffect(() => {
		const storedData =
			JSON.parse(
				localStorage.getItem(
					dataType === "course" ? "courseData" : "instructorData"
				)
			) || [];
		setData(storedData);
	}, [dataType]);

	// Handle editing an item
	const editItem = (dataType, index) => {
		localStorage.setItem(
			"editedItem",
			JSON.stringify({ type: dataType, index })
		);
		navigate(`/dashboard/edit/${index}`);
	};

	return (
		<>
			{data.length > 0 ? (
				data.map((item, i) => (
					<tr key={i}>
						{/* Item Number */}
						<td className="fw-bold text-primary">{i + 1}</td>
						{/* Item Data */}
						{Object.keys(item)?.map((key, index) => {
							const value = item[key];
							return Array.isArray(value) ? (
								<td key={index}>
									<div className="d-flex flex-wrap gap-1">
										{value.map((topic, idx) => (
											<span
												key={idx}
												className="badge bg-light text-dark border"
											>
												{topic}
											</span>
										))}
									</div>
								</td>
							) : (
								<td key={index}>
									{key === "email" ? (
										<a
											href={`mailto:${value}`}
											className="text-decoration-none"
										>
											{value}
										</a>
									) : (
										value
									)}
								</td>
							);
						})}
						{/* Action Buttons */}
						<td>
							<div className="d-flex gap-2">
								<button
									className="btn btn-sm bg-warning text-white d-flex align-items-center"
									onClick={() => editItem(dataType, i)}
									title="Edit Item"
								>
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M18.5 2.5C18.8978 2.10218 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10218 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10218 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<span className="ms-1">Edit</span>
								</button>
								<button
									className="btn btn-sm bg-danger text-white d-flex align-items-center"
									onClick={() => deleteItem(dataType, i)}
									title="Delete Item"
								>
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3 6H5H21"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M10 11V17"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M14 11V17"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<span className="ms-1">Delete</span>
								</button>
							</div>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan="7" className="text-center py-5">
						<div className="empty-state">
							<svg
								width="64"
								height="64"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="mb-3"
							>
								<path
									d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<h5 className="text-muted">No data available</h5>
							<p className="text-muted">
								Start by adding some{" "}
								{dataType === "course"
									? "courses"
									: "instructors"}{" "}
								to get started.
							</p>
						</div>
					</td>
				</tr>
			)}
		</>
	);
};

export default ListItems;
