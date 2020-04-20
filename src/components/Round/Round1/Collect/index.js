import React, { useState } from 'react';

const Collect = (props) => {
    const [clicked, setClick]=useState(false);
    const clickHandler=()=>{
        props.balance();
        setClick(true);
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
        Expenses
 </div>
 );
  }
}
export default Collect;