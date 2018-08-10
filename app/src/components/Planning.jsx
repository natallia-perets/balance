import Grid from "@material-ui/core/Grid";
import MealsMenu from "./MealsMenu";
import WeekPlan from "./WeekPlan";
import React from "react";


function Planning(props) {

  const { mealsMenu } = props;
  const { dayPlans } = props;

  return (<Grid
            container
            wrap="nowrap"
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            spacing={8}
          >
            <Grid item xs={2}>
              <MealsMenu mealsMenu={mealsMenu}/>
            </Grid>
            <Grid item xs={10}>
              <WeekPlan dayPlans={dayPlans}/>
            </Grid>
          </Grid>);
}

export default Planning;
