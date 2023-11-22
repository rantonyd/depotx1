import React from 'react';
import { Button } from 'antd';
import "./style.css";

function ButtonScreen() {
  return (
    <div className='buttonScreen'>
      <div className='buttonScreen-Box1'>
        <Button type="text" className='getb'>Get Quote</Button>
      </div>
    </div>
  )
}

export default ButtonScreen;