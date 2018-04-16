import ReactDOM from 'react-dom';
import React from 'react';
import './MyNavbar.css';

class MyNavbar extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <span> Mjung's Amazing Site </span>
      </div>
    );
  }
}

export default MyNavbar;
