import React from 'react'
import Meals from './Meals'
import classes from './MealsItem.module.css'

export default function MealsItem(props) {
    return (
        <ul className={classes.meallist}>
            {props.data.map(meal => {
                return (
                    <Meals 
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    price={meal.price}
                    description={meal.description}
                    />
                )
            })}
        </ul>
    )
}
