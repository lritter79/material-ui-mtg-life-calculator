import { Paper, Typography, Box } from "@mui/material";
import CommanderDamageCounter from "./CommanderDamageCounter";
import { useEffect, useState, useContext } from "react";
import { makeStyles } from "@mui/styles";
import { PlayersContext } from "../../../App";
import PlayerInterface from "../../../PlayerInterface";

const useStyles = makeStyles((theme) => {
  return {
    content: {
      textAlign: "center",
      paddingTop: "0",
      paddingBottom: "0",
    },
  };
});

// interface CommanderDamageContainerProps {
//   player: PlayerInterface;
// }

function CommanderDamageContainer({ player }) {
  const players = useContext(PlayersContext);
  const [commanderDamageTotals, setCommanderDamageTotals] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setCommanderDamageTotals(
      players
        .filter((p) => p.id !== player.id)
        .map((p, i) => {
          return {
            name: p.name,
            id: p.id,
            commanderDamageTaken: 0,
            playerNumber: p.id,
          };
        })
    );
  }, [players]);
  useEffect(() => {
    //console.log("container");
    //console.log(player);
  }, [player]);
  return (
    <>
      {" "}
      {players.length > 1 && (
        <Paper className={classes.content}>
          <Typography variant="h5">Commander Damage</Typography>
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
      )}
    </>
  );
}

export default CommanderDamageContainer;
