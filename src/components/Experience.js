import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import Entry from "./Entry";

function Experience () {

	const [components,setComponents] = useState([]);

	const addEntry = () => {
		const newEntry = { id: Date.now()};
		setComponents([...components, newEntry]);
		return(
			<Entry/>
		)
	};

	const handleRemoveChild = (id) => {
		const updatedComponents = components.filter(entry => entry.id !== id);
  		setComponents(updatedComponents);
	}

	return (
	<div className="experience-box">
		{components.map((entry) => (
			<Entry key={entry.id} entry={entry} onClick={() => handleRemoveChild(entry.id)}/>
		))}
		<FaPlusSquare onClick={addEntry}/>
	</div>
	) 
}

export default Experience