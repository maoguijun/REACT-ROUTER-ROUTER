/** 元素渲染 */
import React, { Component } from "react";

class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  Clock = setInterval(() => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }, 1000);
  // 这个是组件被移除的时候出发的事件
  componentWillUnmount() {
    // 清除计时器
    clearInterval(this.Clock);
  }
  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {time}.</h2>
      </div>
    );
  }
}

export default Tick;
// 问题：
/**1. App.js 留有一个问题可以尝试去解答 */
