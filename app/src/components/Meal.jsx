import React from 'react';
import Food from './Food';

function Meal(props){
  const foodItems = props.foodItems;
  const mealName = props.name;

  const listItems = foodItems.map(x => <Food key={x.id} name={x.name}/>);
  return (<section>
           <h1>{mealName}</h1>
           <div className="mealItem">{listItems}</div>
         </section>)

}

export default Meal;