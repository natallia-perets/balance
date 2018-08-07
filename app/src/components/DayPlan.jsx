import React from 'react'
import Meal from "./Meal";

function DayPlan(props){
  const meals = props.meals;
  const mealsList = meals.map(x => <Meal key={name} foodItems={x.foodItems} name={x.name}/>)
  return (<section className="dayPlan">{mealsList}</section>)
}

export default DayPlan;
