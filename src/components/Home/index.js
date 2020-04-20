import React, { useState } from 'react';
import classes from './style.module.css';

const Home = (props) => {
   
    const [userName,setUserName]=useState('');
    return (
        <div className={classes.body}>
            <h1>LOGIN</h1>
            <form>
                <label>
                    UserName:
                    <input type="text" name="userName" required onChange={e=>setUserName(e.target.value)} onSubmit={props.userNameHandler(userName)}></input><br/>
                </label>
                <input className={classes.button} type="submit" value="Login" onClick={props.clickHandler}></input>
            </form>
        
    </div>
    );
}
export default Home;