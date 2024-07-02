import React from 'react';
import './Book_menu.css'; 

function Book_menu() {
  
  return (
    <form className="contact-form">
      <h2>Guest Details</h2>
      <div className="form-group">
        {/* <label htmlFor="guestName">Room:</label> */}
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder="Room"
        />
        {/* <label htmlFor="guestName">Salutation:</label> */}
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder="Salutation"
        />
        {/* <label htmlFor="guestName">First Name:</label> */}
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder="First Name"
        />
        {/* <label htmlFor="guestName">Last Name:</label> */}
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder='Last Name'
        />
        {/* <label htmlFor="guestName">Mobile:</label> */}
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder='Mobile'
        />
        {/* <label htmlFor="guestName">Email:</label> */}
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder='Email'
        />
      </div>
      
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            id="isBookingForSomeone"
            name="isBookingForSomeone"
          />
          Check Here if you are booking for Someone
        </label>
      </div>

   
        <div>
          <h2>Booker Details</h2>
          <div className="form-group">
            {/* <label htmlFor="station">Salutation:</label> */}
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Salutation"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="firstName">First Name:</label> */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='First Name'
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="lastName">Last Name:</label> */}
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Last Name'
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="mobileNumber">Mobile Number:</label> */}
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder='Mobile Number'
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="emailAddress">Email Address:</label> */}
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder='Email'
            />
          </div>
        </div>
      

      <h2>Allergens</h2>
      <div className="form-group1">
        <label>
          <input
            type="checkbox"
            id="isBookingForSomeone"
            name="isBookingForSomeone"
          />
        Gluttens
        </label>
      </div>
      <div className="form-group2">
        <label>
          <input
            type="checkbox"
            id="isBookingForSomeone"
            name="isBookingForSomeone"
          />
          Nuts
        </label>
      </div>
      <div className="form-group3">
        <label>
          <input
            type="checkbox"
            id="isBookingForSomeone"
            name="isBookingForSomeone"
          />
          Lactose
        </label>
      </div>
      <div className="form-group4">
        <label>
          <input
            type="checkbox"
            id="isBookingForSomeone"
            name="isBookingForSomeone"
          />
          Fish/Shell
        </label>
      </div>
      <div className="form-group">
        <textarea
          id="allergens"
          name="allergens"
          placeholder="Other Instructions"
        />
      </div>
      <div>
          <h2>Booking Details</h2>
          <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Outlet"
            />
          </div>
          <div className="form-group">
            <input
              type="datetime-local"
              id="dateAndTime"
              name="bookingDetails.dateAndTime"
              placeholder="Date & Time"
            />
            <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Persons"
            />
            <div className="form-group">
        <label>
          <input
            type="checkbox"
            id="isBookingForSomeone"
            name="isBookingForSomeone"
          />
          Accept Terms & Conditions
        </label>
      </div>
          </div>
          </div>
          </div>

      <button type="submit">Book</button>
    </form>
  );
}

export default Book_menu;
