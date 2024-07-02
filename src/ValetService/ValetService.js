import React, {useState} from 'react';
import logo from '../Home/Frame 17.png';
import Back from '../Restaurant & Bar/Back arrow.png';
import house from '../Restaurant & Bar/Home.png';
import Icon1 from "../Home/Group 1621.png";
import "./ValetService.css";



 function ValetService() {
    const [showForm, setShowForm] = useState(false);

    const handleGetVehicle = () => {
      setShowForm(true); 
    };
  
  return (
    <>
    <div className='logo-container'>
      <img src={logo} alt="logo" className='lg' />
      <img src={Back} alt="logo" className='back' />
      <img src={house} alt="logo" className='house' />
      <div >
        <p className='name'>Valet Service</p>
       </div>
       <img src={Icon1} alt="logo" className='icon1' />
       <div >
        <p className='name1'>Mr. Anirudh Jonnalagadda</p>
       </div>
       </div>

<div className="container">
{/* <div className="header">
  <img src="logo.png" alt="logo" className="logo" /> 
  <p className="title">Vehicle Retrieval</p>
</div> */}
<div className="form-container">
  {/* <p className="label">Enter Tag ID or Scan the Valet QR</p> */}
  <div className="input-group">
    <input
      type="text"
      className="tag-id-input1"
      placeholder="Enter Tag ID or Scan the Valet QR"
    />
    {/* Add QR code scanner integration here (optional) */}
  </div>
  <p className="label">Tag ID Number</p>
  <input type="text" className="ID-number-input" placeholder="1234" />
  <p className="label">Vehicle Number</p>
  <input type="text" className="vehicle-number-input" placeholder="MH 01 AV 1234" />
  <p className="label">Mobile</p>
  <input type="tel" className="mobile-input" placeholder="+91 | 000 0000 000" />
  <p className="label">Date</p>
  <input type="date" className="date-input" />
  <p className="label">Time</p>
  <input type="time" className="time-input" />
  <p className="label">Parked Location</p>
  <input type="text" className="parked-location-input" placeholder="P1101" />
  <button className="get-vehicle-button" onClick={handleGetVehicle}>
    Get My Vehicle
  </button>
</div>
{showForm && <div className="overlay"> 
  <div className="form">
    <p>Form content goes here...</p>
  </div>
</div>
 }
 </div>
 <div className='line56'>
 <img src={logo} alt="logo" className='lg1' />

 </div>
</>
  )
 }
  export default ValetService;