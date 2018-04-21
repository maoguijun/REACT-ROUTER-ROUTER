/*事件处理*/

import React, { Component } from "react"; 

class Toggle extends Component{
	constructor(props){
		super(props);
		this.state={isToggleOn:'true'};
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(){
		this.setState({isToggleOn:!this.state.isToggleOn});
	}
	render(){
		return (
			<button onClick={this.handleClick}>{this.state.isToggleOn?'ON':'OFF'}</button>
		)
	}
}

export default Toggle;
