import { CategoryContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import {
  IconButton,
  NativeSelect,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  CardActions,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Clear } from "@mui/icons-material";
import getColorFromPlayerNumber from "../Functions/GetColorFromPlayerNumber";
import LifeDie from "./LifeDie";
import CommanderDamageContainer from "./CommanderDamage/CommanderDamageContainer";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme) => {
  return {
    header: {
      alignItems: "baseline",
    },
    action: {
      justifyContent: "center",
    },
    select: {
      fontSize: "1.25rem",
    },
    title: {
      textAlign: "left",
      wordBreak: "break-all",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    button: {
      margin: theme.spacing(1),
      //how to set break points in styles
      fontSize: "xxx-large",

      [theme.breakpoints.down("sm")]: {
        fontSize: "xx-large",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "xx-large",
      },
    },
    close: {
      "&:hover": {
        color: "red",
      },
    },
    lifeCounterBox: {
      borderRadius: "10px",
      boxShadow:
        "0px 4px 5px 0px rgb(0 0 0 / 14%), 4px 4px 5px 0px rgb(0 0 0 / 14%)",
      backgroundColor: "#fafafa",
      borderStyle: "outset",
      border: ({ color }) => {
        return `0.20em solid ${color}`;
      },
    },
    content: {
      textAlign: "center",
      paddingTop: "0",
      paddingBottom: "0",
    },
    addLife: {
      color: "green",
    },
    subtractLife: {
      color: "red",
    },
    h6: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1.5rem",
    },
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
  };
});

function LifeCounterCard({ player, playerNumber, players, setPlayers }) {
  const [currentLife, setCurrentLife] = useState(player.lifeTotal);
  const color = getColorFromPlayerNumber(player.id);
  const [commanderDamageHeight, setCommanderDamageHeight] = useState();
  useEffect(() => {
    console.log("mounting");
    //setCommanderDamageHeight(getHeight(players.length));
  }, []);

  useEffect(() => {
    setCurrentLife(player.lifeTotal);
    setAmountToAddOrSubtract(1);
  }, [player]);

  useEffect(() => {
    // console.log(height);
    setCommanderDamageHeight(getHeight(players.length));
    // console.log(height);
    //console.log(players);
  }, [players]);
  const selectedCategory = useContext(CategoryContext);
  const [amountToAddOrSubtract, setAmountToAddOrSubtract] = useState(1);
  //const [startingLife, setStartingLife] = useState(selectedCategory.startingLife)
  const handleChange = (event) => {
    setAmountToAddOrSubtract(event.target.value);
  };

  const getHeight = (numberOfPlayers) => {
    console.log(numberOfPlayers);
    return 40 + 70 * (numberOfPlayers - 1);
  };

  const handleDelete = (event) => {
    setPlayers((prev) =>
      prev
        .filter((p) => p.id !== player.id)
        .map(function (p, i) {
          //console.log(p)
          let obj = Object.assign(p, { id: i });
          //obj.commanderDamageArray = p.commanderDamageArray.filter(
          //  (playerObj) => playerObj.id !== player.id
          //);
          //console.log(obj);
          return obj;
        })
    );
  };

  const addLife = (event) => {
    //for the additional '+' see https://stackoverflow.com/questions/14496531/adding-two-numbers-concatenates-them-instead-of-calculating-the-sum
    setCurrentLife(+currentLife + +amountToAddOrSubtract);
    setPlayers((prev) =>
      prev.map(function (p, i) {
        if (player.id === p.id) {
          //console.log(p);
          let obj = Object.assign(p, {
            lifeTotal: +currentLife + +amountToAddOrSubtract,
          });
          //console.log(obj);
          return obj;
        } else {
          return p;
        }
      })
    );
  };

  const subtractLife = (event) => {
    //for the additional '+' see https://stackoverflow.com/questions/14496531/adding-two-numbers-concatenates-them-instead-of-calculating-the-sum
    setCurrentLife(+currentLife - +amountToAddOrSubtract);
    setPlayers((prev) =>
      prev.map(function (p, i) {
        if (player.id === p.id) {
          //console.log(p);
          let obj = Object.assign(p, {
            lifeTotal: +currentLife - +amountToAddOrSubtract,
          });
          //console.log(obj);
          return obj;
        } else {
          return p;
        }
      })
    );
  };

  var items = [];
  for (var i = 0; i < 50; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    items.push(
      <option value={+i + 1} key={i}>
        {+i + 1}
      </option>
    );
  }

  const classes = useStyles({ color });
  //console.log(classes.lifeCounterBox)
  //useEffect(() => {
  //  setStartingLife(selectedCategory.startingLife)
  //}, [selectedCategory])

  // const transition = useTransition(selectedCategory.isCommander, {
  //   from: { opacity: 0, marginTop: -20 },
  //   enter: (item) => async (next) => {
  //     await next({ marginTop: 0, opacity: 1 });
  //   },
  //   leave: (item) => async (next) => {
  //     //await next({});
  //     await next({ opacity: 0, height: 0, marginTop: 0 });
  //   },
  // });

  const slideInStyles = useSpring({
    opacity: selectedCategory.isCommander ? 1 : 0,
    height: selectedCategory.isCommander ? commanderDamageHeight : 0,
  });
  return (
    <Card className={`${classes.lifeCounterBox}`}>
      <CardHeader
        aria-details=""
        title={player.name}
        titleTypographyProps={{ className: `${classes.title}` }}
        action={
          <IconButton
            onClick={handleDelete}
            className={`${classes.button} ${classes.close}`}
          >
            <Clear className={`${classes.subtractLife}`}></Clear>
          </IconButton>
        }
        avatar={
          <Avatar className={classes.avatar}>
            {player.name[0].toUpperCase()}
          </Avatar>
        }
      ></CardHeader>
      <CardContent className={classes.content}>
        {/*<Typography variant="body2">{currentLife}</Typography>*/}
        <LifeDie currentLife={currentLife} color={color} />
      </CardContent>
      <CardActions className={classes.action}>
        <IconButton
          className={`${classes.button}`}
          onClick={addLife}
          aria-label={`Add ${amountToAddOrSubtract} to the life total of ${player.name}`}
        >
          <AddCircleIcon
            fontSize="inherit"
            className={`${classes.addLife}`}
          ></AddCircleIcon>
        </IconButton>
        <NativeSelect
          value={amountToAddOrSubtract}
          onChange={handleChange}
          className={`${classes.select}`}
          aria-label={`Selects the amount to add or subtract from the life total of ${player.name}`}
        >
          {items}
        </NativeSelect>
        <IconButton
          className={`${classes.button}`}
          onClick={subtractLife}
          aria-label={`Subtract ${amountToAddOrSubtract} from the life total of ${player.name}`}
        >
          <RemoveCircleIcon
            fontSize="inherit"
            className={`${classes.subtractLife}`}
          ></RemoveCircleIcon>
        </IconButton>
      </CardActions>
      <CardContent>
        <animated.div style={slideInStyles}>
          <CommanderDamageContainer player={player} />
        </animated.div>
      </CardContent>
    </Card>
  );
}

export default LifeCounterCard;
