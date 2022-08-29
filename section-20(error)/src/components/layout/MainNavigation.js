import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./MainNavigation.module.css"

export default function MainNavigation() {
    return (
        <div className={classes.header}>
            <h1 className={classes.logo}>Great Quotes</h1>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink activeClassName={classes.active} to='/all-quote'>All Quotes</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/add-quote'>Add a Quote</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
