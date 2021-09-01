import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blue: {
    color: `blue`,
  },
  green: {
    color: `green`,
  },
  red: {
    color: `red`,
  },
  yellow: {
    color: `yellow`,
  },
  white: {
    color: `white`,
  },
  pink: {
    color: `pink`,
  },
  black: {
    color: `black`,
  },
  orange: {
    color: `orange`,
  },
}));

function CommanderDamageCounter({
  amountToAddOrSubtract,
  player,
  className,
  currentLife,
}) {
  const [commanderDamage, setCommanderDamage] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (isSelected) {
      setCommanderDamage((prev) => +prev + +amountToAddOrSubtract);
      setIsSelected(false);
    }
  }, [currentLife]);
  console.log(player.id);
  const classes = useStyles();
  return (
    <div>
      <Checkbox
        className={classes[player.color]}
        value={player.id}
        checked={isSelected}
      />
      <Typography variant="body1">{`${player.name}: ${commanderDamage}`}</Typography>
    </div>
  );
}

export default CommanderDamageCounter;
