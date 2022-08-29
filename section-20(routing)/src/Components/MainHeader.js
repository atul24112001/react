import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./MainHeader.module.css"

export default function MainHeader() {
    return (
        <div className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? `${classes.active}` : ""} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? `${classes.active}` : ""} to='/product'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
