import React, { useState, useEffect } from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../../Hooks/use-http';

const AvailableMeals = () => {
  const [mealData, setmealData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   try {
  //     const response = fetch("https://react-fooddelivery-332e9-default-rtdb.firebaseio.com/meals.json");

  //     if (!response.ok) {
  //       throw new Error("Somthing Went Wrong");
  //     }

  //     const data = response.json();

  //     const Meals = [];
  //     for(const key in data) {
  //       Meals.push({
  //         id: key,
  //         name: data[key].name,
  //         description: data[key].description,
  //         price: data[key].price
  //       })
  //     }
  //     setmealData(Meals)
  //   } catch (error) {
  //       setError(error.message);
  //   }
  // }, [])

  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    // try {
    //   fetch("https://react-fooddelivery-332e9-default-rtdb.firebaseio.com/meals.json").then(response => {
    //   if(response.ok) {
    //     return response.json();
    //   }
    //   throw response;
    // }).then(data => {
    //   const meals = []
    //   for (const taskKey in data) {
    //     meals.push({
    //        id: taskKey,
    //         description: data[taskKey].description,
    //         price: data[taskKey].price,
    //         name: data[taskKey].name
    //       });
    //   }
    //   setmealData(meals);
    // })
    // } catch(error) {
    //   setError(error)
    // }
    const transformData = data => {
      const meals = [];

      for (const key in data) {
        meals.push({
          id: key,
          description: data[key].description,
          price: data[key].price,
          name: data[key].name
        })
      }
      setmealData(meals)
    }
    fetchMeals({
      url: "https://react-fooddelivery-332e9-default-rtdb.firebaseio.com/meals.json"
    }, transformData)
  }, [fetchMeals])

  const mealsList = mealData.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <React.Fragment>
      {isLoading && <h3 style={{ textAlign: "center", color: "white" }}>Loading...</h3>}
      <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>

      <section className={classes.meals}>
        {!isLoading && <Card>
          <ul>{mealsList}</ul>
        </Card>}
      </section>
    </React.Fragment>
  );
};

export default AvailableMeals;
