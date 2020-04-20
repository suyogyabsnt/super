import React, { useState } from 'react';
import classes from './style.module.css';
import Round1 from './Round1/index.js'

const Round = (props) => {
  
    const bankBalance=(balance)=>{
        props.balance(balance);
    }
    
   

    return (
    <div>
        <Round1 bankBalanceHandler={bankBalance}></Round1>
    </div>
    );
}
export default Round;