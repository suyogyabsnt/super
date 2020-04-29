import React, { useState } from 'react';
import Expenses from '../../Expenses/index'

const Collect = (props) => {
    const [clicked, setClick]=useState(false);
    const clickHandler=()=>{
        props.balance(1000);
        setClick(true);
    }

    const expenseClickhandler=(bal)=>{
        props.balance(bal)
        console.log("collect balance value"+bal)
    }
    
  if(clicked==false){
    return (
    <div>
       <button onClick={clickHandler}>Collect your Payment Here</button>  
    </div>
    );
  }
  else{
    return (
    <div> 
        <Expenses balance={expenseClickhandler}/>
        
    </div>
 );
  }
}
export default Collect;