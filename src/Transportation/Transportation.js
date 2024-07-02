import React from 'react';
import logo from '../Home/Frame 17.png';
import Back from '../Restaurant & Bar/Back arrow.png';
import house from '../Restaurant & Bar/Home.png';
import Icon1 from "../Home/Group 1621.png";
import logo1 from '../Home/Frame 17.png';
import Cards from '../Cards/Cards';
import "./Transportation.css";



 function Transportation() {
  
  return (
    <div className='logo-container'>
      <img src={logo} alt="logo" className='lg' />
      <img src={Back} alt="logo" className='back' />
      <img src={house} alt="logo" className='house' />
      <div >
        <p className='name'>Transportation</p>
       </div>
       <img src={Icon1} alt="logo" className='icon1' />
       <div >
        <p className='name1'>Mr. Anirudh Jonnalagadda</p>
       </div>

       <div className="card-container">
           
           <Cards
            image={logo1}
            description="Airport Pick-Up"
           />
           <Cards
            image={logo1}
            description="Airport Drop Off"
           />
           <Cards
            image={logo1}
            description="Railway Station Pick-Up"
           />
           <Cards
            image={logo1}
            description="Railway Station Drop Off"
           />
           <Cards
            image={logo1}
            description="Office Pick-Up"
           />
           <Cards
            image={logo1}
            description="Office Drop Off"
           />
           <Cards
             image={logo1}
             description="Local Rental"
           />
           <Cards
            image={logo1}
            description="Outstation Rental"
           />
           
       </div>

      
    
       </div>
       )
       }

       export default Transportation;


// import React, { useState } from 'react';
// import logo from '../Home/Frame 17.png';
// import Back from '../Restaurant & Bar/Back arrow.png';
// import house from '../Restaurant & Bar/Home.png';
// import Icon1 from "../Home/Group 1621.png";
// import logo1 from '../Home/Frame 17.png';
// import Cards from '../Cards/Cards';
// import TransportationForm from '../TransportationForm/TransportionForm';
// import "./Transportation.css";

// function Transportation() {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSearchClick3 = () => {
//         showPopup(!setShowPopup);
//      }

//   return (
//     <div className='logo-container'>
//       <img src={logo} alt="logo" className='lg' />
//       <img src={Back} alt="logo" className='back' />
//       <img src={house} alt="logo" className='house' />
//       <div >
//         <p className='name'>Transportation</p>
//        </div>
//        <img src={Icon1} alt="logo" className='icon1' />
//        <div >
//         <p className='name1'>Mr. Anirudh Jonnalagadda</p>
//        </div>

//        <div className="card-container">
           
//            <Cards
//             image={logo1}
//             description="Airport Pick-Up"
//             onClick={handleSearchClick3}
//            />

//            { showPopup && (
        
//         <div className={`popup2 ${ showPopup ? 'show' : ''}`}>
//           <TransportationForm />
//         </div>
//            )}
           
//        </div>
//     </div>
//   );
// }

// export default Transportation;
