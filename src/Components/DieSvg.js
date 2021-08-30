import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "70%",

      [theme.breakpoints.down("lg")]: {
        width: "85%",
      },
      [theme.breakpoints.down("md")]: {
        width: "75%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "70%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "55%",
      },
    },
  };
});
function DieSvg({ color }) {
  const polygonStyle = { fill: color, stroke: "black", strokeWidth: 5 };
  const classes = useStyles({ color });
  return (
    <svg className={classes.container} viewBox="0 0 510 510">
      <g style={polygonStyle}>
        <polygon points="386.603,185.92 488.427,347.136 488.427,138.944" />
        <polygon points="218.283,18.645 30.827,125.781 131.883,167.893" />
        <polygon points="135.787,202.325 27.264,374.144 235.264,383.189" />
        <polygon points="352.597,170.667 253.781,0 253.739,0 154.923,170.667" />
        <polygon points="471.915,123.051 289.237,18.645 375.445,167.573" />
        <polygon points="19.093,144 19.093,347.136 120.661,186.325" />
        <polygon points="243.093,507.52 243.093,404.843 48.661,396.416" />
        <polygon points="272.235,383.232 480.256,374.144 371.733,202.325" />
        <polygon points="264.427,507.52 458.837,396.416 264.427,404.885" />
        <polygon points="154.475,192 253.76,372.523 353.045,192" />
      </g>
    </svg>
  );
}

export default DieSvg;
