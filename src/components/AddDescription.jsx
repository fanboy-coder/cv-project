import { React } from "react";
import { FaTrash } from "react-icons/fa";

export default function AddDescription({description, handleDescriptionChange, removeDescription}) {
	return (
		<li>
			<input type="text" value={description} onChange={handleDescriptionChange}></input>
			<FaTrash onClick={() => removeDescription()}/>
		</li>
	)
}