import React, { Component } from 'react';
import will from '../images/william.png';
import reb from '../images/rebecca.png';
import a1 from '../images/arrow1.png';
import a2 from '../images/arrow2.png';


class Testimony extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="trust">trusted by People all over the world</div>
    <div className="com">
      <div className="comimg">
        <img src={will} className="will" alt="william"/>
        <img src={reb} className="reb" alt="rebecca"/>
      </div>
      <div className="arrow">
        <buttom className="aimg">
          <img src={a1} className="a1div" alt="arrow1"/>
          <img src={a2} className="a2div" alt="arrow2"/>
        </buttom>
      </div>
    </div>
            </>
        );
    }
}
 
export default Testimony;