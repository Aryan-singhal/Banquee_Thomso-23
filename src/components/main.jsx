import React, { Component } from 'react';
import s from '../images/Star 2.png';
import button from '../images/button1.png';
import burger from '../images/Cheeseburger.png';
import logo from '../images/Star 3.png';


class First extends Component {
    state = {  } 
    render() { 
        return (
            <div className="main">
    <div className="toplogo">
      <img src={logo} className="logo1" alt="s1"/>
      <h2>BANQUEE</h2>
      <div className="burger1">
        <img src={burger} className="cburger" alt="cburger"/>
      </div>
    </div>
      <div className="logocontaints">
        <div className="wcont">
          <div className="s">
            <img src={s} className="s1" alt="s1"/>
          </div>
          <h1>EASY WAY TO BANKING</h1>
          <h2>We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.</h2>
          <button className="getstart">
            Get Started
            <img src={button} className="startbutton" alt="button1"/>
          </button>
        </div>
      </div>
    </div>
        );
    }
}
 
export default First;