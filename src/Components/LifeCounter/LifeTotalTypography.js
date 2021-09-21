import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => {
  return {
    lifeTotal: {
      fontWeight: "600",

      [theme.breakpoints.down("sm")]: {
        color: ({ currentLife }) => (currentLife > 0 ? "black" : "red"),
      },
      [theme.breakpoints.down("xs")]: {
        color: ({ currentLife }) => (currentLife > 0 ? "black" : "red"),
      },
      color: ({ currentLife, color }) => {
        if (currentLife > 0) {
          if (color === "yellow" || color === "pink") {
            return "black";
          } else {
            return "white";
          }
        } else {
          return "red";
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
