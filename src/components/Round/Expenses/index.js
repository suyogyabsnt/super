import React, { useState } from 'react';
import 'material-design-icons'
import classes from './style.module.css';
import MyVerticallyCenteredModal from '../Round1/BankRegister/index'

const Expenses = (props) => {

    const expenses = [
        {
            id: 1,
            key: 'Housing',
            value: -300,
            placeHolder: 'Pay $300'
        }, {
            id: 2,
            key: 'Living',
            value: -100,
            placeHolder: 'Pay $100'
        }, {
            id: 3,
            key: 'Transportation',
            value: -200,
            placeHolder: 'Pay $200'
        }, {
            id: 4,
            key: 'SelfImprovment',
            value: -100,
            placeHolder: 'Pay $100'
        }, {
            id: 5,
            key: 'Play',
            value: -100,
            placeHolder: 'Pay $100'
        }, {
            id: 6,
            key: 'Donation',
            value: -100,
            placeHolder: 'Pay $100'
        }, {
            id: 7,
            key: 'Splurge',
            value: -100,
            placeHolder: 'Pay $100'
        },
         {
            id: 8,
            key: 'BankRegister',
            value: 0,
            placeHolder: 'Open Bank Register'
        }
    ]


    const [clicked, setClicked] = useState(0);

    const anotherScreen = () => {
        let prev = clicked;
       
        props.balance(expenses[clicked].value);
        console.log("value:" + expenses[clicked].value)
        setClicked(prev + 1);

    }


    const [modalShow, setModalShow] = useState(false);




    if (clicked <= 5) {
        return (
            <div className={classes.body}>
                <p><span class="material-icons">
                    house
</span>{expenses[clicked].key}</p>
                <button className={classes.button} onClick={anotherScreen} >{expenses[clicked].placeHolder}</button>
            </div>
        );

    }
    else if (clicked == 6) {
        return (
            <div className={classes.body}>
                <p>{expenses[clicked].key}</p>
                <button className={classes.button} onClick={anotherScreen} >{expenses[clicked].placeHolder}</button>
                <button className={classes.button} onClick={anotherScreen}>No, not Interested</button>
            </div>
        );
    }
    else if (clicked == 7) {
        return (
            <div className={classes.body}>
                <p>{expenses[clicked].key}</p>
                <button className={classes.button} onClick={() => setModalShow(true)}>{expenses[clicked].placeHolder}</button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        );
    }




}
export default Expenses;