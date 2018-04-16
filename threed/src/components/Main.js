import React from 'react';
import Canvas from './Canvas';
import MyNavbar from './MyNavbar';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <MyNavbar  />
        <Canvas />
      </div>
    );
  }
}

export default Main;
