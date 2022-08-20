import { AppBar, Toolbar, Typography, Tab, Tabs } from "@mui/material";
//import { Menu as MenuIcon } from '@mui/icons-material';
import { useLocation } from "react-router";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  toolbarStyle: {
    display: "flex",
    justifyContent: "space-between",
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
    <AppBar position="static" elevation={0}>
      <Toolbar className={`${classes.toolbarStyle}`}>
        <Typography variant="h6">
          MTG Life Calculator and Dice Roller
        </Typography>
        <Tabs
          aria-label="simple tabs example"
          value={value}
          onChange={handleChange}
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
