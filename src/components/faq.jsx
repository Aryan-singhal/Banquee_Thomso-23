import React, { Component } from 'react';
import vec from '../images/Vector.png';

class FAQ extends Component {
    state = {  } 
    render() { 
        return (
            <><div className="quest">
            <h2>frequently asked question</h2>
          </div>
          <div className="q">
            <div className="q1">
              <h2>How much would it require to open an account ?</h2>
              <img src={vec} className="vecimg" alt="vecimg"/>
            </div>
            <div className="q2">
              <h2>Is there a minimum operational cost ?</h2>
              <img src={vec} className="vecimg" alt="vecimg"/>
            </div>
            <div className="q3">
              <h2>where can i use my debit cards ?</h2>
              <img src={vec} className="vecimg" alt="vecimg"/>
            </div>
            <div className="q4">
              <h2>how much do i get as interest on savings ?</h2>
              <img src={vec} className="vecimg" alt="vecimg"/>
            </div>
          </div></>
        );
    }
}
 
export default FAQ;