/*react中的列表*/
import React, { Component } from "react";


function List(props){
	const itemList=props.numbers.map(num=>
		<li key={num.toString()}>{num*2}</li>
	)
	return (
		<ul>{itemList}</ul>
	)
}

export default List;

