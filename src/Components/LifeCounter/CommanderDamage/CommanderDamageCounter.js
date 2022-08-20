import { Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import getColorFromPlayerNumber from "../../Functions/GetColorFromPlayerNumber";

const useStyles = makeStyles((theme) => {
  return {
    color: {
      color: ({ color }) => {
        return `${color}`;
      },
    },
    spaced: {
      paddingTop:'10px',
      paddingBottom:'10px',
    }
  };
});

const PlayerCmdrDamageTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
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
    <Box className={classes.spaced}>
      <PlayerCmdrDamageTextField
        label={`${enemyPlayer.name}`}
        type="number"
        color={`player_${color}`}
        onChange={handleChange}
        value={damage}  
        size="small"
      />
    </Box>
  );
}

export default CommanderDamageCounter;
