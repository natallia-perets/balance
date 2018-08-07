import React from 'react'
import DayPlan from "./DayPlan";

function WeekPlan(props){
  const dayPlans = props.dayPlans;

  const dayPlanList = dayPlans.map(x => <DayPlan key={x.date} meals={x.meals} date={x.date}/>)
  return (<section className="weekPlan">{dayPlanList}</section>)
}

export default WeekPlan;