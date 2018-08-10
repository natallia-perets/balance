import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  layoutRoot: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    margin: theme.spacing.unit / 2,
    height: theme.spacing.unit * 20
  },
  headLine:{
    fontSize: '0.8em'
  },
  chip: {
    fontSize: '0.8em',
    margin: theme.spacing.unit / 2,
    justifyContent: 'left',
    height: '1.6em',
  },
  avatar: {
    height: '1.5em',
    width: '1.5em'
  },
  deleteIcon:{
    marginLeft: 'auto'
  },
  label: {
    display: 'block',
    wordWrap: 'break-word'
  }
});


function Meal(props){
  const { classes } = props;
  const foodItems = props.foodItems;
  const mealName = props.name;

  const foodChips = foodItems.map(x => <Chip label={x.name}
                                             avatar={<Avatar>EH</Avatar>}
                                             onDelete={function(){alert("ddd");}}
                                             classes={{
                                               root: classes.chip,
                                               avatar: classes.avatar,
                                               deleteIcon: classes.deleteIcon,
                                               label: classes.label
                                             }}/>);

  return (<Paper className={classes.layoutRoot} elevation={1}>
              <Typography className={classes.headLine} variant="headline">
                {mealName}
              </Typography>
              {foodChips}
          </Paper>)

}

export default withStyles(styles)(Meal);