import React from 'react';
import { Link} from 'react-router-dom';
import log1 from "../../assets/depotx logo 1.png";
import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import m1 from "../../assets/Group 223781.png";
import loc1 from "../../assets/location-outline.png";
import "./style.css";

function WebsiteFooter() {
  return (
    <div className='websiteFooter'>
      <div className='websiteFooter-Box'>
       <div className='Box'>
        <div className='websiteFooter-Box1'>
          <div className='box1'>
           <img className="log1" src={ log1 } alt="" /> 
          </div>
          <div className='icons'>
            <img className="icon" src={ icon } alt="" /> 
            <img className="icon" src={ icon1} alt="" /> 
            <img className="icon" src={ icon2} alt="" /> 
            <img className="icon" src={ icon3 } alt="" /> 
          </div>
          <div className='mes'>
            <div className='mes1'><img className="me1" src={ m1 } alt=""  /> support@depotx.com </div>
            <div className='mes1'><img className="me1" src={ m1 } alt="" /> sales@depotx.com</div>
            <div className='mes1'><img className="me1" src={ loc1 } alt="" /> Calicut, Kerala, India 8560545 </div>
          </div>
        </div>
        <div className='websiteFooter-Box2'>
          <div className='info1'>Services</div>
          <div className='info2'>Pricing</div>
          <div className='info2'>Track Order</div>
          <div className='info2'>Platform</div>
          <div className='info2'>Products</div>
          <div className='info2'>Resources</div>
          <div className='info2'>Partners</div>
        </div>
        <div className='websiteFooter-Box3'>
          <div className='fe1'>Features</div>
          <div className='fe2'>Cash on Delivery</div>
          <div className='fe2'>Serviceable Pin Codes</div>
          <div className='fe2'>API Integration</div>
          <div className='fe2'>Multiple Pickup Locations</div>
          <div className='fe2'>Print Shipping Labels</div>
          <div className='fe2'>Email & SMS Notifications</div>
          <div className='fe2'>Amazon Self-Ship</div>
          <div className='fe2'>All Features</div>

        </div>
       </div> 
      </div>
      <div className='websiteFooter-Boxsmall'>
        Copyright © 2022 Cargoz FZE. All rights reserved.
      </div>
    </div>
  )
}

export default WebsiteFooter;

{/* <div className='websiteFooter'>
     <div className='websiteFooter-Boxmain'>
      <div className='websiteFooter-Box'>
        <div className='websiteFooter-Box1'>
          <div className='box1'>
           <img className="log1" src={ log1 } alt="" /> 
          </div>
          <div className='icons'>
            <img className="icon" src={ icon } alt="" /> 
            <img className="icon" src={ icon1} alt="" /> 
            <img className="icon" src={ icon2} alt="" /> 
            <img className="icon" src={ icon3 } alt="" /> 
          </div>
          <div className='mes'>
            <div className='mes1'><img className="me1" src={ m1 } alt=""  /> support@depotx.com </div>
            <div className='mes1'><img className="me1" src={ m1 } alt="" /> sales@depotx.com</div>
            <div className='mes1'><img className="me1" src={ loc1 } alt="" /> Calicut, Kerala, India 8560545 </div>
          </div>
        </div>
        <div className='websiteFooter-Box2'>
          <div className='info1'>Services</div>
          <div className='info2'>Pricing</div>
          <div className='info2'>Track Order</div>
          <div className='info2'>Platform</div>
          <div className='info2'>Products</div>
          <div className='info2'>Resources</div>
          <div className='info2'>Partners</div>
        </div>
        <div className='websiteFooter-Box3'>
          <div className='fe1'>Features</div>
          <div className='fe2'>Cash on Delivery</div>
          <div className='fe2'>Serviceable Pin Codes</div>
          <div className='fe2'>API Integration</div>
          <div className='fe2'>Multiple Pickup Locations</div>
          <div className='fe2'>Print Shipping Labels</div>
          <div className='fe2'>Email & SMS Notifications</div>
          <div className='fe2'>Amazon Self-Ship</div>
          <div className='fe2'>All Features</div>

        </div>
      </div>
     </div>
      <div className='websiteFooter-Boxsmall'>
        Copyright © 2022 Cargoz FZE. All rights reserved.
      </div>
    </div> */}