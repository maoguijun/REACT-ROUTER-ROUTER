/*
 * 同样可以组合用类定义的组件
 */
import React, { Component } from "react"; 

function FancyBorder(props){
	return <div>{props.children}</div>
}
function Dialog(props){
	return (
		<FancyBorder>
			<h1>{props.title}</h1>
			<h3>{props.message}</h3>
			{props.children}
		</FancyBorder>
	)
}
class SignUp extends Component{
	constructor(props){
		super(props);
		this.state={value:''};
		this.handleChange=this.handleChange.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}
	handleChange(e){
		this.setState({value:e.target.value});
	}
	handleClick(e){
		alert("your message is "+this.state.value);
		e.preventDefault();
	}
	render(){
		return (
			<Dialog title="Mars Exploration Program" message="How should we refer to you?">
				<input type="text" value={this.state.value} onChange={this.handleChange}/>
				<button onClick={this.handleClick}>sign me up!</button>
			</Dialog>
		);
	}
}
export default SignUp;
