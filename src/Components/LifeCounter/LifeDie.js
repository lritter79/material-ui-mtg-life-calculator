import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import DieSvg from "./DieSvg";
import LifeTotalTypography from "./LifeTotalTypography";
import { useSpring, animated } from "react-spring";

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
      zIndex: 1,
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
  // from {transform:rotate(0deg);}
  // to {transform:rotate(360deg);}
  // useEffect(() => {
  //   if (currentLife <= 0) {
  //     console.log("dead");
  //   }
  // }, [currentLife]);
  const polygonStyle = { fill: color, strokeWidth: 1 };
  const contentProps = useSpring({
    transform: currentLife >= 1 ? "rotate(0deg)" : "rotate(180deg)",
  });
  return (
    <div className={classes.container}>
      <div className={classes.position}>
        <LifeTotalTypography color={color} currentLife={currentLife} />
      </div>
      <animated.div style={contentProps}>
        <DieSvg color={color} />
      </animated.div>
    </div>
  );
}

export default LifeDie;
