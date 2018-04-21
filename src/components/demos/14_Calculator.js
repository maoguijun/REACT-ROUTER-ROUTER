/*
 * 状态提升
 * 在React中状态分享是通过将state数据提升至离需要这些数据的组件最近的父组件来完成
 * 这也就是所谓的“状态提升”！
 */

import React, { Component } from "react"; 

const scaleNames={
	'c':'Celsius',
	'f':'Fahrenheit'
};

function toCelsius(fahrenheit){
	return (fahrenheit-32)*5/9;
}
function toFahrenheit(celsius){
	return (celsius*9/5)+32;
}
function tryConvert(temperature,convert){
	const input=parseFloat(temperature);
	if(Number.isNaN(input)){
		return "";
	}
	const output=convert(input);
	const rounded=(output*1000)/1000;
	return rounded.toString();
}

function BoilingVerdict(props){
	if(props.celsius>=100){
		return <p>The water will boil!</p>
	}else{
		return <p>The water will not boil forever !</p>
	}
}
//<TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
class TemperatureInput extends Component{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange(e){
		this.props.onTemperatureChange(e.target.value);
	}
	render(){
		const temperature=this.props.temperature;
		const scale=this.props.scale;
		return (
			<fieldset>
				<legend>Please enter a temperature in {scaleNames[scale]}:</legend>
				<input type="text" value={temperature} onChange={this.handleChange}/>
			</fieldset>
		)
	}
}
class Calculator extends Component{
	constructor(props){
		super(props);
		this.state=({temperature:'',scale:'c'});
		this.handleCelsiusChange=this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
	}
	handleCelsiusChange(temperature){
		this.setState({scale:'c',temperature})
	}

	handleFahrenheitChange(temperature){
		this.setState({scale:'f',temperature})
	}
	render(){
		const temperature=this.state.temperature;
		const scale=this.state.scale;
		const celsius=scale==="f"?tryConvert(temperature,toCelsius):temperature;
		const fahrenheit=scale==='c'?tryConvert(temperature,toFahrenheit):temperature;
		return (
			<div>
				<TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
				<TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
				<BoilingVerdict celsius={celsius}/>
			</div>
		)
	}
}

export default Calculator;
