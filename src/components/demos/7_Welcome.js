/*react组件中的组合组件*/
import React, { Component } from "react";

function Welcome(props){
	return (
		<h1>Hello {props.name}</h1>
	)
}

function Container(){
	return (
		<div>
			<Welcome name="Lili" />
			<Welcome name="Mike" />
			<Welcome name="Jhon" />
		</div>
	)
}

export default Container;
