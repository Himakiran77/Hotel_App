// import React from 'react'
// import rectangle25 from "../Rectangle 25.png";
// import "./Card.css";

//  function Card() {
//   return (
//     <>
//     <div className='layout'>
//          <img src={rectangle25} alt="logo" className='rect25' />
//          </div>
//        <div className='grp1353'> 
//        <p>The combination of the salty, smoky pork, creamy egg sauce, and sharp cheese yields a taste that is both comforting and satisfying. Spaghe cheese Read More</p>
       

//        <div className='frame47493'>
//         <p>Madras Cafe</p>
//         </div>

//         <div className='open-hrs'>
//             <p>Opening hours</p>
//         </div>

//         <div className='bfast'>
//             <p>Breakfast - Available from 6AM - 9AM</p>
//             <p>Lunch - Available from 6AM - 9AM</p>
//             <p>Breakfast - Available from 6AM - 9AM</p>
//         </div>

//         <div className='frame47490'>

//             <div className='frame33'>
//                 <p>View Menu</p>
//             </div>

//             <div className='frame47463'>
//                 <p>Book A Table</p>
//             </div>

//         </div>
//        </div>
         

//     </>
    
//   )
// }

// export default Card;

import React from 'react';
import "./Card.css";

const Card = ({image,description,restaurantName,openingHours,breakfastHours,lunchHours,dinnerHours,viewMenu,bookTable}) => {

  return (
    <div className='layout'>
      <img src={image} alt="logo" className='rect25' />
      <div className='grp1353'> 
        <p>{description}</p>

        <div className='frame47493'>
          <p>{restaurantName}</p>
        </div>

        <div className='open-hrs'>
          <p>{openingHours}</p>
        </div>

        <div className='bfast'>
          <p>{breakfastHours}</p>
          <p>{lunchHours}</p>
          <p>{dinnerHours}</p>
        </div>

        <div className='frame47490'>
          <div className='frame33'>
            <p>{viewMenu}</p>
          </div>
          <div className='frame47463'>
            <p>{bookTable}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
