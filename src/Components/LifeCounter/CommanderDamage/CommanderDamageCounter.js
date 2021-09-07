import { Box, TextField } from "@material-ui/core";
import { useState, useContext, useEffect } from "react";

function CommanderDamageCounter({ player, enemyPlayer }) {
  const [damage, setDamage] = useState(0);
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
