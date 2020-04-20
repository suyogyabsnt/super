import React, { useState } from 'react';
import Collect from './Collect/index'

const Round1 = (props) => {

    const [clicked, setClick]=useState(false);
    const clickHandler=()=>{
        setClick(true)
    }
    const noHandler=()=>{
        alert('You cannot Go Collect your Money until you do your job')
    }

    
    const balanceHandler=()=>{
        props.bankBalanceHandler(1000);
    }
    if (clicked==false){
    return (
    <div>
        <p>Did you finish your job?</p>
        <button value='yes' onClick={clickHandler}>Yes</button>
        <button value='no' onClick={noHandler}>No</button>
    </div>
    );
    }
    else if(clicked==true){
        return (
            <div>
                <Collect balance={balanceHandler}/>
            </div>
            );

    }
}
export default Round1;