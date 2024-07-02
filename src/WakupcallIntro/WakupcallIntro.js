import React,{useState} from 'react';
import logo from '../Home/Frame 17.png';
import Back from '../Restaurant & Bar/Back arrow.png';
import house from '../Restaurant & Bar/Home.png';
import Icon1 from "../Home/Group 1621.png";
import "./WakupcallIntro.css";



 function WakeupcallIntro() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [salutation, setSalutation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [reminder, setReminder] = useState(0);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSalutationChange = (event) => {
    setSalutation(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleReminderChange = (event) => {
    setReminder(event.target.value);
  };
  
  return (
    <>
    <div className='logo-container'>
      <img src={logo} alt="logo" className='lg' />
      <img src={Back} alt="logo" className='back' />
      <img src={house} alt="logo" className='house' />
      <div >
        <p className='name'>Wake-Up Call</p>
       </div>
       <img src={Icon1} alt="logo" className='icon1' />
       <div >
        <p className='name1'>Mr. Anirudh Jonnalagadda</p>
       </div>
       </div>

<div className="guest-details">
      <h2>Guest Details</h2>
      <div className="details-container">
        <div className="left-container">
          <div className="form-group">
            <label htmlFor="date">Select Date</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Select Time</label>
            <input
              type="time"
              id="time"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="reminder">Reminder After</label>
            <input
              type="number"
              id="reminder"
              value={reminder}
              onChange={handleReminderChange}
            />
          </div>
        </div>
        <div className='line56'>

        </div>
        <div className="right-container">
          <div className="form-group">
            <label htmlFor="salutation">Salutation</label>
            <select id="salutation" value={salutation} onChange={handleSalutationChange}>
              <option value="Mr">Mr.</option>
              <option value="Ms">Ms.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Dr">Dr.</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="form-group2">
            <label htmlFor="mobile">Mobile</label>
            <input type="tel" id="mobile" value={mobile} onChange={handleMobileChange} />
          </div>
        </div>
      </div>
      <button>Next</button>
    </div>


       </>
  )
 }
  export default WakeupcallIntro;