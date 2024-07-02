import React, {useState} from 'react';
import logo from '../Home/Frame 17.png';
import Back from '../Restaurant & Bar/Back arrow.png';
import house from '../Restaurant & Bar/Home.png';
import Icon1 from "../Home/Group 1621.png";
import Support from "../Home/fluent_chat-multiple-20-regular.png";
import "./GuestService.css";



 function GuestService() {

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
        <p className='name'>Guest Service</p>
       </div>
       <img src={Icon1} alt="logo" className='icon1' />
       <div >
        <p className='name1'>Mr. Anirudh Jonnalagadda</p>
       </div>
       </div>

       <div className="valet-service-container"> 
       <div className="search-box">
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
    <div className="search-box1">
      <input type="text" className="search-input1" placeholder="Other Instructions" />
    </div>
      <div className="content"> 
      <button className="request-button" onClick={handleGetVehicle}>
          Request
        </button>
        <p className="description"> 
        Can’t find what you’re looking for? Please contact chat support below
        </p>
        {showForm && <div className="form-container"> 
          <p>Form content goes here...</p>
        </div>}
      </div>
    </div>

    <div className='chat'>
          <p>Chat Support</p>
          <p className='sup'>Click to contact our 24/7 chat support team assistance</p>
       </div>

       <div >
         <img src={Support} alt='supp' className='chat-sup' />
       </div>

       </>
  )
 }
  export default GuestService;