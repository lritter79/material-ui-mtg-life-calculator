import { Box, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import getColorFromPlayerNumber from "../../Functions/GetColorFromPlayerNumber";

const useStyles = makeStyles((theme) => {
  return {
    color: {
      color: ({ color }) => {
        return `${color}`;
      },
    },
  };
});

function CommanderDamageCounter({ player, enemyPlayer }) {
  const [damage, setDamage] = useState(0);
  const color = getColorFromPlayerNumber(enemyPlayer.id);
  const classes = useStyles({ color });
  useEffect(() => {
    setDamage(0);
  }, [player]);
  const handleChange = (e) => {
    setDamage(e.target.value);
    // setPlayers((prev) => {
    //   prev.map((p) => {
    //     console.log(p);
    //     console.log(player);
    //     if (p.id !== player.id) {
    //       return p;
    //     } else {
    //       let obj = p.commanderDamageArray;
    //       console.log(obj);
    //       Object.assign(p, {
    //         commanderDamageArray: obj,
    //       });
    //       console.log(p);
    //       return p;
    //     }
    //   });
    // });
  };

  return (
    <Box>
      <TextField
        label={`${enemyPlayer.name}`}
        type="number"
        className={classes.color}
        onChange={handleChange}
        value={damage}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}

export default CommanderDamageCounter;
