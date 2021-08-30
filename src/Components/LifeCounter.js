import { CategoryContext } from "../App";
import { useContext, useState, useEffect } from "react";
import {
  IconButton,
  NativeSelect,
  Grid,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Clear } from "@material-ui/icons";
import CommanderDamageRadioGroup from "./CommanderDamageRadioGroup";
import getColorFromPlayerNumber from "./Functions/GetColorFromPlayerNumber";
import { objectPattern } from "@babel/types";
import LifeDie from "./LifeDie";

const useStyles = makeStyles((theme) => {
  return {
    select: {
      fontSize: "1.25rem",
    },
    title: {
      textAlign: "left",
      wordBreak: "break-all",
    },
    button: {
      margin: theme.spacing(1),
      //how to set break points in styles
      fontSize: "xxx-large",

      [theme.breakpoints.down("sm")]: {
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

function LifeCounter({ player, playerNumber, setPlayers }) {
  const [currentLife, setCurrentLife] = useState(player.lifeTotal);
  const color = getColorFromPlayerNumber(playerNumber);
  useEffect(() => {
    setCurrentLife(player.lifeTotal);
    setAmountToAddOrSubtract(0);
  }, [player]);
  const selectedCategory = useContext(CategoryContext);
  const [amountToAddOrSubtract, setAmountToAddOrSubtract] = useState(0);
  //const [startingLife, setStartingLife] = useState(selectedCategory.startingLife)
  const handleChange = (event) => {
    setAmountToAddOrSubtract(event.target.value);
  };

  const handleDelete = (event) => {
    setPlayers((prev) =>
      prev
        .filter((p) => p.id !== player.id)
        .map(function (p, i) {
          //console.log(p)
          let obj = Object.assign(p, { id: i });
          //console.log(obj)
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
          console.log(p);
          let obj = Object.assign(p, {
            lifeTotal: +currentLife + +amountToAddOrSubtract,
          });
          console.log(obj);
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
          console.log(p);
          let obj = Object.assign(p, {
            lifeTotal: +currentLife - +amountToAddOrSubtract,
          });
          console.log(obj);
          return obj;
        } else {
          return p;
        }
      })
    );
  };

  var items = [];
  for (var i = 0; i < 101; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    items.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const classes = useStyles({ color });
  //console.log(classes.lifeCounterBox)
  //useEffect(() => {
  //  setStartingLife(selectedCategory.startingLife)
  //}, [selectedCategory])
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
        <LifeDie currentLife={currentLife} color={color}></LifeDie>
      </CardContent>
      <CardActions>
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
        {false && (
          <CommanderDamageRadioGroup
            amountToAddOrSubtract={amountToAddOrSubtract}
            player={player}
            currentLife={currentLife}
          ></CommanderDamageRadioGroup>
        )}
      </CardActions>
    </Card>
  );
}

export default LifeCounter;
