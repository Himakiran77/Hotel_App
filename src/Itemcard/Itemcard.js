import React from 'react';
import "./Itemcard.css";
import itemcard from "./Itemcard.png";

function Itemcard() {
  return (
    <div className="card">
      <div className="card-image">
        <img src={itemcard} alt="Card Image" />
      </div>
      <div className="card-content">
        <h3>American Cheese Hamburger</h3>
        <p>
          Indulge in the ultimate American burger experience! Sink your teeth
          into a perfectly seasoned and flame-grilled beef patty, nestled within
          a toasted brioche bun that's both soft and slightly crispy. Each bite
          is a symphony of flavors-the juicy patty, melty American cheese,
          tangy pickles, crisp lettuce, and our signature sauce come together in
          perfect harmony.
        </p>
        <div className="card-meta">
          <p>Dietary Preference: Gelatine Free, Halal</p>
          <p>Allergens: Gluten Free, Dairy Free</p>
          <p>Spice Level: Zero/Low</p>

          <p>16 Mins | 20 KCal.</p>
        <p>₹500</p>
        <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Itemcard;
