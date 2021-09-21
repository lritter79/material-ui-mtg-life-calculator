import { makeStyles } from "@material-ui/core/styles";
import DieSvg from "./DieSvg";
import LifeTotalTypography from "./LifeTotalTypography";

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
    container: {
      position: "relative",
    },
    position: {
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: "0",
      right: "0",
      textAlign: "center",
      top: "40%",
    },
  };
});
function LifeDie({ currentLife, color }) {
  const classes = useStyles({ color });
  const polygonStyle = { fill: color, strokeWidth: 1 };
  return (
    <div className={classes.container}>
      <div className={classes.position}>
        <LifeTotalTypography color={color} currentLife={currentLife} />
      </div>
      <DieSvg color={color} />
    </div>
  );
}

export default LifeDie;
