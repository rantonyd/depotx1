import React from 'react';
import {IoIosArrowDropright} from "react-icons/io"
import log from "../../assets/logistic.png";
import "./style.css";
function TypeScreen() {
  return (
    <div className='typeScreen'>
      <div className='typeScreen-Box1'>
        <div className='typeScreen-Box2'>
          Type of Warehouse
        </div>
        <div className='typeScreen-Box3'>
          <img className="log" src={log} alt="" />
        </div>
        <div className='typeScreen-Box4'>
           <div className='typeScreen-Box4-1'>
             Warehouses come in various types to serve different purposes.
              Distribution warehouses are designed for efficiently storing and shipping products to customers
              . Cold storage warehouses maintain low temperatures for perishable goods. 
              Manufacturing warehouses support production processes by storing raw materials and finished products. 
           </div>
           <div className='typeScreen-Box4-2'>
           Bulk storage warehouses house large quantities of non-perishable items. E-commerce and fulfillment centers are optimized for processing online orders quickly. Each type of warehouse is tailored to specific needs within the supply chain, ensuring goods are stored and handled appropriately.
           </div>
        </div>
        <div className='typeScreen-Box5'>
         <div className='typeScreen-Box5-0'>
          <div className='typeScreen-Box5-1'>
            general  AC warehouse<IoIosArrowDropright className='ios'/>
          </div>
          <div className='typeScreen-Box5-2'>
           Free zone Storage<IoIosArrowDropright className='ios'/>
          </div>
          <div className='typeScreen-Box5-3'>
           furniture storage<IoIosArrowDropright className='ios'/>
          </div>
          <div className='typeScreen-Box5-4'>
           3PL logistics<IoIosArrowDropright className='ios'/>
          </div>
          <div className='typeScreen-Box5-5'>
           DG Storage<IoIosArrowDropright className='ios'/>
          </div>
         </div>
         <div className='typeScreen-Box5-00'>
           <div className='typeScreen-Box5-01'>
             general warehouse<IoIosArrowDropright className='ios'/>
           </div>
           <div className='typeScreen-Box5-02'>
             Open yard<IoIosArrowDropright className='ios'/>
           </div>
           <div className='typeScreen-Box5-03'>
           rice & maida storage<IoIosArrowDropright className='ios'/>
           </div>
           <div className='typeScreen-Box5-04'>
           pet prdv storage<IoIosArrowDropright className='ios'/>
           </div>
           <div className='typeScreen-Box5-05'>
           dark store<IoIosArrowDropright className='ios'/>
           </div>
           
         </div>
         <div className='typeScreen-Box5-000'>
           <div className='typeScreen-Box5-001'>
            luxury vehicle storage<IoIosArrowDropright className='ios'/>
           </div>
           <div className='typeScreen-Box5-002'>
            medical equipment storage<IoIosArrowDropright className='ios'/>
           </div>
           <div className='typeScreen-Box5-003'>
            luxury vehicle storage<IoIosArrowDropright className='ios'/>
           </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default TypeScreen;