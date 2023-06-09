import { React, useState, useEffect, useCallback } from "react";
import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";
import Month from "./Month";
import Year from "./Year";

function Entry({ onClick }) {
	const [startMonth, setStartMonth] = useState("January");
	const [startYear, setStartYear] = useState(2000);
	const [endMonth, setEndMonth] = useState("December");
	const [endYear, setEndYear] = useState(2020);
	const [organization, setOrganization] = useState("University");
	const [role, setRole] = useState("Law student");
	const [description, setDescription] = useState([]);
	const [form, setForm] = useState(false);
	const [warning, setWarning] = useState("");

	const updateState = useCallback(() => {
		if (warning !== "") {
			console.log("there's an error")
		} else {
			setForm((prevForm) => !prevForm);
		}
	},[warning]);

	let handleStartMonthChange = (event) => {
		setStartMonth(event.target.value);
	}

	let handleEndMonthChange = (event) => {
		setEndMonth(event.target.value);
	}

	let handleStartYearChange = (event) => {
		setStartYear(event.target.value);
	}

	let handleEndYearChange = (event) => {
		setEndYear(event.target.value);
	}

	let handleOrganizationChange = (event) => {
		setOrganization(event.target.value);
	}

	let handleRoleChange = (event) => {
		setRole(event.target.value);
	}

	let handleDescriptionChange = (event) => {
		setDescription(event.target.value)
	}

	useEffect(() => {
		let monthsOfYear = {
			January: 1,
			February: 2,
			March: 3,
			April: 4,
			May: 5,
			June: 6,
			July: 7,
			August: 8,
			September: 9,
			October: 10,
			November: 11,
			December: 12
		};

		let startMonthValue = monthsOfYear[startMonth];
		let endMonthValue = monthsOfYear[endMonth];

		if (startYear > endYear) {
			setWarning(" Invalid date");
		} else if (startYear < endYear || endYear === startYear) {
			if (startMonthValue > endMonthValue) {
				setWarning(" Invalid date");
			} else {
				setWarning("");
			}
		} else if (!monthsOfYear.hasOwnProperty(startMonth) || !monthsOfYear.hasOwnProperty(endMonth)) {
			setWarning(" Invalid date");
		}
		else {
			setWarning("");
		};
	}, [updateState, startYear, endYear, startMonth, endMonth]);

	return (
		<div className="entry-box">
			{form ? (
				<>
					<div className="info-box">
						<div className="date-box">
							<Month onChange={handleStartMonthChange} value={startMonth}/>
							<Year onChange={handleStartYearChange} value={startYear}/>
							<p>&nbsp;to&nbsp;</p>
							<Month onChange={handleEndMonthChange} value={endMonth} />
							<Year onChange={handleEndYearChange} value={endYear}/>
							<p id="warning">{warning}</p>
						</div>
						<div className="organization-box">
							<label>Organization:</label>
							<input type="text" value={organization} onChange={handleOrganizationChange}></input>
						</div>
						<div className="role-box">
							<label>Role: </label>
							<input type="text" value={role} onChange={handleRoleChange}></input>
						</div>
						<div className="description-box">
							<input type="text" value={description} onChange={handleDescriptionChange}></input>
						</div>
					</div>
					<div className="edit-box">
						<FaTrash className="btn" onClick={onClick} />
						<FaCheckCircle className="btn" onClick={updateState} />
					</div>
				</>
			) : (
				<>
					<div className="info-box">
						<div className="date-box">
							<p className="date">{startMonth}&nbsp;</p>
							<p className="date">{startYear}</p>
							<p>&nbsp;to&nbsp;</p>
							<p className="date">{endMonth}&nbsp;</p>
							<p className="date">{endYear}</p>
						</div>
						<div className="organization-box">
							<h4 className="organization">{organization}</h4>
						</div>
						<div className="role-box">
							<h5 className="role">{role}</h5>
						</div>
						<div className="description-box">
							<p className="description">{description}</p>
						</div>
					</div>
					<div className="edit-box">
						<FaTrash className="btn" onClick={onClick} />
						<FaEdit className="btn" onClick={updateState} />
					</div>
				</>
			)}
		</div>
	)
}



export default Entry
