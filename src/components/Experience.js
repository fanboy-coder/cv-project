import React, { useState } from "react";
import Entry from "./Entry";

function Experience () {

	const [components,setComponents] = useState([]);

	const addEntry = () => {
		const newEntry = { id: Date.now()};
		setComponents([...components, newEntry]);
	};

	return (
	<div className="experience-box">
		{components.map((entry) => (
			<Entry key={entry.id} entry={entry}/>
		))}
		<button onClick={addEntry}>Add entry</button>
	</div>
	) 
}

export default Experience