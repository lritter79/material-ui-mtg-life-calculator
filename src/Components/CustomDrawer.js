import { Drawer, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
