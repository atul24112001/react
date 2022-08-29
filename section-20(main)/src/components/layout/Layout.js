import React from 'react';
import MainNavigatin from './MainNavigation';
import classes from './Layout.module.css'

export default function Layout(props) {
    return (
        <React.Fragment>
            <MainNavigatin />
            <main className={classes.main}>
                {props.children}
            </main>
        </React.Fragment>
    )
}
