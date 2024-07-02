import React from 'react';
import logo from "./Frame 17.png";
import Icon from "./Group 1621.png";
import Cards from '../Cards/Cards';
import Support from "./fluent_chat-multiple-20-regular.png";
import "./Home.css";
import logo1 from './Frame 17.png';

function Home() {
  return (
    <div className='logo-container'>
      <img src={logo} alt="logo" className='lg' />
      <p className='y_orders'>Your Orders</p>
      <p className='x_english'>English</p>
      <div className="card-container">
           
           <Cards
            image={logo1}
            description="Restaurant & Bar"
           />
           <Cards
            image={logo1}
            description="In Room Dining"
           />
           <Cards
            image={logo1}
            description="Spa & Saloon"
           />
           <Cards
            image={logo1}
            description="Transportation"
           />
           <Cards
            image={logo1}
            description="Valet Service"
           />
           <Cards
            image={logo1}
            description="Laundry"
           />
           <Cards
             image={logo1}
             description="Guest Services"
           />
           <Cards
            image={logo1}
            description="Wake-Up call"
           />
           <Cards
             image={logo1}
             description="Check-In"
           />
           <Cards
             image={logo1}
             description="Check Out"
           />
       </div>
       <img src={Icon} alt="ico" className='icon' />

       <div >
        <p className='name'>Mr. Anirudh Jonnalagadda</p>
       </div>

       <div className='chat'>
          <p>Chat Support</p>
          <p className='sup'>Click to contact our 24/7 chat support team assistance</p>
       </div>

       <div >
         <img src={Support} alt='supp' className='chat-sup' />
       </div>
       

    </div>
  )
}

export default Home;
