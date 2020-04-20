import React, { useState } from 'react';
import classes from './style.module.css';
import Home from '../components/Home/index';
import BankDetails from '../components/BankDetails/index';
import Rounds from '../components/Round/index';


const Router = (props) => {

    const [clicked, setClicked] = useState(true);
    const [userName, setUserName] = useState("");
    const [balance, setBalance] = useState(0);
    

    const loginClicked = () => {
        setClicked(false)

    }

    const userNameInput = (name) => {
        setUserName(name);
        console.log(userName);
    }

    const bankBalanceHandler = (balance) => {
        setBalance(balance);
    }



    if (clicked == false) {
        return (

            <div className={classes.playBackground}>
                <div className={classes.AppBackGround1}>
                    <Rounds balance={bankBalanceHandler} />

                </div>
                <div className={classes.AppBackGround2}>
                    <BankDetails balance={balance} userName={userName}  />
                </div>

            </div>

        );
    }
    else {
        return (
            <div className={classes.playBackground}>
                <div className={classes.AppBackGround}>

                    <Home clickHandler={loginClicked} userNameHandler={userNameInput} />
                </div>
            </div>
        );
    }
}
export default Router;