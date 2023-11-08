import React from 'react';
import p1 from "../../assets/Polygon 1.png";
import p2 from "../../assets/Polygon 2.png";
import f1 from "../../assets/Rectangle 13.png";
import "./style.css";
function OfferScreen() {
  return (
    <div className='offerScreen'>
      <div className='offerScreen-Box1'> 
       <div className='offerScreen-Box2'>
         Services We Offer
       </div>
       <div className='offerScreen-Box3'>
         <div className='offerScreen-Box3-1'>
            <div className='not'><img className="p1" src={p1} alt="" />   Warehouses of every type and size available</div>
            <div className='not'><img className="p1" src={p2} alt="" /> Multiple locations and various quality grades</div>
            <div className='not'><img className="p1" src={p1} alt="" />Never a situation of non-availability</div>
            <div className='not'><img className="p1" src={p2} alt="" />Choose from many options</div>
            <div className='not'><img className="p1" src={p1} alt="" />Easy to choose</div>
         </div>
         <div className='offerScreen-Box3-2'>
            <div className='para2'><img className="p2" src={p1} alt="" /> A centralized dashboard to view your inventory</div>
            <div className='para2'><img className="p2" src={p2} alt="" /> Simple and uncomplicated process</div>
            <div className='para2'><img className="p2" src={p1} alt="" /> Work with a team of professionals</div>
            <div className='para2'><img className="p2" src={p2} alt="" /> No brokers or brokerage fee</div>
            <div className='para2'><img className="p2" src={p1} alt="" /> Pay for only what you use</div>
         </div>
         
      </div>
      <div className='offerScreen-Box4'>
        <img className="poly" src={f1} alt="" />
      </div>
      </div>
    </div>
  )
}

export default OfferScreen;