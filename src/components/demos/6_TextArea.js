/*textarea标签*/
import React, { Component } from "react";

class TextArea extends Component{
	constructor(props){
		super(props);
		this.state={essay:''}
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	handleSubmit(e){
		alert("Your Esaay is :"+this.state.essay);
		e.preventDefault();
	}
	handleChange(e){
		this.setState({essay:e.target.value});
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					please write a essay:
					<textarea value={this.state.essay} onChange={this.handleChange}></textarea>
				</label>
				<input type="submit" value="submit" />
			</form>
		)
	}
}

export default TextArea;
