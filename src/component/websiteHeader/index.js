import React,{ useState } from 'react';
import logos from "../../assets/depotx logo 1.png";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip,Drawer } from 'antd';
import {AiOutlineMenu } from "react-icons/ai";
import "./style.css"

function WebsiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="navbar">
      <div className="websiteHeader-Box1">
        <img className="logo" src={ logos } alt="" /> 
       </div>
       <div className="websiteHeader-Box2">
         <div className="websiteHeader-Box3">
            <div className='item'>Home</div>
             <div className='item'>Service</div>
             <div className='item'>Tracking</div>
             <div className='item'>Products</div>
             <div className='item'>Partner/Vendor</div>
             <div className='item'>Login</div> 
         </div>
         <div className="websiteHeader-Box4">
            <Tooltip title="search">
             <Button className='search' shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
         </div>
         <div className="websiteHeader-Box5">
          <div className="websiteHeader-Box6">
            <Button type="text" >Get Quote</Button>
          </div>
         </div>
      </div>
       <div className="si" onClick={()=>setOpen(true)}><AiOutlineMenu className='aiicon'/></div>
    </div>
    <Drawer title="" placement="right" onClose={()=>setOpen(false)} open={open}>
        <p>Home</p>
        <p>Service</p>
        <p>Tracking</p>
        <p>Products</p>
        <p>Partner/Vendor</p>
        <p>Login</p>
      </Drawer>
    </>
  );
}


export default WebsiteHeader;
