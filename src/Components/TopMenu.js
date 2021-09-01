import { AppBar, Toolbar, Typography, Tab, Tabs } from "@material-ui/core";
//import { Menu as MenuIcon } from '@material-ui/icons';
import { useLocation } from "react-router";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  toolbarStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonStyle: {
    borderColor: "white",
    color: "white",
  },
  indicator: {
    backgroundColor: "white",
  },
});

function TopMenu() {
  const classes = useStyles();

  //const [value, setValue] = useState(location);

  //const handleChange = (e) => setValue(window.location);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="static">
      <Toolbar className={`${classes.toolbarStyle} ${classes.buttonStyle}`}>
        <Typography variant="h6">
          MTG Life Calculator and Dice Roller
        </Typography>
        <Tabs
          aria-label="simple tabs example"
          value={value}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator,
          }}
        >
          <Tab
            index={0}
            label="Life Counter"
            component={Link}
            to="/lifecounter"
            aria-label="navigate to Life Counter"
          />
          <Tab
            index={1}
            label="Dice Roller"
            component={Link}
            to="/diceroller"
            aria-label="navigate to dice roller"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default TopMenu;
