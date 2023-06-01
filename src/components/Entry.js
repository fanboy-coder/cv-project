import { React, useState } from "react";
import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";
import Month from "./Month";
import Year from "./Year";

function Entry({onClick}) {
	const [startMonth, setStartMonth] = useState("January");
	const [startYear, setStartYear] = useState(2000);
	const [endMonth, setEndMonth] = useState("December");
	const [endYear, setEndYear] = useState(2020);
	const [organization, setOrganization] = useState("University");
	const [role, setRole] = useState("Law student");
	const [description, setDescription] = useState([]);
	const [form, setForm] = useState(false);

	let updateState = () => {
		if(!form) {
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
		<div className="general-box">
			{form ? (
				<>
					<FaTrash className="delete" onClick={onClick}/>
					<FaCheckCircle  className="send" onClick={updateState}/>
					<div className="date-box">
						<Month onChange={handleStartMonthChange}/>
						<Year onChange={handleStartYearChange} />
						<p> to </p>
						<Month onChange={handleEndMonthChange}/>
						<Year onChange={handleEndYearChange}/>
					</div>
					<div>
						<form className="form">
							<input type="text" value={organization} onChange={handleOrganizationChange}></input>
							<input type="text" value={role} onChange={handleRoleChange}></input>
							<input type="text" value={description} onChange={handleDescriptionChange}></input>
						</form>
					</div>
				</>
			) : (
				<>
					<FaEdit  className="send" onClick={updateState}/>
					<FaTrash className="delete" onClick={onClick}/>
					<div className="date-box">
						<p className="date">{startMonth}</p>
						<p className="date">{startYear}</p>
						<p> to </p>
						<p className="date">{endMonth}</p>
						<p className="date">{endYear}</p>
					</div>
					<div>
						<h4 className="organization">{organization}</h4>
						<h5 className="role">{role}</h5>
					</div>
					<div>
						<p className="description">{description}</p>
					</div>
				</>
			)}
		</div>
	)

}



export default Entry
