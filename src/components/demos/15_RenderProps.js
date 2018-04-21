import React, { Component } from "react";
class RenderProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: ""
    };
  }
  creactRender = () => {
    const { render } = this.state;
    if (render) {
      this.setState({
        render: ""
      });
    } else {
      this.setState({
        render: () => (
          <div style={{ fontSize: 30, color: "#e0301e", fontWeight: 400 }}>
            这个是用render方法渲染出来的
          </div>
        )
      });
    }
  };
  render() {
    const { render } = this.state;
    return (
      // 这个还记得是什么吗？
      <React.Fragment>
        <button onClick={() => this.creactRender()}>
          {render ? "删除render" : "添加render"}
        </button>
        <Text render={render} />
      </React.Fragment>
    );
  }
}

const Text = props => {
  if (props.render) {
    return props.render();
  } else {
    return <div>这个是没有render方法的样子</div>;
  }
};

export default RenderProps;
