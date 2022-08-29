import React from 'react';
import classes from "./Header.module.css";
import HeaderCart from './HeaderCart';

export default function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCart onClick={props.onCartOpen}/>
            </header>
            <div className={classes["main-image"]}>
                <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt='A table full of Meals.' />
            </div>
        </React.Fragment>
    )
}
