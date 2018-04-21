/*表单中的select标签*/

import React, { Component } from "react"; 

class Select extends Component{
	constructor(props){
		super(props);
		this.state={value:"apple"};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleChange(e){
		this.setState({value:e.target.value});
	}
	handleSubmit(e){
		alert("you favorite food is "+this.state.value+" !");
		e.preventDefault();
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					choose your favorite food:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="apple">Apple</option>
						<option value="banana">Banana</option>
						<option value="Pear">Pear</option>
						<option value="orange">Orange</option>
						<option value="mango">Mango</option>
						<option value="watermelon">Watermelon</option>
					</select>
					<input type='submit' value="submit" />
				</label>
			</form>
		)
	}
}

export default Select;
