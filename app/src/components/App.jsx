import React from 'react';
import WeekPlan from './WeekPlan';
import { hot } from "react-hot-loader";

const breakfastFoodItems = [
  { name : "mango", id : 1},
  { name : "cashew yogurt",  id : 2},
  { name : "coffee", id : 1},
]

const lunchFoodItems = [
  { name : "rice", id : 1},
  { name : "chicken",  id : 2}
]

const snackFoodItems = [
  { name : "almonds", id : 1},
  { name : "apple",  id : 2}
]

const meals = [
  {name: "Breakfast", foodItems : breakfastFoodItems},
  {name: "Snack Time", foodItems : snackFoodItems},
  {name: "Lunch", foodItems : lunchFoodItems},
]

const dayPlan = {date:'8-1-2018', meals:meals}

const dayPlans = [dayPlan, dayPlan, dayPlan, dayPlan, dayPlan, dayPlan, dayPlan]

const App = () => <WeekPlan dayPlans={dayPlans}/>;
export default hot(module)(App)