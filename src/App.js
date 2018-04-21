import React, { Component } from "react";
import {BrowserRouter as Router,Route,Link } from 'react-router-dom';
import logo from "./logo.svg";
import "./App_.css";
import { componentList, componentNameList } from "./components/route/route";
import { Button } from "./components/Button";
import { user } from "./components/demos/2_JSX"; // 这里不导入这个user 看看会发生什么？为什么？ // JSX的课后问题

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnk: "HelloWord"
    };
  }
  selectComponent = value => {
    console.log(value);
    this.setState({
      btnk: value
    });
  };
  render() {
    const { btnk } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Button
              list={componentNameList}
              onClick={e => this.selectComponent(e.target.value)}
              current={btnk}
            >
            </Button>
          </header>
          <div className="App-intro">{componentList[btnk]}</div>
        </div>
        </Router>
    );
  }
}

export default App;
