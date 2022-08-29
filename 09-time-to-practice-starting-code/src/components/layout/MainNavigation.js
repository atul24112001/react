import { NavLink } from 'react-router-dom'
import React from 'react';
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>GreatQuotes</h1>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink activeClassName={classes.active} to='/quotes'>All Quotes</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/new-quote'>Add Quotes</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

