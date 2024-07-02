import React from 'react';
import logo from '../Home/Frame 17.png';
import Back from '../Restaurant & Bar/Back arrow.png';
import house from '../Restaurant & Bar/Home.png';
import "./CheckOut1.css";



 function CheckOut1() {
  
  return (
    <>
    <div className='logo-container'>
      <img src={logo} alt="logo" className='lg' />
      <img src={Back} alt="logo" className='back' />
      <img src={house} alt="logo" className='house' />
      <div >
        <p className='name'>Information Invoice</p>
       </div>

       </div>

       <button className='name4'>Pay</button>

       </>
  )
}

export default CheckOut1;