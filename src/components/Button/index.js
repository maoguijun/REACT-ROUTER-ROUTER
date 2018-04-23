import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index_.css";

export const Button = props => {
  let props_ = { ...props };
  delete props_.list;
  console.log(props.current);
  if (props.list) {
    return props.list.map(item => (
        <Link to={`/${item}`} >
          <button 
            className="buttonS"
            style={props.current === item ? { color: "#e4393c" } : {}}
            key={item}
            value={item}
            {...props_}
          >
            {item} 
          
          </button>
        </Link>
    ));
  }
};
