/*
 * 之前我们使用react.render()来更新ui
 * 这个demo是实现Clock组件真正的可重用和封装，它将设置自己的定时器，实现每秒更新一次
 */

import React, { Component } from "react";

class Clock extends Component{
	constructor(props){
		super(props);
		this.state={date:new Date()}
	}
	componentDidMount(){
		this.timer=setInterval(()=>
			this.tick(),1000);
	}
	componentWillUnMount(){
		clearInterval(this.timer);
	}
	tick(){
		this.setState({date:new Date()});
	}
	render(){
		return (
			<div>
				<h1>Hello World!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}

export default Clock;
