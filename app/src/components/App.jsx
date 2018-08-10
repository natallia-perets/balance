import React from 'react';
import { hot } from "react-hot-loader";

import Planning from "./Planning";

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

const mealsMenu = {carbs: ["oats", "rice", "mango"], fats: ["avocado", "olive oil", "butter", "fish"], proteins: ["salmon", "chicken", "beef"]};

const App = () => <Planning dayPlans={dayPlans} mealsMenu={mealsMenu}/>

export default hot(module)(App)