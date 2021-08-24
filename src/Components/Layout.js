import React from "react";
import { makeStyles } from "@material-ui/core";
import CustomDrawer from "./CustomDrawer";
import TopMenu from "./TopMenu";
import categories from "./Categories";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    width: "100%",
  },
});

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomDrawer></CustomDrawer>
      {/** top menu */}
      <div className={classes.page}>{children}</div>
    </div>
  );
}

export default Layout;
