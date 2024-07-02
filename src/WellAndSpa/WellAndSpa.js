import React from 'react';
import logo from '../Home/Frame 17.png';
import Back from '../Restaurant & Bar/Back arrow.png';
import house from '../Restaurant & Bar/Home.png';
import Icon1 from "../Home/Group 1621.png";
import Down from "../Restaurant & Bar/Down arrow.png";
import Card from '../Restaurant & Bar/Card/Card';
import rectangle25 from "../Restaurant & Bar/Rectangle 25.png";
import '../Restaurant & Bar/Restaurant.css';

 function WellAndSpa() {
  return (
    <div className='logo-container'>
      <img src={logo} alt="logo" className='lg' />
      <img src={Back} alt="logo" className='back' />
      <img src={house} alt="logo" className='house' />
      <div >
        <p className='name'>Wellness & Spa</p>
       </div>
       <img src={Icon1} alt="logo" className='icon1' />
       <div >
        <p className='name1'>Mr. Anirudh Jonnalagadda</p>
       </div>

       <div className="card-container">
       <Card 
        image={rectangle25}
        description="The combination of the salty, smoky pork, creamy egg sauce, and sharp cheese yields a taste that is both comforting and satisfying. Spaghe cheese Read More"
        restaurantName="Jiva Spa"
        openingHours="Opening hours"
        breakfastHours="Available from 6AM - 9AM"
        // lunchHours="Lunch - Available from 12PM - 3PM"
        // dinnerHours="Dinner - Available from 6PM - 10PM"
        viewMenu="View Menu"
        bookTable="Book A Table"
      />
      <Card 
        image={rectangle25}
        description="The combination of the salty, smoky pork, creamy egg sauce, and sharp cheese yields a taste that is both comforting and satisfying. Spaghe cheese Read More"
        restaurantName="Salon"
        openingHours="Opening hours"
        breakfastHours="Available from 6AM - 9AM"
        // lunchHours="Lunch - Available from 12PM - 3PM"
        // dinnerHours="Dinner - Available from 6PM - 10PM"
        viewMenu="View Menu"
        bookTable="Book A Table"
      />
      <Card 
        image={rectangle25}
        description="The combination of the salty, smoky pork, creamy egg sauce, and sharp cheese yields a taste that is both comforting and satisfying. Spaghe cheese Read More"
        restaurantName="FitnessCentre"
        openingHours="Opening hours"
        breakfastHours="Available from 6AM - 9AM"
        // lunchHours="Lunch - Available from 12PM - 3PM"
        // dinnerHours="Dinner - Available from 6PM - 10PM"
        viewMenu="View Menu"
        bookTable="Book A Table"
      />    
      </div>
      
      <div>
      <img src={Down} alt="logo" className='Darrow' />
      </div>
    
     </div> 
  )
}


export default WellAndSpa;