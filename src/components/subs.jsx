import React, { Component } from 'react';
import logo from '../images/Star 3.png';



class Subs extends Component {
    state = {  } 
    render() { 
        return (
            <><div className="sub">
            <div className="subcontent">
              <h2>SUNSCRIBE TO OUR NEWSLETTER FOR A 10% BONUS ON TRANSACTIONS</h2>
              <img src={logo} className="subimg" alt="subimg"/>
            </div>
            <div class="buttonIn">
              <input type="email" id="email" name="email" placeholder="Your email address"/>
              <button id="clear" class="mail">SUBSCRIBE</button>
            </div>
          </div></>
        );
    }
}
 
export default Subs;