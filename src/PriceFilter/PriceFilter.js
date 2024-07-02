// import React, { useState } from 'react';

// const PriceFilter = () => {
//   const [sortBy, setSortBy] = useState('');

//   const handleApplyFilters = () => {
//     console.log('Filters applied:', sortBy);
//   };

//   const handleClearAll = () => {
//     setSortBy('');
//   };

//   return (
//     <div className="filters-and-sorting">
//       <h3>Filters & Sorting</h3>
//       <div className="filter-row">
//         <label htmlFor="dietary-preference">Dietary Preference</label>
//       </div>
//       <div className="filter-row">
//         <label htmlFor="Allergens">Allergens</label>
//       </div>
//       <div className="filter-row">
//     <label htmlFor="Spice Level">Spice Level</label> 
//       </div>
      
//       <div className="sort-by-row">
        
//         <label htmlFor="sort-by">Sort By</label>
//         {sortBy && (
//           <span>
//             {sortBy === 'lowToHigh' ? 'Price Low to High' : 'Price High to Low'}
//           </span>
//         )}
//       </div>
//       <div className="button-row">
//         <button onClick={handleApplyFilters}>Apply</button>
//         <button onClick={handleClearAll}>Clear All</button>
//       </div>
//     </div>
//   );
// };

// export default PriceFilter;


// import React, { useState } from 'react';



// const PriceFilter = () => {
//   const [sortBy, setSortBy] = useState('');
//   const [showSortOptions, setShowSortOptions] = useState(false);

//   const handleSortByChange = (event) => {
//     setSortBy(event.target.value);
//     setShowSortOptions(false);
//   };

//   const toggleSortOptions = () => {
//     setShowSortOptions(!showSortOptions);
//   };

//   const handleApplyFilters = () => {
//     console.log('Filters applied:', sortBy);
//   };

//   const handleClearAll = () => {
//    setSortBy('');
//   };

//   return (
//     <div className="filters-and-sorting">
//       <h3>Filters & Sorting</h3>
//       <div className="filter-row">
//         <label htmlFor="dietary-preference">Dietary Preference</label>
//       </div>
//       <div className="filter-row">
//         <label htmlFor="Allergens">Allergens</label>
//       </div>
//       <div className="filter-row">
//         <label htmlFor="Spice Level">Spice Level</label>
//       </div>
//       <div className="sort-by-row">
//         <label htmlFor="sort-by" onClick={toggleSortOptions}>
//           Sort By {sortBy && (sortBy === 'lowToHigh' ? 'Price Low to High' : 'Price High to Low')}
//         </label>
//         {showSortOptions && (
//           <div className="sort-options">
//             <button value="lowToHigh" onClick={handleSortByChange}>Price Low to High</button>
//             <button value="highToLow" onClick={handleSortByChange}>Price High to Low</button>
//           </div>
//         )}
//       </div>
//       <div className="button-row">
//         <button onClick={handleApplyFilters}>Apply</button>
//         <button onClick={handleClearAll}>Clear All</button>
//       </div>
//     </div>
//   );
// };

// export default PriceFilter;



// import React, { useState } from 'react';

// const PriceFilter = () => {
//   const [sortBy, setSortBy] = useState('');
//   const [showSortOptions, setShowSortOptions] = useState(false);
//   const [showSpiceLevel, setShowSpiceLevel] = useState(false);
//   const [showAllergens, setShowAllergens] = useState(false);

//   const handleSortByChange = (event) => {
//     setSortBy(event.target.value);
//     setShowSortOptions(false); 
//   };

//   const toggleSortOptions = () => {
//     setShowSortOptions(!showSortOptions);
//   };

//   const handleSpiceLevelChange = (event) => {
//     console.log('Spice Level selected:', event.target.value);
//     setShowSpiceLevel(false); 
//   };

//   const toggleSpiceLevel = () => {
//     setShowSpiceLevel(!showSpiceLevel);
//   };

//   const handleAllergenChange = (event) => {
//     console.log('Allergen selected:', event.target.value);
//     setShowAllergens(false); 
//   };

//   const toggleAllergens = () => {
//     setShowAllergens(!showAllergens);
//   };

//   const handleApplyFilters = () => {
//     console.log('Filters applied:', sortBy);
//   };

//   const handleClearAll = () => {
//     setSortBy('');
//     setShowSortOptions(false);
//     setShowSpiceLevel(false);
//     setShowAllergens(false);
//   };

//   return (
//     <div className="filters-and-sorting">
//       <h3>Filters & Sorting</h3>
//       <div className="filter-row">
//         <label htmlFor="dietary-preference">Dietary Preference</label>
//       </div>
//       <div className="filter-row">
//         <label htmlFor="Allergens" onClick={toggleAllergens}>
//           Allergens: {showAllergens && 'Visible'}
//         </label>
//         {showAllergens && (
//           <div className="filter-options">
//             <button value="glutenFree" onClick={handleAllergenChange}>
//               Gluten Free
//             </button>
//             <button value="dairyFree" onClick={handleAllergenChange}>
//               Dairy Free
//             </button>
//             <button value="fishShellfishFree" onClick={handleAllergenChange}>
//               Fish/Shell Fish Free
//             </button>
//             <button value="nutsFree" onClick={handleAllergenChange}>
//               Nuts Free
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="filter-row">
//         <label htmlFor="Spice Level" onClick={toggleSpiceLevel}>
//           Spice Level: {showSpiceLevel && 'Visible'}
//         </label>
//         {showSpiceLevel && (
//           <div className="filter-options">
//             <button value="zero" onClick={handleSpiceLevelChange}>
//               Zero
//             </button>
//             <button value="low" onClick={handleSpiceLevelChange}>
//               Low
//             </button>
//             <button value="medium" onClick={handleSpiceLevelChange}>
//               Medium
//             </button>
//             <button value="high" onClick={handleSpiceLevelChange}>
//               High
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="sort-by-row">
//         <label htmlFor="sort-by" onClick={toggleSortOptions}>
//           Sort By: {sortBy && (sortBy === 'lowToHigh' ? 'Price Low to High' : 'Price High to Low')}
//         </label>
//         {showSortOptions && (
//           <div className="sort-options">
//             <button value="lowToHigh" onClick={handleSortByChange}>
//               Price Low to High
//             </button>
//             <button value="highToLow" onClick={handleSortByChange}>
//               Price High to Low
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="button-row">
//         <button onClick={handleApplyFilters}>Apply</button>
//         <button onClick={handleClearAll}>Clear All</button>
//         </div>
//      </div>
//    );
//  };

//  export default PriceFilter;


import "./PriceFilter.css";
 import React, { useState } from 'react';

const PriceFilter = () => {
  const [sortBy, setSortBy] = useState('');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showSpiceLevel, setShowSpiceLevel] = useState(false);
  const [showAllergens, setShowAllergens] = useState(false);
  const [showDietaryPreference, setShowDietaryPreference] = useState(false);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    setShowSortOptions(false); // Hide options after selection
  };

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const handleSpiceLevelChange = (event) => {
    console.log('Spice Level selected:', event.target.value);
    setShowSpiceLevel(false); // Hide options after selection (optional)
  };

  const toggleSpiceLevel = () => {
    setShowSpiceLevel(!showSpiceLevel);
  };

  const handleAllergenChange = (event) => {
    console.log('Allergen selected:', event.target.value);
    setShowAllergens(false); // Hide options after selection (optional)
  };

  const toggleAllergens = () => {
    setShowAllergens(!showAllergens);
  };

  const handleDietaryPreferenceChange = (event) => {
    // Implement logic to handle dietary preference selection (optional)
    console.log('Dietary Preference selected:', event.target.value);
    setShowDietaryPreference(false); // Hide options after selection (optional)
  };

  const toggleDietaryPreference = () => {
    setShowDietaryPreference(!showDietaryPreference);
  };

  const handleApplyFilters = () => {
    console.log('Filters applied:', sortBy);
    // Implement logic to apply filters based on sortBy, spice level, allergens, and dietary preference
  };

  const handleClearAll = () => {
    setSortBy('');
    setShowSortOptions(false);
    setShowSpiceLevel(false);
    setShowAllergens(false);
    setShowDietaryPreference(false);
  };

  return (
    <div className="filters-and-sorting">
      <h3>Filters & Sorting</h3>
      <div className="filter-row1">
        <label htmlFor="dietary-preference" onClick={toggleDietaryPreference}>
          Dietary Preference {showDietaryPreference }
        </label>
        {showDietaryPreference && (
          <div className="filter-options1">
            <button value="veg" onClick={handleDietaryPreferenceChange}>
              Veg
            </button>
            <button value="nonVeg" onClick={handleDietaryPreferenceChange}>
              Non-Veg
            </button>
            <button value="egg" onClick={handleDietaryPreferenceChange}>
              Egg
            </button>
            <button value="vegan" onClick={handleDietaryPreferenceChange}>
              Vegan
            </button>
            <button value="jain" onClick={handleDietaryPreferenceChange}>
              Jain
            </button>
            <button value="sugarFree" onClick={handleDietaryPreferenceChange}>
              Sugar Free
            </button>
            <button value="gelatineFree" onClick={handleDietaryPreferenceChange}>
              Gelatine Free
            </button>
            <button value="kosher" onClick={handleDietaryPreferenceChange}>
              Kosher
            </button>
            <button value="halal" onClick={handleDietaryPreferenceChange}>
              Halal
            </button>
            <button value="lowCarb" onClick={handleDietaryPreferenceChange}>
              Low Carb
            </button>
            <button value="keto" onClick={handleDietaryPreferenceChange}>
              Keto
            </button>
          </div>
        )}
      </div>
      <div className="filter-row2">
        <label htmlFor="Allergens" onClick={toggleAllergens}>
          Allergens {showAllergens}
        </label>
        {showAllergens && (
          <div className="filter-options2">
            <button value="glutenFree" onClick={handleAllergenChange}>
              Gluten Free
            </button>
            <button value="dairyFree" onClick={handleAllergenChange}>
              Dairy Free
            </button>
            <button value="fishShellfishFree" onClick={handleAllergenChange}>
              Fish/Shell Fish Free
            </button>
            <button value="nutsFree" onClick={handleAllergenChange}>
              Nuts Free
            </button>
          </div>
        )}
      </div>
      <div className="filter-row3">
        <label htmlFor="Spice Level" onClick={toggleSpiceLevel}>
          Spice Level {showSpiceLevel}
        </label>
        {showSpiceLevel && (
          <div className="filter-options3">
            <button value="zero" onClick={handleSpiceLevelChange}>
              Zero
            </button>
            <button value="low" onClick={handleSpiceLevelChange}>
              Low
            </button>
            <button value="medium" onClick={handleSpiceLevelChange}>
              Medium
            </button>
            <button value="high" onClick={handleSpiceLevelChange}>
              High
            </button>
          </div>
        )}
      </div>
      <div className="sort-by-row">
        <label htmlFor="sort-by" onClick={toggleSortOptions}>
          Sort By {sortBy && (sortBy === 'lowToHigh' ? 'Price Low to High' : 'Price High to Low')}
        </label>
        {showSortOptions && (
          <div className="sort-options">
            <button value="lowToHigh" onClick={handleSortByChange}>
              Price Low to High
            </button>
            <button value="highToLow" onClick={handleSortByChange}>
              Price High to Low
            </button>
          </div>
        )}
      </div>
      <div className="button-row">
        <button onClick={handleApplyFilters}>Apply</button>
        <button onClick={handleClearAll}>Clear All</button>
        </div>
     </div>
   );
 };

 export default PriceFilter;
