import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DieSvg from "./DieSvg";

const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      backgroundColor: ({ color }) => {
        return `${color}`;
      },
      color: ({ color }) => {
        if (color === "yellow") {
          return "black";
        } else {
          return "white";
        }
      },
    },
    triangle: {
      width: 0,
      borderBottom: "120px solid red",
      borderLeft: "60px solid white",
      borderRight: "60px solid white",
    },
    container: {},
  };
});
function LifeDie({ currentLife, color }) {
  const classes = useStyles({ color });
  const polygonStyle = { fill: color, strokeWidth: 1 };
  return (
    <div className={classes.container}>
      <Typography variant="body2">{currentLife}</Typography>
      <DieSvg color={color} />
    </div>
  );
}

export default LifeDie;
