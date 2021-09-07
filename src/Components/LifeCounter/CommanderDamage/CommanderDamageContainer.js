import { Paper, Typography, Box } from "@material-ui/core";
import CommanderDamageCounter from "./CommanderDamageCounter";
import { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PlayersContext } from "../../../App";
const useStyles = makeStyles((theme) => {
  return {
    content: {
      textAlign: "center",
      paddingTop: "0",
      paddingBottom: "0",
    },
  };
});
function CommanderDamageContainer({ player }) {
  const players = useContext(PlayersContext);
  const [commanderDamageTotals, setCommanderDamageTotals] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    setCommanderDamageTotals(
      players
        .filter((p) => p.id !== player.id)
        .map((p) => {
          return { name: p.name, id: p.id, commanderDamageTaken: 0 };
        })
    );
  }, [players]);
  useEffect(() => {
    console.log("container");
    console.log(player);
  }, [player]);
  return (
    <Paper className={classes.content}>
      <Typography variant="body2">Commander Damage</Typography>
      {commanderDamageTotals && (
        <Box>
          {commanderDamageTotals.map((commanderDamageObject, i) => (
            <CommanderDamageCounter
              player={player}
              enemyPlayer={commanderDamageObject}
              key={i}
            />
          ))}
        </Box>
      )}
    </Paper>
  );
}

export default CommanderDamageContainer;
