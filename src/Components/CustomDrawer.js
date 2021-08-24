import { Drawer, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  drawer: {},
});

function CustomDrawer() {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" anchor="left" classname={classes.drawer}>
      <div>
        <Typography variant="h5">Useful Links</Typography>
      </div>
    </Drawer>
  );
}

export default CustomDrawer;
