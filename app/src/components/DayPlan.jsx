import React from 'react'
import Meal from "./Meal";
import Grid from "@material-ui/core/Grid/Grid";

function DayPlan(props){
  const { meals } = props;
  const mealsList = meals.map(x => <Meal key={name} foodItems={x.foodItems} name={x.name}/>)

  return (<Grid item>{mealsList}</Grid>)
}

export default DayPlan;
