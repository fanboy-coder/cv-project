import { React, useState } from "react";

function Main () {
	const [name, setName] = useState("Your name");
	const [age, setAge] = useState(0);
	const [email, setEmail] = useState("example@email.com");
	const [phone, setPhone] = useState(0);
	const [form, setForm] = useState(false);

	let updateState = () => {
		if(!form) {
			setForm(true);
		} else {
			setForm(false);
		}
	}

	let handleNameChange = (event) => {
		setName(event.target.value);
	}
	let handleAgeChange = (event) => {
		setAge(event.target.value);
	}
	let handleEmailChange = (event) => {
		setEmail(event.target.value);
	}
	let handlePhoneChange = (event) => {
		setPhone(event.target.value);
	}

	return (
		<div className="info-box">
			{form ? (
			<>
			<button className="send" onClick={updateState}>Update</button>
			<form className="form">
				<label htmlFor="name">Name: </label>
				<input type="text" id="name" value={name} onChange={handleNameChange}/>
				<label htmlFor="age">Age: </label>
				<input type="number" id="age" value={age} onChange={handleAgeChange}/>
				<label htmlFor="email">Email: </label>
				<input type="email" id="email" value={email} onChange={handleEmailChange}/>
				<label htmlFor="phone">Phone number: </label>
				<input type="number" id="phone" pattern="[0-9]{9}" value={phone} onChange={handlePhoneChange}/>
			</form>
			</>
			) : (
			<>
			<button className="edit" onClick={updateState}>Edit</button>
			<p className="name">Name: {name}</p>
			<p className="age">Age: {age}</p>
			<p className="email">Email: {email}</p>
			<p className="phone">Phone number: {phone}</p>
			</>
			)}
		</div>
	)
}

export default Main