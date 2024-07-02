import React from 'react';
import './TransportationForm.css'; 

function TransportationForm() {
 
  return (
    <form  className="contact-form">
      <h2>Guest Details</h2>
      <div className="form-group">
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder="Room"
        />
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder="Salutation"
        />
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder="First Name"
        />
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder='Last Name'
        />
        <input
          type="text"
          id="guestName"
          name="guestName"
          placeholder='Mobile'
        />
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
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Salutation"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='First Name'
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Last Name'
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder='Mobile Number'
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder='Email'
            />
          </div>
        </div>
      

     

      <div className="form-group">
        <textarea
          id="allergens"
          name="allergens"
          placeholder='Other Instructions'
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
          </div>
            <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Persons"
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Services"
            />
           </div>
           <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Pick-Up Location"
            />
           </div>
           <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Drop-Off Location"
            />
           </div>
           <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Flight Number"
            />
           </div>
           <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Train Number"
            />
           </div>
           <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Hours"
            />
           </div>
           <div className="form-group">
            <input
              type="text"
              id="station"
              name="station"
              placeholder="Vehicle Type"
            />
           </div>

         
          </div>

      <button type="submit">Book</button>
    </form>
  );
}

export default TransportationForm;

// import React, { useState } from 'react';
// import './TransportationForm.css'; 

// function TransportationForm() {
//   const [formData, setFormData] = useState({
//     guestDetails: {
//       guestName: '',
//       roomNumber: '',
//       isBookingForSomeone: false,
//     },
//     bookerDetails: {
//       station: '',
//       firstName: '',
//       lastName: '',
//       mobileNumber: '',
//       emailAddress: '',
//     },
//     allergens: '',
//     instructions: '',
//     bookingDetails: {
//       cubicle: '',
//       restaurant: '',
//       dateAndTime: '',
//       persons: '',
//     },
//   });

//   const handleChange = (event) => {
//     const { name, value, type } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [type === 'checkbox' ? 'guestDetails' : name]: {
//         ...prevData[type === 'checkbox' ? 'guestDetails' : name],
//         [name]: value,
//       },
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="contact-form">
//       <h2>Guest Details</h2>
//       <div className="form-group">
//         <div className="input-with-dropdown">
//           <input
//             type="text"
//             id="roomNumber"
//             name="guestDetails.roomNumber"
//             placeholder="Room"
//             value={formData.guestDetails.roomNumber}
//             onChange={handleChange}
//           />
//           <div className="dropdown-arrow"></div>
//         </div>
//         <div className="input-with-dropdown">
//           <input
//             type="text"
//             id="salutation"
//             name="guestDetails.salutation"
//             placeholder="Salutation"
//             value={formData.guestDetails.salutation}
//             onChange={handleChange}
//           />
//           <div className="dropdown-arrow"></div>
//         </div>
//         <input
//           type="text"
//           id="firstName"
//           name="guestDetails.firstName"
//           placeholder="First Name"
//           value={formData.guestDetails.firstName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           id="lastName"
//           name="guestDetails.lastName"
//           placeholder='Last Name'
//           value={formData.guestDetails.lastName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           id="mobileNumber"
//           name="guestDetails.mobileNumber"
//           placeholder='Mobile'
//           value={formData.guestDetails.mobileNumber}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           id="emailAddress"
//           name="guestDetails.emailAddress"
//           placeholder='Email'
//           value={formData.guestDetails.emailAddress}
//           onChange={handleChange}
//         />
//       </div>
    
//       <div className="form-group">
//         <label>
//           <input
//             type="checkbox"
//             id="isBookingForSomeone"
//             name="guestDetails.isBookingForSomeone"
//             checked={formData.guestDetails.isBookingForSomeone}
//             onChange={handleChange}
//           />
//           Check Here if you are booking for Someone
//         </label>
//       </div>

//       {formData.guestDetails.isBookingForSomeone && (
//         <div>
//           <h2>Booker Details</h2>
//           <div className="form-group">
//             <input
//               type="text"
//               id="station"
//               name="bookerDetails.station"
//               placeholder="Salutation"
//               value={formData.bookerDetails.station}
//               onChange={handleChange}
//             />
//             <div className="dropdown-arrow"></div>
//           </div>
//           <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="firstName"
//               name="bookerDetails.firstName"
//               placeholder='First Name'
//               value={formData.bookerDetails.firstName}
//               onChange={handleChange}
//             />
//             <div className="dropdown-arrow"></div>
//           </div>
//           <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="lastName"
//               name="bookerDetails.lastName"
//               placeholder='Last Name'
//               value={formData.bookerDetails.lastName}
//               onChange={handleChange}
//             />
//             <div className="dropdown-arrow"></div>
//           </div>
//           <div className="input-with-dropdown">
//             <input
//               type="tel"
//               id="mobileNumber"
//               name="bookerDetails.mobileNumber"
//               placeholder='Mobile Number'
//               value={formData.bookerDetails.mobileNumber}
//               onChange={handleChange}
//             />
//             <div className="dropdown-arrow"></div>
//           </div>
//           <div className="input-with-dropdown">
//             <input
//               type="email"
//               id="emailAddress"
//               name="bookerDetails.emailAddress"
//               placeholder='Email'
//               value={formData.bookerDetails.emailAddress}
//               onChange={handleChange}
//             />
//             <div className="dropdown-arrow"></div>
//           </div>
//         </div>
//       )}

//       <div className="form-group">
//         <textarea
//           id="allergens"
//           name="allergens"
//           value={formData.allergens}
//           onChange={handleChange}
//           placeholder="Other Instructions"
//         />
//       </div>

//       <div>
//           <h2>Booking Details</h2>
//           <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="station"
//               name="bookingDetails.station"
//               placeholder="Outlet"
//               value={formData.bookingDetails.station}
//               onChange={handleChange}
//             />
//             <div className="dropdown-arrow"></div>
//           </div>

//           <div className="input-with-dropdown">
//             <input
//               type="datetime-local"
//               id="dateAndTime"
//               name="bookingDetails.dateAndTime"
//               placeholder="Date & Time"
//               value={formData.bookingDetails.dateAndTime}
//               onChange={handleChange}
//             />
//             <div className="dropdown-arrow"></div>
//           </div>
//             <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="persons"
//               name="bookingDetails.persons"
//               placeholder="Persons"
//               value={formData.bookingDetails.persons}
//               onChange={handleChange}
//             />
//             <div className="dropdown-arrow"></div>
//             </div>
//             <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="services"
//               name="bookingDetails.services"
//               placeholder="Services"
//               value={formData.bookingDetails.services}
//               onChange={handleChange}
//             />
//            <div className="dropdown-arrow"></div>
//            </div>
//            <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="pickUpLocation"
//               name="bookingDetails.pickUpLocation"
//               placeholder="Pick-Up Location"
//               value={formData.bookingDetails.pickUpLocation}
//               onChange={handleChange}
//             />
//            <div className="dropdown-arrow"></div>
//            </div>
//            <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="dropOffLocation"
//               name="bookingDetails.dropOffLocation"
//               placeholder="Drop-Off Location"
//               value={formData.bookingDetails.dropOffLocation}
//               onChange={handleChange}
//             />
//            <div className="dropdown-arrow"></div>
//            </div>
//            <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="flightNumber"
//               name="bookingDetails.flightNumber"
//               placeholder="Flight Number"
//               value={formData.bookingDetails.flightNumber}
//               onChange={handleChange}
//             />
//            <div className="dropdown-arrow"></div>
//            </div>
//            <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="trainNumber"
//               name="bookingDetails.trainNumber"
//               placeholder="Train Number"
//               value={formData.bookingDetails.trainNumber}
//               onChange={handleChange}
//             />
//            <div className="dropdown-arrow"></div>
//            </div>
//            <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="hours"
//               name="bookingDetails.hours"
//               placeholder="Hours"
//               value={formData.bookingDetails.hours}
//               onChange={handleChange}
//             />
//            <div className="dropdown-arrow"></div>
//            </div>
//            <div className="input-with-dropdown">
//             <input
//               type="text"
//               id="vehicleType"
//               name="bookingDetails.vehicleType"
//               placeholder="Vehicle Type"
//               value={formData.bookingDetails.vehicleType}
//               onChange={handleChange}
//             />
//            <div className="dropdown-arrow"></div>
//            </div>
         
//           </div>

//       <button type="submit">Book</button>
//     </form>
//   );
// }

// export default TransportationForm;
