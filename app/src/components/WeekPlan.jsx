import React from 'react'
import DayPlan from "./DayPlan";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core/styles";

const styles = {
  root: {
    overflowX: 'auto'
  }
}

function WeekPlan(props){
  const { dayPlans } = props;
  const { classes } = props;

  const dayPlanList = dayPlans.map(x => <DayPlan item key={x.date} meals={x.meals} date={x.date}/>)

  return (<Grid container className={classes.root} wrap={"nowrap"}>{dayPlanList}</Grid>)
}

export default withStyles(styles)(WeekPlan);