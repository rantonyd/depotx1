import React from 'react';
import {BiDownArrowCircle} from "react-icons/bi";
import rec1 from "../../assets/Rectangle 42.png";
import rec2 from "../../assets/Rectangle 43.png";
import rec3 from "../../assets/Rectangle 44.png";
import rec4 from "../../assets/Rectangle 45.png";
import rec5 from "../../assets/Rectangle 46.png";
import rec6 from "../../assets/Rectangle 47.png";
import "./style.css";
function ClientScreen() {
  return (
    <div className='clientScreen'>
      <div className='clientScreen-Box1'>
        <div className='clientScreen-Box2'>
          client organizations
        </div>
        <div className='clientScreen-Box3'>
          <div className='m1'>
            <img className="cl1" src={rec1} alt="" />
            <div className="image-container">
              Dubai Investments Park
            </div>
          </div>
          <div className='m1'>
            <img className="cl1" src={rec2} alt="" />
            <div className="image-container">
              Dubai Internet City 
            </div>
          </div>
          <div className='m1'>
            <img className="cl1" src={rec3} alt="" />
            <div className="image-container">
              Jafza Dubai
            </div>
          </div>
        </div>
        <div className='clientScreen-Box4'>
        <div className='m1'>
            <img className="cl1" src={rec4} alt="" />
            <div className="image-container">
             Al Qusais Dubai
            </div>
          </div>
          <div className='m1'>
            <img className="cl1" src={rec5} alt="" />
            <div className="image-container">
             Al Quoz Dubai
            </div>
          </div>
          <div className='m1'>
            <img className="cl1" src={rec6} alt="" />
            <div className="image-container">
             Al Quoz Dubai
            </div>
          </div>
        </div>
        <div className='clientScreen-Box5'>
         View more
         <br/>
         <BiDownArrowCircle className='bi1'/>
        </div>
      </div>
    </div>
  )
}

export default ClientScreen;