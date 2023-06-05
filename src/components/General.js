import { React, useState } from "react";
import { FaEdit, FaCheckCircle } from "react-icons/fa";

function Main() {
	const [name, setName] = useState("Your name");
	const [email, setEmail] = useState("example@email.com");
	const [phone, setPhone] = useState(0);
	const [form, setForm] = useState(false);

	let updateState = () => {
		if (!form) {
			setForm(true);
		} else {
			setForm(false);
		}
	}

	let handleNameChange = (event) => {
		setName(event.target.value);
	}
	let handleEmailChange = (event) => {
		setEmail(event.target.value);
	}
	let handlePhoneChange = (event) => {
		setPhone(event.target.value);
	}

	return (
		<div className="general-box">
			{form ? (
				<>
					<div className="general-info-box">
						<div><input type="text" id="name" value={name} onChange={handleNameChange} /></div>
						<div>
							<label htmlFor="email">Email: </label>
							<input type="email" id="email" value={email} onChange={handleEmailChange} />
						</div>
						<div>
							<label htmlFor="phone">Phone number: </label>
							<input type="number" id="phone" pattern="[0-9]{9}" value={phone} onChange={handlePhoneChange} />
						</div>
					</div>
					<div className="edit-box">
						<FaCheckCircle className="btn edit" onClick={updateState} />
					</div>
				</>
			) : (
				<>
					<div className="general-info-box">
						<h1 className="name">{name}</h1>
						<p className="email">Email: {email}</p>
						<p className="phone">Phone number: {phone}</p>
					</div>
					<div className="edit-box">
						<FaEdit className="btn" onClick={updateState} />
					</div>
				</>
			)}
		</div>
	)
}

export default Main