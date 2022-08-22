import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import React, { ReactNode } from "react";

interface CenteredContainerProps {
  children?: ReactNode;
  // any props that come into the component
}
const useStyles = makeStyles((theme: Theme) => {
  return {
    center: {
      textAlign: "center",
      padding: theme.spacing(1),
    },
  };
});

export default function CenteredContainer({
  children,
}: CenteredContainerProps) {
  const classes = useStyles();

  return <div className={classes.center}>{children}</div>;
}
