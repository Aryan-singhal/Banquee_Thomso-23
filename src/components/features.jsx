import React, { Component } from 'react';
import heroimg from '../images/Hero Image.png';
import bottom from '../images/image 2.png';
import security from '../images/security.png';
import autobill from '../images/autobill.png';
import credit1 from '../images/credit1.png';
import credit2 from '../images/credit2.png';
import house from '../images/house.png';
import blackarrow from '../images/black arrow.png';



class Features extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div>
          <img src={heroimg} className="heroimg" alt="heroimg"/>
    </div>
    <div className="bottomclass" alt="bottom class">
      <img src={bottom} className="bottomimg" alt="bottomimg"/>
    </div>
    <div className="feature">
      <h2>all features you need in one plaCE</h2>
    </div>
    <div className="highilights">
      <div className="uppersection">
        <div className="secure">
          <img src={security} className="securitydiv" alt="securitydiv"/>
          <h2>Secure Online Banking</h2>
        </div>
        <div className="bill">
          <img src={autobill} className="billdiv" alt="billdiv"/>
          <h2>Automatic Bill Payment</h2>
        </div>
      </div>
      <div className="lowersection">
        <div className="fees">
          <img src={credit1} className="feesdiv" alt="feesdiv"/>
          <h2>No Hidden Fees</h2>
        </div>
        <div className="payments">
          <img src={credit2} className="paymentsdiv" alt="paymentsdiv"/>
          <h2>Card Payments Anytime</h2>
        </div>
      </div>
    </div>
    <div className="digital">
      <div className="housesection">
        <img src={house} className="housediv" alt="housediv"/>
      </div>
      <div className="dcont">
        <h1>Go digital now!</h1>
        <h4>Our digital platform allows you to access your money from anywhere, anytime. Which our innovative security features, and first-in-class service, we combine the best of traditional banking with a modern convenience of digital banking today</h4>
        <button className="getstart2">
            Get Started
            <img src={blackarrow} className="startbutton" alt="button1"/>
          </button>
      </div>
    </div>
            </>
        );
    }
}
 
export default Features;