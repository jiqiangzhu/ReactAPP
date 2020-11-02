import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class ParentCom extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let header = <div>这是header的内容区域</div>;
    let main = <div>这是main的内容区域</div>;
    let footer = <div>这是footer的内容区域</div>
    return (
      <div>
        {this.props.children}
        <ChildCom>
          <h2>{header}</h2>
          <h2>{main}</h2>
          <h2>{footer}</h2>
        </ChildCom>
      </div>
    )
  }
}
class ChildCom extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let header = '这是header';
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <ParentCom>
    <h1>这是一级标题</h1>
  </ParentCom>,
  document.getElementById('root')
);