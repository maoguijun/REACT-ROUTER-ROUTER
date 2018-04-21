/*
 * 条件渲染
 * 使用变量来存储元素，有条件的渲染组件中的一部分
 */

import React, { Component } from "react"; 

function UserGreeting(){
	return <h1>退出!</h1>;
}
function GustGreeting(){
	return <h1>请登入!</h1>;
}

function Greeting(props){
	const isLogin=props.isLogin;
	if(isLogin){
		return <UserGreeting />
	}else{
		return <GustGreeting />
	}
}

function LoginButton(props){
	return (
		<button onClick={props.onClick}>Login!</button>
	)
}
function LogoutButton(props){
	return (
		<button onClick={props.onClick}>Logout!</button>
	)
}
class LoginControl extends Component{
	constructor(props){
		super(props);
		this.state={isLogin:false};
		this.handleClick=this.handleClick.bind(this);
	}
	
	handleClick(){
		this.setState({isLogin:!this.state.isLogin});
	}
	
	render(){
		const login=this.state.isLogin;
		let button=null;
		if(login){
			button=<LogoutButton onClick={this.handleClick}  />
		}else{
			button=<LoginButton onClick={this.handleClick}/> 
		}
		return (
			<div>
				<Greeting  isLogin={login}/>
				{button}
			</div>
		)
	}
	
}

export default LoginControl;
