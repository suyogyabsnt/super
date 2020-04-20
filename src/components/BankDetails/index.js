import React, { useState } from 'react';
import classes from './style.module.css';
import logo from '../../assets/wealthy-habits-logo.png';

const BankDetails = (props) => {
   
    return (
        <div className={classes.body}>
            <div className={classes.bodyHeader}>
                <div><img src={logo} /></div>
                <div> <h2>Welcome to the Bank of <br />Wealthy Habits<br />{props.userName}</h2></div>

            </div>
            <div className={classes.details}>
                <div><h3>Total Balance: $ {props.balance}</h3></div>
                <div><h3>Debt Owed: $ {"0"}</h3></div>
            </div>

            <div className={classes.transactionDetail}>
                <h3><a href="#" >Bank Transaction Detail</a></h3>
            </div>




        </div>
    );
}
export default BankDetails;