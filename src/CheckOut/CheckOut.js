import React from 'react';
import logo from '../Home/Frame 17.png';
import Back from '../Restaurant & Bar/Back arrow.png';
import house from '../Restaurant & Bar/Home.png';
import "./CheckOut.css";



 function CheckOut() {
  
  return (
    <>
    <div className='logo-container'>
      <img src={logo} alt="logo" className='lg' />
      <img src={Back} alt="logo" className='back' />
      <img src={house} alt="logo" className='house' />
      <div >
        <p className='name'>Check Out</p>
       </div>
       <div >
        <button className='name1'>English</button>
       </div>
       </div>

       <div className="flight-schedule">
      <div className="flight-schedule__header">
        <div className="flight-schedule__header__now">
        <button className='name2'>Now</button>
        </div>
        <div className="flight-schedule__header__schedule">
        <button className='name3'>Schedule</button>
        </div>
      </div>
      <div className="flight-schedule__content">
        <div className="flight-schedule__content__departure">
            <input type="text" id="select-time" placeholder="Departure Time"/>
        </div>
        <div className="flight-schedule__content__luggage">Need assistance with luggage</div>
        <div className="flight-schedule__content__next">
        <button className='name4'>Next</button>
        </div>
      </div>
    </div>
</>
       )
       }

       export default CheckOut;