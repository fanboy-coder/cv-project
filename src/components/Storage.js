import React, { Component } from "react";
// import Experience from "./components/Experience";

class Storage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			work: [],
			education: []
		}
		this.addWork = this.addWork.bind(this)
		this.addEducation = this.addEducation.bind(this)
	}

	addWork(obj) {
		this.setState(prevState => ({
			work: [...prevState.work, obj]
		}))
	}

	addEducation(obj) {
		this.setState(prevState => ({
			education: [...prevState.education, obj]
		}))
	}

	render() {
		return(
			<div>
				{this.state.work.map((item,index) =>
				 <div key={index} className="experience-box">
				 <button className="edit" onClick={this.editBox}>Edit</button>
				 <div className="date-box">
				   <p className="date">{item.startMonth}</p>
				   <p className="date">{item.startYear}</p>
				   <p className="date">-</p>
				   <p className="date">{item.endMonth}</p>
				   <p className="date">{item.endYear}</p>
				 </div>
				 <div className="place">{item.place}</div>
				 <div className="role">{item.role}</div>
				 <div className="description">{item.description}</div>
				 <button className="new-field" onClick={this.newBlock}>Add more</button>
			   </div>)}
			</div>
		)
	}
}

export default Storage