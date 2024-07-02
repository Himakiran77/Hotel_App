import React, { useState } from 'react';
import PriceFilter from '../PriceFilter/PriceFilter';
// import bk from "./b2.png";
import bk from "../Menu/b2.png";
// import dropd from "./gridicons_dropdown.png";
import dropd from "../Menu/gridicons_dropdown.png";
// import search from "./Frame 47669.png";
import search from "../Menu/Frame 47669.png";
import icn from "../Home/Group 1621.png";
// import hous from "./Group 1357.png";
import hous from "../Menu/Group 1357.png";
// import clk from "./Clock.png";
import clk from "../Menu/Clock.png";
// import itali from "./Frame 47948.png";
import itali from "../Menu/Frame 47948.png";
// import japane from "./Frame 47948 (1).png";
import japane from "../Menu/Frame 47948 (1).png";
// import india from "./Frame 47948 (2).png";
import india from "../Menu/Frame 47948 (2).png";
// import soud from "./Frame 47948 (3).png";
import soud from "../Menu/Frame 47948 (3).png";
// import africa from "./Frame 47948 (4).png";
import africa from "../Menu/Frame 47948 (4).png";
// import junk from "./Frame 47948 (5).png";
import junk from "../Menu/Frame 47948 (5).png";
// import Veg from "./Veg Icon.png";
import Veg from "../Menu/Veg Icon.png";
// import stic from "./Frame 47937.png";
import stic from "../Menu/Frame 47937.png";
// import rupee from "./ph_currency-inr.png";
import rupee from "../Menu/ph_currency-inr.png";
// import vect from "./Vector.png";
import vect from "../Menu/Vector.png";
// import G17 from "./Group 1777.png";
import G17 from "../Menu/Group 1777.png";
// import cart from "./image 286.png";
import cart from "../Menu/image 286.png";
// import dot from "./Group 884.png";
import dot from "../Menu/Group 884.png";
import "../Menu/Menu.css";
import Itemcard from '../Itemcard/Itemcard';
import Book_menu from '../Book_menu/Book_menu';

function Wakeupcall() {
    const [showPriceFilter, setShowPriceFilter] = useState(false);
    const [showItemcard, setItemcard] = useState(false);
    const [showBookmenu, setBookmenu] = useState(false);

    const handleSearchClick = () => {
        setShowPriceFilter(!showPriceFilter); 
      };
    const handleSearchClick1 = () => {
        setItemcard(!showItemcard);
    }
    const handleSearchClick2 = () => {
        setBookmenu(!showBookmenu);
    }
    return (
        <>
        <div>
            <img src={bk} alt="logo" className='bk' />
            <p className='nm'>Wake-Up-Call</p>
            <img src={dropd} alt="logo" className='dd' />
            <div className="menu-container">
            <img src={search} alt="logo" className='sh' onClick={handleSearchClick}/>
            {showPriceFilter && (
            // <div className="popup">
            <div className={`popup ${showPriceFilter ? 'show' : ''}`}>
              <PriceFilter />
            </div>
          )}
            </div>
            <img src={icn} alt="logo" className='ic' />
            <p className='nm1'>Mr. Anirudh Jonnalagadda</p>
            <img src={hous} alt="logo" className='hou' />
        </div>
        <div className='component5'>
            <p className='Brkfst'>Breakfast</p>
            <p className='Brch'>Brunch</p>
            <p className='lunh'>Lunch</p>
            <p className='dinnr'>Dinner</p>
            <div className='tt1'>
                <div className='tt2'>
                    <img src={clk} alt="logo" className='clock' />
                    <p className='available'>Available from 6AM - 9AM</p>
                </div>
             </div>
        </div> 
            <div className='L1415'>
                <p className='food'>Indian</p>
                <p className='bevarage'>Italian</p>
                <p className='kids'>Pan Asian</p>
                <p className='SouthInd'>South Indian</p>
                <div className='line46'>
                </div>
            </div>
            <div className='L1775'>
                <div className='F47924'>
                    <p className='italian'>Italian</p>
                    <p className='japanese'>Japanese</p>
                    <p className='indian'>Indian</p>
                    <p className='soup'>Soup</p>
                    <p className='african'>African</p>
                    <p className='junks'>Junks</p>
                    <div className='F47922'>
                        <img src={itali} alt="logo" className='F47948' />
                        <img src={japane} alt="logo" className='F47949' />
                        <img src={india} alt="logo" className='F47950' />
                        <img src={soud} alt="logo" className='F47951' />
                        <img src={africa} alt="logo" className='F47952' />
                        <img src={junk} alt="logo" className='F47953' />
                    </div>
                </div>
    
            </div>
    
            <div className='F48346'>
              {/* <p className='ital'>Italian</p> */}
                <div className='Line11'>
                <div className='Line12'>
                </div>
                </div>
            </div>
    
           {/* First two Cards */}
            <div className='G1787'>
                <div className='G2332'>
                       <img src={G17} alt="logo" className='G1777' />
                    <div className='G1778'>
                        <div className='F47933'>
                            <div className='containsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='Veg' />
                                <img src={stic} alt="logo" className='F47937' />
                                <div className='F47932'>
                                    <text className='txt'>16 Mins</text>
                                  <div className='line9'>
                                      <text className='txt1'>20 KCal.</text>
                                      <text className='txt2'>American Cheese hamburger</text>  
                                     <div className='F48395'>
                                         <div className='F47940'>
                                             <img src={rupee} alt="logo" className='inr' />
                                             <text className='r200'>200</text>
                                             <div className="menu-container">
                                             <img src={vect} alt="logo" className='vector' onClick={handleSearchClick1} />
                                             {showItemcard && (
            
                                             <div className={`popup ${showItemcard ? 'show' : ''}`}>
                                               <Itemcard />
                                             </div>
                                              )}
                                             </div>
                                         </div>
                                     </div>
    
                        
                       <img src={G17} alt="logo" className='SG1777' />
                        <div className='SF47933'>
                            <div className='ScontainsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='SVeg' />
                                <img src={stic} alt="logo" className='SF47937' />
                                <div className='SF47932'>
                                    <text className='Stxt'>16 Mins</text>
                                    <div className='Sline9'>
                                    <text className='Stxt1'>20 KCal.</text>
                                    <text className='Stxt2'>American Cheese hamburger</text>  
                                    <div className='SF48395'>
                                        <div className='SF47940'>
                                            <img src={rupee} alt="logo" className='Sinr' />
                                            <text className='Sr200'>200</text>
                                            <div className="menu-container">
                                            <img src={vect} alt="logo" className='Svector' onClick={handleSearchClick1} />
                                            {showItemcard && (
            
            <div className={`popup ${showItemcard ? 'show' : ''}`}>
              <Itemcard />
            </div>
             )}
            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
    
                      {/* Second two Cards */}
                    <img src={G17} alt="logo" className='TG1777' />
                    <div className='TG1778'>
                        <div className='TF47933'>
                            <div className='TcontainsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='TVeg' />
                                <img src={stic} alt="logo" className='TF47937' />
                                <div className='TF47932'>
                                    <text className='Ttxt'>16 Mins</text>
                                  <div className='Tline9'>
                                      <text className='Ttxt1'>20 KCal.</text>
                                      <text className='Ttxt2'>American Cheese hamburger</text>  
                                     <div className='TF48395'>
                                         <div className='TF47940'>
                                             <img src={rupee} alt="logo" className='Tinr' />
                                             <text className='Tr200'>200</text>
                                             <img src={vect} alt="logo" className='Tvector' />
                                         </div>
                                     </div>
    
                                     <img src={G17} alt="logo" className='TSG1777' />
                                     <div className='TSF47933'>
                            <div className='TScontainsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='TSVeg' />
                                <img src={stic} alt="logo" className='TSF47937' />
                                <div className='TSF47932'>
                                    <text className='TStxt'>16 Mins</text>
                                    <div className='TSline9'>
                                    <text className='TStxt1'>20 KCal.</text>
                                    <text className='TStxt2'>American Cheese hamburger</text>  
                                    <div className='TSF48395'>
                                        <div className='TSF47940'>
                                            <img src={rupee} alt="logo" className='TSinr' />
                                            <text className='TSr200'>200</text>
                                            <img src={vect} alt="logo" className='TSvector' />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                                 </div>
                                </div>
                            </div>
                       
    
            {/* Third Two Cards */}
    
            <img src={G17} alt="logo" className='TTG1777' />
                    <div className='TTG1778'>
                        <div className='TTF47933'>
                            <div className='TTcontainsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='TTVeg' />
                                <img src={stic} alt="logo" className='TTF47937' />
                                <div className='TTF47932'>
                                    <text className='TTtxt'>16 Mins</text>
                                  <div className='TTline9'>
                                      <text className='TTtxt1'>20 KCal.</text>
                                      <text className='TTtxt2'>American Cheese hamburger</text>  
                                     <div className='TTF48395'>
                                         <div className='TTF47940'>
                                             <img src={rupee} alt="logo" className='TTinr' />
                                             <text className='TTr200'>200</text>
                                             <img src={vect} alt="logo" className='TTvector' />
                                         </div>
                                     </div>
    
                                     <img src={G17} alt="logo" className='TTSG1777' />
                                     <div className='TTSF47933'>
                            <div className='TTScontainsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='TTSVeg' />
                                <img src={stic} alt="logo" className='TTSF47937' />
                                <div className='TTSF47932'>
                                    <text className='TTStxt'>16 Mins</text>
                                    <div className='TTSline9'>
                                    <text className='TTStxt1'>20 KCal.</text>
                                    <text className='TTStxt2'>American Cheese hamburger</text>  
                                    <div className='TTSF48395'>
                                        <div className='TTSF47940'>
                                            <img src={rupee} alt="logo" className='TTSinr' />
                                            <text className='TTSr200'>200</text>
                                            <img src={vect} alt="logo" className='TTSvector' />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                                 </div>
                                </div>
                            </div>
           {/* Fourth two cards */}
    
           <img src={G17} alt="logo" className='FTTG1777' />
                    <div className='FTTG1778'>
                        <div className='FTTF47933'>
                            <div className='FTTcontainsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='FTTVeg' />
                                <img src={stic} alt="logo" className='FTTF47937' />
                                <div className='FTTF47932'>
                                    <text className='FTTtxt'>16 Mins</text>
                                  <div className='FTTline9'>
                                      <text className='FTTtxt1'>20 KCal.</text>
                                      <text className='FTTtxt2'>American Cheese hamburger</text>  
                                     <div className='FTTF48395'>
                                         <div className='FTTF47940'>
                                             <img src={rupee} alt="logo" className='FTTinr' />
                                             <text className='FTTr200'>200</text>
                                             <img src={vect} alt="logo" className='FTTvector' />
                                         </div>
                                     </div>
    
                                     <img src={G17} alt="logo" className='S4G1777' />
                        <div className='S4F47933'>
                            <div className='S4containsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='S4Veg' />
                                <img src={stic} alt="logo" className='S4F47937' />
                                <div className='S4F47932'>
                                    <text className='S4txt'>16 Mins</text>
                                    <div className='S4line9'>
                                    <text className='S4txt1'>20 KCal.</text>
                                    <text className='S4txt2'>American Cheese hamburger</text>  
                                    <div className='S4F48395'>
                                        <div className='S4F47940'>
                                            <img src={rupee} alt="logo" className='S4inr' />
                                            <text className='S4r200'>200</text>
                                            <img src={vect} alt="logo" className='S4vector' />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                     {/* Fifth card */}
                        <img src={G17} alt="logo" className='S5G1777' />
                        <div className='S5F47933'>
                            <div className='S5containsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='S5Veg' />
                                <img src={stic} alt="logo" className='S5F47937' />
                                <div className='S5F47932'>
                                    <text className='S5txt'>16 Mins</text>
                                    <div className='S5line9'>
                                    <text className='S5txt1'>20 KCal.</text>
                                    <text className='S5txt2'>American Cheese hamburger</text>  
                                    <div className='S5F48395'>
                                        <div className='S5F47940'>
                                            <img src={rupee} alt="logo" className='S5inr' />
                                            <text className='S5r200'>200</text>
                                            <img src={vect} alt="logo" className='S5vector' />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <img src={G17} alt="logo" className='S6G1777' />
                        <div className='S6F47933'>
                            <div className='S6containsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='S6Veg' />
                                <img src={stic} alt="logo" className='S6F47937' />
                                <div className='S6F47932'>
                                    <text className='S6txt'>16 Mins</text>
                                    <div className='S6line9'>
                                    <text className='S6txt1'>20 KCal.</text>
                                    <text className='S6txt2'>American Cheese hamburger</text>  
                                    <div className='S6F48395'>
                                        <div className='S6F47940'>
                                            <img src={rupee} alt="logo" className='S6inr' />
                                            <text className='S6r200'>200</text>
                                            <img src={vect} alt="logo" className='S6vector' />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* sixth card */}
    
                        <img src={G17} alt="logo" className='S7G1777' />
                        <div className='S7F47933'>
                            <div className='S7containsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='S7Veg' />
                                <img src={stic} alt="logo" className='S7F47937' />
                                <div className='S7F47932'>
                                    <text className='S7txt'>16 Mins</text>
                                    <div className='S7line9'>
                                    <text className='S7txt1'>20 KCal.</text>
                                    <text className='S7txt2'>American Cheese hamburger</text>  
                                    <div className='S7F48395'>
                                        <div className='S7F47940'>
                                            <img src={rupee} alt="logo" className='S7inr' />
                                            <text className='S7r200'>200</text>
                                            <img src={vect} alt="logo" className='S7vector' />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
    
                        <img src={G17} alt="logo" className='S8G1777' />
                        <div className='S8F47933'>
                            <div className='S8containsD'>
                                <text>*Contains Dairy</text>
                                <img src={Veg} alt="logo" className='S8Veg' />
                                <img src={stic} alt="logo" className='S8F47937' />
                                <div className='S8F47932'>
                                    <text className='S8txt'>16 Mins</text>
                                    <div className='S8line9'>
                                    <text className='S8txt1'>20 KCal.</text>
                                    <text className='S8txt2'>American Cheese hamburger</text>  
                                    <div className='S8F48395'>
                                        <div className='S8F47940'>
                                            <img src={rupee} alt="logo" className='S8inr' />
                                            <text className='S8r200'>200</text>
                                            <img src={vect} alt="logo" className='S8vector' />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
    
                                     
                    </div>
                </div>
    
    
                                 </div>
                                </div>
                            </div>
    
    
                            <div className='Rectangle1292'>
                            
                        </div>
    
                        <div className='F47946'>
                            {/* <text className='book'>Book</text> */}
                         {/* <div className="menu-container"> */}
                         <div>
                            <button type='submit' onClick={handleSearchClick2} >Book</button>
                            { showBookmenu && (
            
                             <div className={`popup2 ${ showBookmenu ? 'show' : ''}`}>
                                <Book_menu />
                              </div>
                              )}
                             </div>
    
                             {/* <div> */}
                            <img src={cart} alt="logo" className='img286'  />
                            {/* { showTransportForm && (
            
                             <div className={`popup2 ${ showTransportForm ? 'show' : ''}`}>
                               <TransportationForm />
                             </div>
                                )}
                            </div> */}
                        </div>
    
                        <img src={dot} alt="logo" className="Doot" />
                        
    
                
        </>
        
      )
    }
    
    
    export default Wakeupcall;

