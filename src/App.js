import React, { Component } from "react";
import Main from "./components/General";
import Experience from "./components/Experience";
import "./App.css"

class App extends Component {
	render() {
		return (
			<div className="app">
				<Main />
					<h2>Work Experience</h2>
					<Experience name="work"/> 
					<h2>Education</h2>
					<Experience name="education"/>
			</div>
		)
	}
}

export default App;
