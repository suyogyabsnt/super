import React from 'react';
import classes from './style.module.css'
import logo from '../../assets/wealthy-habits-logo.png'

const Header = (props) => {
    return (
        <div className={classes.body}>
            <div className={classes.logo}><img src={logo} alt="wealthy_habits_logo"/></div>
            <div className={classes.header}>
                <p>Super Money App Game</p>
            </div>
        </div>
    );
}
export default Header;