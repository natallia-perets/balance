import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  menuList: {
    overflow: 'scroll',
    maxHeight: 100,
    backgroundColor: theme.palette.background.paper,
  },
  menuItem:{
    fontSize: '0.8em',
    paddingTop: 0,
    paddingBottom: 0
  }
});

function MealsMenu(props) {
  const { classes } = props;
  const { carbs } = props.mealsMenu;
  const { fats } = props.mealsMenu;
  const { proteins } = props.mealsMenu;

  function mapItemsToMenuItems(items) {
    return items.map(x => <MenuItem className={classes.menuItem} children={x}></MenuItem>)
  }

  return (
            <div>
              <MenuList className={classes.menuList} children={mapItemsToMenuItems(carbs)}/>
              <Divider/>
              <MenuList className={classes.menuList} children={mapItemsToMenuItems(fats)}/>
              <Divider/>
              <MenuList className={classes.menuList} children={mapItemsToMenuItems(proteins)}/>
            </div>
          )
}



export default withStyles(styles)(MealsMenu);