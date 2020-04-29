import React, { useState } from 'react';
import classes from './style.module.css';
import Round1 from './Round1/index.js'

const Round = (props) => {
  
    const [totalBalance, setBalance]=useState(0);

    const bankBalance=(balance)=>{
       // let update=eval(totalBalance+balance);

       // console.log("update:"+update)
       let updateBalance=eval(totalBalance+balance);
       console.log("eval:"+updateBalance)
        setBalance(updateBalance);
        props.balance(updateBalance);
        
    }

   
    
   

    return (
    <div>
        <Round1 bankBalanceHandler={bankBalance}></Round1>
    </div>
    );
}
export default Round;