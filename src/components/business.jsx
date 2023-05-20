import React, { Component } from 'react';
import s4 from '../images/Star 4.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import mobile from '../images/mobile.png';


class Business extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="bussiness">
      <h2>designed for businesses of all sizes</h2>
    </div>
    <div className="imgs">
      <div className="img1">
        <img src={s4} className="sdiv" alt="sdiv"/>
        <img src={img1} className="img1div" alt="img1div"/>
        <h2>for small businesses</h2>
      </div>
      <div className="img2">
        <img src={img2} className="img2div" alt="img2div"/>
        <h2>for startups</h2>
      </div>
      <div className="img3">
        <img src={img3} className="img3div" alt="img3div"/>
        <h2>for enterprises</h2>
      </div>
    </div>
    <div className="banking">
      <h2>We take banking personally</h2>
    </div>
    <div className="mob">
      <div className="mobcontent">
        <div className="save">
          <h2>SAVE</h2>
          <h4>We're using technology to solve that by automating saving. You set an amount to save and we takes care of the rest, prompt interest payout included.</h4>
        </div>
        <div className="spend">
          <h2>SPEND</h2>
          <h4>We give you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your account.</h4>
        </div>
        <div className="send">
        <h2>SEND</h2>
        <h4>From international transfers to on-the-spot payments at market stalls, we’ve simplified sending money so you don’t need to think too much about it.</h4>
        </div>
      </div>
      <div className="mobimg">
        <img src={mobile} className="mobdiv" alt="mobdiv"/>
      </div>
    </div>
            </>
        );
    }
}
 
export default Business;