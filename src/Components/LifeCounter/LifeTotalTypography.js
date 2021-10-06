import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => {
  return {
    lifeTotal: {
      fontWeight: "500",

      [theme.breakpoints.down("sm")]: {
        color: ({ currentLife }) => (currentLife > 0 ? "black" : "red"),
      },
      [theme.breakpoints.down("xs")]: {
        color: ({ currentLife }) => (currentLife > 0 ? "black" : "red"),
      },
      color: ({ color }) => {
        if (color === "yellow" || color === "pink") {
          return "black";
        } else {
          return "white";
        }
      },
    },
  };
});

function LifeTotalTypography({ currentLife, color }) {
  const classes = useStyles({ currentLife, color });
  return (
    <Typography variant="body2" className={classes.lifeTotal}>
      {currentLife}
    </Typography>
  );
}

export default LifeTotalTypography;
