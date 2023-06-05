import { React, useState } from "react";
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

	let updateState = () => {
		if (!form) {
			setForm(true);
		} else {
			setForm(false);
		}
	}

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

	return (
		<div className="entry-box">
			{form ? (
				<>
				<div className="info-box">
					<div className="date-box">
						<Month onChange={handleStartMonthChange} />
						<Year onChange={handleStartYearChange} />
						<p>&nbsp;to&nbsp;</p>
						<Month onChange={handleEndMonthChange} />
						<Year onChange={handleEndYearChange} />
					</div>
					<div className="details-box">
						<label htmlFor="email">Organization: </label>
						<input type="text" value={organization} onChange={handleOrganizationChange}></input>
						<label htmlFor="email">Role: </label>
						<input type="text" value={role} onChange={handleRoleChange}></input>
					</div>
					<div className="description-box">
						<input type="text" value={description} onChange={handleDescriptionChange}></input>
					</div>
					<div className="edit-box">
						<FaTrash className="btn" onClick={onClick} />
						<FaCheckCircle className="btn" onClick={updateState} />
					</div>
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
						<FaEdit className="btn" onClick={updateState} />
						<FaTrash className="btn" onClick={onClick} />
					</div>
				</>
			)}
		</div>
	)

}



export default Entry
