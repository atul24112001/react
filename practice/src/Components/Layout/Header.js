import React from 'react';
import HeaderCart from './HeaderCart';

import classes from "./Header.module.css";

export default function Header(props) {
    return (
        <div className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCart onClick={props.onClick} className={classes.cart}/>
        </div>
    )
}
